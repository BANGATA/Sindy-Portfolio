import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  return (
    <>
      <Flex minH={'10vh'} color={color}>
        <Flex px={10} justifyContent={"center"} alignItems={"center"}>
          <Text fontFamily={"Rubik"} fontWeight={"extrabold"} fontSize={20}>
            Sindy Aprilia
          </Text>
        </Flex>
        <Spacer />
        <Flex px={10} justifyContent={"center"} alignItems={"center"}>
          <HStack spacing={10}>
            <Text fontFamily={"Rubik"} fontSize={14}>
              About
            </Text>
            <Text fontFamily={"Rubik"} fontSize={14}>
              Projects
            </Text>
            <Text fontFamily={"Rubik"} fontSize={14}>
              Gallery
            </Text>
            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
