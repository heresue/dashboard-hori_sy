import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box, Stack } from "@chakra-ui/react";
import History from "./History";
import Util from "./Util";
import DynamicTitle from "./DynamicTitle";

const Layout = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      minH={"100vh"}
      pl={{ base: "20px", md: "30px", xl: "312px" }}
      pr={{ base: "20px", md: "30px" }}
      pt={{ base: "50px", md: "30px" }}
      pb={{ base: "20px", md: "30px" }}
    >
      <Header />
      <Box
        as="main"
        id="main"
        flexGrow={1}
        transition={"all 0.2s"}
        pt={{ base: "160px", md: "100px" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          spacing={0}
          pos={"fixed"}
          top={"27px"}
          left={{ base: "20px", md: "30px", xl: "310px" }}
          right={{ base: "20px", md: "30px" }}
          // zIndex={100}
          py={2}
          px={{ base: 2, xl: 4 }}
          // bg={'rgba(255, 255, 255, 0.1)'}
          bg={"rgba(255, 0, 0, 0.1)"}
          backdropFilter={"blur(10px)"}
          borderRadius={"0.75rem"}
          transition={"all 0.2s"}
        >
          <Box>
            <History />
            <DynamicTitle />
          </Box>
          <Util />
        </Stack>

        {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
        <Outlet />
      </Box>
    </Box>
  );
};

export const LayoutNone = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Box as="main" id="main" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
