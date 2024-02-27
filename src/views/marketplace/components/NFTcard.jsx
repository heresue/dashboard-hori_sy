import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const NFTcard = () => {
  return (
    <Card>
      <CardBody>
        <Image
          w={"100%"}
          src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
          alt="Abstrac Color"
          borderRadius="lg"
        />
        <Stack
          mt="6"
          spacing="3"
          display={"flex"}
          flexDir={{ base: "row", md: "column", lg: "row", xl: "column" }}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading
              size="md"
              textAlign={"initial"}
              marginBottom={"5px"}
              marginInlineEnd={"14px"}
            >
              Abstract Colors
            </Heading>
            <Text
              fontSize={"14px"}
              textAlign={"initial"}
              fontWeight={"400"}
              color="gray.400"
            >
              By Esthera Jackson
            </Text>
          </Box>
          <AvatarGroup size="sm" max={3} color="primary">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </Stack>
      </CardBody>
      <CardFooter
        display={"flex"}
        flexDir={{ base: "row", md: "column", lg: "row", xl: "column" }}
        justifyContent={"space-between"}
        paddingTop={"5px"}
      >
        <Text
          color="primary"
          fontSize="14px"
          fontWeight={"700"}
          textAlign={"initial"}
        >
          Current Bid: 0.91 ETH
        </Text>
        <Button
          w={"108px"}
          borderRadius={"70px"}
          background="#11047a"
          colorScheme="white"
          fontSize={"14px"}
          fontWeight={"500"}
        >
          Place Bid
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NFTcard;
