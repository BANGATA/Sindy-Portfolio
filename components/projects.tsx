import {
  Center,
  Flex,
  Wrap,
  WrapItem,
  Text,
  Spacer,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import Atropos from "atropos/react";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      Judul: "Project 1",
      Desc: "Lorem",
      Img: "",
    },
    {
      id: 2,
      Judul: "Project 2",
      Desc: "Lorem",
      Img: "",
    },
    {
      id: 3,
      Judul: "Project 3",
      Desc: "Lorem",
      Img: "",
    },
    {
      id: 4,
      Judul: "Project 4",
      Desc: "Lorem",
      Img: "",
    },
  ];
  return (
    <>
      <Flex
        minH={"100vh"}
        //border={"solid"}
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
            <Link href="/pages/projects">
              <a>
                <Text fontFamily={"Rubik"} fontSize={14}>
                  See More...
                </Text>
              </a>
            </Link>
          </Flex>
          <Flex p={5} w={"100%"} justifyContent={"center"}>
            <Wrap spacing="30px" justify="center">
              {Projects.map((i) => {
                return (
                  <Link href="#" key={i.id}>
                    <WrapItem>
                      <VStack
                        w={["250px", "275px", "300px", "300px"]}
                        h={["300px", "350px", "400px", "400px"]}
                        bg="red.200"
                        justifyContent={"space-between"}
                        border={"solid"}
                      >
                        <Flex
                          w={"100%"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          {i.Img}
                        </Flex>
                        <VStack bg="blue.200" w={"100%"} h={100} p={3}>
                          <Text w={"100%"} justifyContent={"start"}>
                            {i.Judul}
                          </Text>
                          <Text w={"100%"} justifyContent={"start"}>
                            {i.Desc}
                          </Text>
                        </VStack>
                      </VStack>
                    </WrapItem>
                  </Link>
                );
              })}
            </Wrap>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default Projects;
