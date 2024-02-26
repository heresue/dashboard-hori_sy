import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const SecTitle = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      mt={"45px"}
      marginBottom={"20px"}
    >
      <Heading fontSize={"24px"} marginInlineStart={"24px"}>
        Trending NFTs
      </Heading>
      <Flex
        fontSize={"16px"}
        alignItems={"center"}
        marginInline={"24px 20px"}
        gap={"44px"}
        color={$primary}
      >
        <Link href="">Art</Link>
        <Link href="">Music</Link>
        <Link href="">Collectibles</Link>
        <Link href="">Sports</Link>
      </Flex>
    </Flex>
  );
};

export default SecTitle;
