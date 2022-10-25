import { Center, Flex, HStack, VStack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        border={"solid"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          border={"solid"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          h={"60vh"}
        >
          <HStack
            w={"100%"}
            border={"solid"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={100}
          >
            <Flex border={"solid"}>Avatar</Flex>
            <Flex>
              <VStack border={"solid"}>
                <Text fontSize={36} fontFamily={'Dancing Script'}>Sindy Aprilia</Text>
                <Text fontSize={20} fontFamily={'Rubik'}>Student | Freelancer | Photographer | Producer</Text>
                <Text fontSize={18}>Lorem Ipsum Dolor Sit Amet.</Text>
              </VStack>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
