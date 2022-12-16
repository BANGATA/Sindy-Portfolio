import {
  Flex,
  Spacer,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import "atropos/css";
import { motion } from "framer-motion";

const Gallery = () => {
  interface pict {
    id: number;
    Img: string;
  }
  const Gallery: pict[] = [
    {
      id: 0,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%201/1.png",
    },
    {
      id: 1,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%201/2.png",
    },
    {
      id: 2,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%201/3.png",
    },
    {
      id: 3,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%202/1.png",
    },
    {
      id: 4,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%202/2.png",
    },
    {
      id: 5,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%202/3.png",
    },
    {
      id: 6,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%203/1.png",
    },
    {
      id: 7,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%203/2.png",
    },
    {
      id: 8,
      Img: "https://storage.googleapis.com/kuliah_project/Web_porto/GALERY/ROW%203/3.png",
    },
  ];

  const warnaBorder = useColorModeValue("black", "white");
  return (
    <>
      <Flex
        minH={"100vh"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Flex
          minH={"10vh"}
          w={"100%"}
          p={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontFamily={"Rubik"} fontSize={30}>
            Galeri
          </Text>
          <Spacer />
          <Link href="./gallery">
            <a>
              <Text fontFamily={"Rubik"} fontSize={14}>
                Lihat lebih banyak...
              </Text>
            </a>
          </Link>
        </Flex>
        <VStack>
          <Flex minH={"90vh"} p={[0, 5]}>
            <Wrap spacing="10px" justify={"center"} align={"center"} p={10}>
              {Gallery.filter((i: any) => i.id <= 5).map((i) => {
                return (
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                    key={i.id}
                  >
                    <WrapItem border={"5px solid"} color={warnaBorder}>
                      <VStack
                        w={["240px", "320px", "320px", "400px"]}
                        h={["135px", "180px", "180px", "225px"]}
                        bg="red.200"
                        justifyContent={"space-between"}
                      >
                        <Img
                          src={i.Img}
                          //loading={"lazy"}
                          w={["240px", "320px", "320px", "400px"]}
                          h={["135px", "180px", "180px", "225px"]}
                        />
                      </VStack>
                    </WrapItem>
                  </motion.div>
                );
              })}
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <WrapItem border={"5px solid"} color={warnaBorder}>
                  <VStack
                    w={["200px", "200px", "250px", "250px"]}
                    h={["300px", "300px", "375px", "375px"]}
                    bg="red.200"
                    justifyContent={"space-between"}
                  >
                    <Img
                      src={Gallery[6]?.Img}
                      //loading={"lazy"}
                      w={["200px", "200px", "250px", "250px"]}
                      h={["300px", "300px", "375px", "375px"]}
                    />
                  </VStack>
                </WrapItem>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <WrapItem border={"5px solid"} color={warnaBorder}>
                  <VStack
                    w={["240px", "320px", "320px", "400px"]}
                    h={["135px", "180px", "180px", "225px"]}
                    bg="red.200"
                    justifyContent={"space-between"}
                  >
                    <Img
                      src={Gallery[7]?.Img}
                      //loading={"lazy"}
                      w={["240px", "320px", "320px", "400px"]}
                      h={["135px", "180px", "180px", "225px"]}
                    />
                  </VStack>
                </WrapItem>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <WrapItem border={"5px solid"} color={warnaBorder}>
                  <VStack
                    w={["200px", "200px", "250px", "250px"]}
                    h={["300px", "300px", "375px", "375px"]}
                    bg="red.200"
                    justifyContent={"space-between"}
                  >
                    <Img
                      src={Gallery[8]?.Img}
                      //loading={"lazy"}
                      w={["200px", "200px", "250px", "250px"]}
                      h={["300px", "300px", "375px", "375px"]}
                    />
                  </VStack>
                </WrapItem>
              </motion.div>
            </Wrap>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default Gallery;
