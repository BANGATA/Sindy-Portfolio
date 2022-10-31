import {
  Center,
  Flex,
  HStack,
  VStack,
  Text,
  Avatar,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Atropos from "atropos/react";

const About = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        border={"solid"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack
          w={"100%"}
          h={"80vh"}
          //border={"solid"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={[0, 10]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Flex
            //border={"solid"}
            w={"30%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Atropos>
              <VStack
                //border={"solid"}
                p={[7, 10]}
                spacing={[2, 5]}
                bgGradient={"linear(to-b, blue.200, purple.500)"}
                borderRadius={20}
                w={[250, 300]}
                h={[300, 500]}
                textColor={"white"}
                boxShadow="2xl"
              >
                <Avatar src="./ava.jpg" w={[100, 150]} h={[100, 150]} />
                <Text fontSize={[26, 36]} fontFamily={"Dancing Script"}>
                  Sindy Aprilia
                </Text>
                <Text fontSize={[11, 15]} fontFamily={"Rubik"}>
                  Tangerang, Banten, Indonesia
                </Text>
                <HStack
                  fontSize={[10, 15]}
                  fontFamily={"Rubik"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <EmailIcon />
                  <Text>sindyaprilia86@gmail.com</Text>
                </HStack>
                <Link href={"https://instagram.com/sindy.arttt"}>
                  <a target="_blank">
                    <HStack
                      fontSize={[10, 15]}
                      fontFamily={"Rubik"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={2}
                    >
                      <AiFillInstagram />
                      <Text>@sind.arttt</Text>
                    </HStack>
                  </a>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/sindy-aprilia-b135aa214/"}
                >
                  <a target="_blank">
                    <HStack
                      fontSize={[10, 15]}
                      fontFamily={"Rubik"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={2}
                    >
                      <AiFillLinkedin />
                      <Text>Sindy Aprilia</Text>
                    </HStack>
                  </a>
                </Link>
              </VStack>
            </Atropos>
          </Flex>
          <Flex
            w={["75%", "50%"]}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            //border={"solid"}
          >
            <VStack>
              <Text fontSize={[18, 36]} fontFamily={"Dancing Script"}>
                Sindy Aprilia
              </Text>
              <Text
                fontSize={[10, 20]}
                fontFamily={"Rubik"}
                textAlign={["center", "unset"]}
              >
                Film Producer | Freelance | Student at Universitas Multimedia
                Nusantara
              </Text>
              <Text fontSize={[11, 18]} textAlign={["center", "unset"]}>
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
        {/* <Flex
          border={"solid"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          h={"80vh"}
        ></Flex> */}
      </Flex>
    </>
  );
};

export default About;
