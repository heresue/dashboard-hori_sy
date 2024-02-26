import {
  Avatar,
  AvatarGroup,
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

const Trending = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
          alt="Abstrac Color"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Abstract Colors</Heading>
          <Text>By Esthera Jackson</Text>
          <AvatarGroup size="md" max={3}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Text color="blue.600" fontSize="2xl">
            Current Bid: 0.91 ETH
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Trending;
