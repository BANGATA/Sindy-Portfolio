import { Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar";


const Projects = () => {
  return (
    <>
      <Navbar />
      <Flex
        border={"solid"}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex border={"solid"}></Flex>
      </Flex>
    </>
  );
};

export default Projects;
