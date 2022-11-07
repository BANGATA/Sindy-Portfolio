import {
  Flex,
  Spacer,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Img,
} from "@chakra-ui/react";
import Link from "next/link";
import "atropos/css";
import { motion } from "framer-motion";

const Gallery = () => {
  const Gallery = [
    {
      id: 0,
      Img: "",
    },
    {
      id: 1,
      Img: "",
    },
    {
      id: 2,
      Img: "",
    },
    {
      id: 3,
      Img: "",
    },
    {
      id: 4,
      Img: "",
    },
    {
      id: 5,
      Img: "",
    },
    {
      id: 6,
      Img: "",
    },
    {
      id: 7,
      Img: "",
    },
  ];
  return (
    <>
      <Flex
        minH={"100vh"}
        border={"solid"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <VStack>
          <Flex
            minH={"10vh"}
            w={"100%"}
            p={10}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontFamily={"Rubik"} fontSize={30}>
              Gallery
            </Text>
            <Spacer />
            <Link href="/pages/gallery">
              <a>
                <Text fontFamily={"Rubik"} fontSize={14}>
                  See More...
                </Text>
              </a>
            </Link>
          </Flex>
          <Flex p={5} w={"100%"}>
            <Wrap spacing="10px" justify={"center"}>
              {Gallery.map((i) => {
                return (
                  <Link href="#" key={i.id}>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        border: "5px solid",
                      }}
                    >
                      <WrapItem>
                        <VStack
                          w={["300px", "300px", "350px", "350px"]}
                          h={["300px", "350px", "400px", "400px"]}
                          bg="red.200"
                          justifyContent={"space-between"}
                        >
                          <Flex
                            w={"100%"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <Img
                              src="./gallery.jpg"
                              w={["300px", "300px", "350px", "350px"]}
                              h={["300px", "350px", "400px", "400px"]}
                            />
                          </Flex>
                        </VStack>
                      </WrapItem>
                    </motion.div>
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

export default Gallery;
