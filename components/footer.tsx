import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <Flex p={5} justifyContent={"center"} alignItems={"center"}>
        <VStack>
          <Text fontFamily={"Rubik"} fontWeight={"bold"} fontSize={20}>
            Copyright © 2022 - Sindy Aprilia
          </Text>
          <Text fontFamily={"Rubik"} fontSize={18}>
            Follow Me!
          </Text>
          <HStack>
            <Link href={"https://instagram.com/sindy.liaa"}>
              <a target="_blank">
                <AiFillInstagram />
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/sindy-aprilia-b135aa214/"}>
              <a target="_blank">
                <AiFillLinkedin />
              </a>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

export default Footer;
