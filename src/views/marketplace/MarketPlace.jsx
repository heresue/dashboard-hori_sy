import { Box, Flex, Grid } from "@chakra-ui/react";
import Banner from "./components/Banner";

const MarketPlace = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)" // 3등분, 1fr(1:1비율)
      display={{ base: "block", xl: "grid" }}
      gap={"20px"}
    >
      <Flex
        gridColumn={"1 / span 2"}
        flexDir={"column"}
        w="100%"
        bg="blue.500"
      >
        <Box w="100%" h="10" bg="blue.500">
            <Banner/>
        </Box>
        <Box w="100%" h="10" bg="blue.400"></Box>
        <Box w="100%" h="10" bg="blue.300"></Box>
      </Flex>
      <Flex flexDir={"column"} w="100%" bg="red.500">
        <Box w="100%" h="10" bg="red.500"></Box>
        <Box w="100%" h="10" bg="red.400"></Box>
      </Flex>
    </Grid>
  );
};

export default MarketPlace;
