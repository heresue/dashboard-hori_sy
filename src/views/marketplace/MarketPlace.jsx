import { Box, Flex, Grid } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Trending from "./components/NFTcard";
import SecTitle from "./components/SecTitle";

const MarketPlace = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)" // 3등분, 1fr(1:1비율)
      display={{ base: "block", xl: "grid" }}
      gap={"20px"}
    >
      <Flex gridColumn={"1 / span 2"} flexDir={"column"} w="100%">
        <Box w="100%" h="100%">
          <Banner />
        </Box>
        <Box w="100%" h="100%">
          <SecTitle />
          <Flex
            className="boxA"
            w="100%"
            gap={"20px"}
            flexDir={{ base: "column", md: "row" }}
            textAlign={"center"}
          >
            <Trending w="100%" />
            <Trending w="100%" />
            <Trending w="100%" />
          </Flex>
        </Box>
        <Box w="100%" h="10" bg="blue.300"></Box>
      </Flex>
      <Flex flexDir={"column"} w="100%">
        <Box w="100%" h="10" bg="red.500"></Box>
        <Box w="100%" h="10" bg="red.400"></Box>
      </Flex>
    </Grid>
  );
};

export default MarketPlace;
