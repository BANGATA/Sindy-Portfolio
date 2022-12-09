import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Image,
  Stack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Welcoming = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textHeader = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorModeValue("black", "white");
  return (
    <>
      {colorMode === "light" ? (
        <Flex
          minH={"100vh"}
          flexDir={"column"}
          bgRepeat={"no-repeat"}
          bgImage={
            "https://storage.googleapis.com/kuliah_project/Web_porto/BACKGROUND/OPSI%201/1.jpg"
          }
          bgPosition="center"
        >
          <Box
            //bg={useColorModeValue("gray.200", "gray.900")}
            px={4}
            backdropFilter="auto"
            backdropBlur="8px"
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
                <Box mx={5}>
                  <Text
                    fontFamily={"Dancing Script"}
                    fontSize={[14, 20, 20, 20]}
                    color={color}
                  >
                    Sindy Aprilia
                  </Text>
                </Box>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {/* <Link href={"/home"}>
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
                  </Link> */}
                  {/* <Link href={"/state"}>
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
                  </Link> */}
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
                </HStack>
              </HStack>
              <Flex alignItems={"center"}>
                <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
                  <MoonIcon />
                </Button>
              </Flex>
            </Flex>
            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  {/* <Link href={"/home"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.300",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        About
                      </Text>
                    </Button>
                  </Link> */}
                  {/* <Link href={"/state"}>
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
                  </Link> */}
                  <Link href={"/gallery"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.300",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Gallery
                      </Text>
                    </Button>
                  </Link>
                </Stack>
              </Box>
            ) : null}
          </Box>
          <Flex
            w={"full"}
            h={"91vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"Esteban"}
              fontSize={[30, 30, 30, 50]}
              fontWeight={"extrabold"}
              color={textHeader}
            >
              <Typewriter
                options={{
                  strings: [
                    "Hello There!",
                    "Selamat Datang!",
                    "Willkommen!",
                    "Bienvenue!",
                    "Bienvenidas!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Flex>
        </Flex>
      ) : (
        <Flex
          minH={"100vh"}
          flexDir={"column"}
          bgRepeat={"no-repeat"}
          bgImage={
            "https://storage.googleapis.com/kuliah_project/Web_porto/BACKGROUND/OPSI%201/2.jpg"
          }
          bgPosition="center"
        >
          <Box px={4} backdropFilter="auto" backdropBlur="8px">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={"center"}>
                <Box mx={5}>
                  <Text
                    fontFamily={"Dancing Script"}
                    fontSize={[14, 20, 20, 20]}
                    color={color}
                  >
                    Sindy Aprilia
                  </Text>
                </Box>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {/* <Link href={"/about"}>
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
                  </Link> */}
                  {/* <Link href={"/projects"}>
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
                  </Link> */}
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
                </HStack>
              </HStack>
              <Flex alignItems={"center"}>
                <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
                  <SunIcon />
                </Button>
              </Flex>
            </Flex>
            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  {/* <Link href={"/about"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.300",
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
                        color: "gray.300",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Projects
                      </Text>
                    </Button>
                  </Link> */}
                  <Link href={"/gallery"}>
                    <Button
                      color={color}
                      variant={"none"}
                      _hover={{
                        color: "gray.300",
                      }}
                    >
                      <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                        Gallery
                      </Text>
                    </Button>
                  </Link>
                </Stack>
              </Box>
            ) : null}
          </Box>
          <Flex
            w={"full"}
            h={"91vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"Esteban"}
              fontSize={[30, 30, 30, 50]}
              fontWeight={"extrabold"}
              color={textHeader}
            >
              <Typewriter
                options={{
                  strings: [
                    "Hello There!",
                    "Selamat Datang!",
                    "Willkommen!",
                    "Bienvenue!",
                    "Bienvenidas!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Welcoming), {
  ssr: false,
});
