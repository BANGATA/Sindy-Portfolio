import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";

const Welcoming = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textHeader = useColorModeValue("black","white");
  return (
    <>
      <Flex minH={"90vh"} justifyContent={"center"} alignItems={"center"}>
        {colorMode === "light" ? (
          <Flex
            // bgRepeat={"no-repeat"}
            // bgImage={"./headerImg/3.4.jpg"}
            // bgPosition="center"
            w={"full"}
            h={"90vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"Esteban"}
              fontSize={50}
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
        ) : (
          <Flex
            // bgImage={"./headerImg/2.jpg"}
            // bgPosition="center"
            //bgRepeat={"no-repeat"}
            w={"full"}
            h={"90vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontFamily={"Esteban"} fontSize={50}>
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
        )}
      </Flex>
    </>
  );
};

export default dynamic(() => Promise.resolve(Welcoming), {
  ssr: false,
});
