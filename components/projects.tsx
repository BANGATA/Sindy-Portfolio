import {
  Center,
  Flex,
  Wrap,
  WrapItem,
  Text,
  Spacer,
  VStack,
  HStack,
  Box,
  Link,
  AspectRatio,
  Image,
  useColorModeValue,
  Stack,
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
  const color = useColorModeValue("black", "white");
  return (
    <>
      <Flex
        minH={"100vh"}
        //border={"solid"}
        alignItems={"center"}
        flexDirection={"column"}
      >
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
        <Flex
          p={5}
          w={"100%"}
          justifyContent={"center"} //border={"solid"}
        >
          <Stack
            justifyContent={"center"}
            w={"100%"}
            spacing={10}
            direction={["column", "column", "column", "row"]}
          >
            <VStack
              border={"solid"}
              h={"450px"}
              borderRadius={"lg"}
              p={3}
              bgColor={useColorModeValue("red.500", "red.700")}
              boxShadow={"2xl"}
            >
              <AspectRatio
                w={["240px", "320px", "320px", "400px"]}
                h={["135px", "180px", "180px", "225px"]}
                maxH={"20em"}
                bgColor={"#000"}
                color={color}
                outline={"2px solid"}
                borderRadius={"lg"}
                ratio={1}
                overflow={"hidden"}
              >
                <iframe
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  title={"YouTube video player"}
                  style={{ borderRadius: "1em" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                />
              </AspectRatio>
              <Stack
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                w={"full"}
              >
                <Text>JUDUL</Text>
                <Text>Deskripsi</Text>
              </Stack>
            </VStack>
            <VStack
              border={"solid"}
              h={"450px"}
              borderRadius={"lg"}
              boxShadow={"2xl"}
              p={3}
              bgColor={useColorModeValue("green.500", "green.700")}
            >
              <AspectRatio
                w={["240px", "320px", "320px", "400px"]}
                h={["135px", "180px", "180px", "225px"]}
                maxH={"20em"}
                bgColor={"#000"}
                color={color}
                outline={"2px solid"}
                borderRadius={"lg"}
                ratio={1}
                overflow={"hidden"}
              >
                <iframe
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  title={"YouTube video player"}
                  style={{ borderRadius: "1em" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                />
              </AspectRatio>
              <Text>JUDUL</Text>
              <Text>Deskripsi</Text>
            </VStack>
            <VStack
              border={"solid"}
              h={"450px"}
              borderRadius={"lg"}
              p={3}
              bgColor={useColorModeValue("blue.500", "blue.700")}
              boxShadow={"2xl"}
            >
              <AspectRatio
                w={["240px", "320px", "320px", "400px"]}
                h={["135px", "180px", "180px", "225px"]}
                maxH={"20em"}
                bgColor={"#000"}
                color={color}
                outline={"2px solid"}
                borderRadius={"lg"}
                ratio={1}
                overflow={"hidden"}
              >
                <iframe
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  title={"YouTube video player"}
                  style={{ borderRadius: "1em" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                />
              </AspectRatio>
              <Text>JUDUL</Text>
              <Text>Deskripsi</Text>
            </VStack>
          </Stack>
          {/* <Wrap spacing="30px" justify="center">
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
            </Wrap> */}
        </Flex>
      </Flex>
    </>
  );
};

export default Projects;
