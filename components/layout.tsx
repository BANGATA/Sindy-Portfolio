import Head from "next/head";

//importing chakra ui components
import { Box } from "@chakra-ui/react";

const Layout = ({ children }: any) => {
  return (
    <Box>
      <Head>
        <title>Sindy&apos;s Portfolio</title>
        <link rel="stylesheet" href="path/to/atropos.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Esteban:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap&family=Dancing Script:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="path/to/atropos.css" />
      </Head>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
