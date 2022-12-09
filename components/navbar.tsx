import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
  HStack,
  Box,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "gray.900")}
        px={4}
        backdropFilter="auto"
        backdropBlur="8px"
        //position="fixed"
        w={'100%'}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <Box mx={5}>
                <Text
                  fontFamily={"Dancing Script"}
                  fontSize={[14, 20, 20, 20]}
                  color={color}
                >
                  Sindy Aprilia
                </Text>
              </Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {colorMode === "light" ? (
                <>
                  <Link href={"/about"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.600",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        About
                      </Text>
                    </Button>
                  </Link>
                  <Link href={"/projects"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.600",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Projects
                      </Text>
                    </Button>
                  </Link>
                  <Link href={"/gallery"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.600",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Gallery
                      </Text>
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/about"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.100",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        About
                      </Text>
                    </Button>
                  </Link>
                  <Link href={"/projects"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.100",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Projects
                      </Text>
                    </Button>
                  </Link>
                  <Link href={"/gallery"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.100",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Gallery
                      </Text>
                    </Button>
                  </Link>
                </>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href={"/about"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>About</Text>
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                    Projects
                  </Text>
                </Button>
              </Link>
              <Link href={"/gallery"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>Gallery</Text>
                </Button>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
