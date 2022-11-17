import { Flex, HStack, VStack, Text, Avatar, Link } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Atropos from "atropos/react";
import "atropos/css";

const About = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        //border={"solid"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack
          w={"100%"}
          h={"80vh"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={[0, 5, 10, 10]}
          textAlign={"center"}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Flex
            w={"30%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Atropos activeOffset={40} shadowScale={1.05}>
              <VStack
                p={[7, 7, 10, 10]}
                spacing={[2, 2, 5, 5]}
                bgGradient={"linear(to-b, blue.200, purple.500)"}
                borderRadius={20}
                w={[250, 275, 300, 300]}
                h={[300, 325, 500, 500]}
                textColor={"white"}
                boxShadow="2xl"
              >
                <Avatar
                  src="./ava.jpg"
                  w={[100, 100, 150, 150]}
                  h={[100, 100, 150, 150]}
                />
                <Text fontSize={[26, 32, 36, 36]} fontFamily={"Dancing Script"}>
                  Sindy Aprilia
                </Text>
                <Text fontSize={[11, 15, 15, 15]} fontFamily={"Rubik"}>
                  Tangerang, Banten, Indonesia
                </Text>
                <HStack
                  fontSize={[10, 13, 15, 15]}
                  fontFamily={"Rubik"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <EmailIcon />
                  <Text>sindyaprilia742@gmail.com</Text>
                </HStack>
                <Link href={"https://instagram.com/sind.arttt"} isExternal>
                  <HStack
                    fontSize={[10, 13, 15, 15]}
                    fontFamily={"Rubik"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                  >
                    <AiFillInstagram />
                    <Text>@sind.arttt</Text>
                  </HStack>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/sindy-aprilia-b135aa214/"}
                  isExternal
                >
                  <HStack
                    fontSize={[10, 13, 15, 15]}
                    fontFamily={"Rubik"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                  >
                    <AiFillLinkedin />
                    <Text>Sindy Aprilia</Text>
                  </HStack>
                </Link>
              </VStack>
            </Atropos>
          </Flex>
          <Flex
            w={["75%", "75%", "50%", "50%"]}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VStack>
              <Text fontSize={[18, 24, 36, 36]} fontFamily={"Dancing Script"}>
                Sindy Aprilia
              </Text>
              <Text
                fontSize={[10, 14, 20, 20]}
                fontFamily={"Rubik"}
                textAlign={["center", "unset"]}
              >
                Film Producer | Freelance | Student at Universitas Multimedia
                Nusantara
              </Text>
              <Text fontSize={[11, 16, 18, 18]} textAlign={["center", "unset"]}>
                Experienced Freelance Photographer with a demonstrated history
                of working in the marketing and advertising industry. Skilled in
                Social Media, Design, Editing, Freelance Photography, and
                Multimedia. Strong media and communication professional with a
                Art focused in Film/Video and Photographic Arts from Universitas
                Multimedia Nusantara.
              </Text>
            </VStack>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};

export default About;
