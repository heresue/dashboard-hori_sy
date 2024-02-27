import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SecTitle = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ base: "none", md: "space-between" }}
      margin={"45px 0 20px"}
    >
      <Heading fontSize={"24px"} marginInlineStart={"24px"}>
        Trending NFTs
      </Heading>
      <Flex
        fontSize="16px"
        color="primary"
        alignItems={"center"}
        marginInline={"24px 20px"}
        marginTop={{ base: "20px", md: "0" }}
        gap={"44px"}
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
