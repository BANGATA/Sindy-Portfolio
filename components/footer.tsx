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
        </VStack>
      </Flex>
    </>
  );
};

export default Footer;
