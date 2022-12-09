import { Button, Flex, useColorMode, Box } from "@chakra-ui/react";

import Navbar from "../components/navbar";
import Welcoming from "../components/welcome";

import type { NextPage } from "next";
import Projects from "../components/projects";
import Footer from "../components/footer";
import About from "../components/about";
import Gallery from "../components/gallery";

const Home: NextPage = () => {
  return (
    <>
      <Box minH={"100vh"}>
        {/* <Navbar /> */}
        <Welcoming />
        <About />
        {/* <Projects /> */}
        <Gallery />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
