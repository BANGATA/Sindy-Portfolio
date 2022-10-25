import {
  Center,
  Flex,
  Wrap,
  WrapItem,
  Text,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Atropos from "atropos/react";

const Projects = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        border={"solid"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <VStack spacing={10}>
          <Flex
            minH={50}
            w={"100%"}
            p={10}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontFamily={"Rubik"} fontSize={30}>
              Project
            </Text>
            <Spacer />
            <Text fontFamily={"Rubik"} fontSize={14}>
              See More...
            </Text>
          </Flex>
          <Flex p={5} w={"100%"} justifyContent={"center"}>
            <Wrap spacing="30px" justify="center">
              <WrapItem>
                <Center
                  w={["250px", "300px"]}
                  h={["300px", "400px"]}
                  bg="red.200"
                >
                  Box 1
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w={["250px", "300px"]}
                  h={["300px", "400px"]}
                  bg="green.200"
                >
                  Box 2
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w={["250px", "300px"]}
                  h={["300px", "400px"]}
                  bg="tomato"
                >
                  Box 3
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w={["250px", "300px"]}
                  h={["300px", "400px"]}
                  bg="blue.200"
                >
                  Box 4
                </Center>
              </WrapItem>
            </Wrap>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default Projects;
