import {
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { TitleH2 } from "../../../components/common/Title";
import { MdDragIndicator } from "react-icons/md";

const Task = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  return (
    <Card>
      <CardHeader display={"flex"} textAlign={"center"}>
        <Checkbox me="16px" colorScheme="brandScheme" />
        <TitleH2>Tasks</TitleH2>
      </CardHeader>
      <Flex as={CardBody} justifyContent={"space-between"} textAlign={"center"}>
        <Checkbox me="16px" colorScheme="brandScheme" />
        <Text
          fontWeight="bold"
          color={textColor}
          fontSize="md"
          textAlign="start"
        >
          Landing Page Design
        </Text>
        <Icon
          ms="auto"
          as={MdDragIndicator}
          color="gray.400"
          w="24px"
          h="24px"
        />
      </Flex>
      <Flex as={CardBody} justifyContent={"space-between"}>
        <Checkbox me="16px" colorScheme="brandScheme" />
        <Text
          fontWeight="bold"
          color={textColor}
          fontSize="md"
          textAlign="start"
        >
          Dashboard Builder
        </Text>
        <Icon
          ms="auto"
          as={MdDragIndicator}
          color="gray.400"
          w="24px"
          h="24px"
        />
      </Flex>
      <Flex as={CardBody} justifyContent={"space-between"} textAlign={"center"}>
        <Checkbox me="16px" colorScheme="brandScheme" />
        <Text
          fontWeight="bold"
          color={textColor}
          fontSize="md"
          textAlign="start"
        >
          Mobile App Design
        </Text>
        <Icon
          ms="auto"
          as={MdDragIndicator}
          color="gray.400"
          w="24px"
          h="24px"
        />
      </Flex>
      <Flex as={CardBody} justifyContent={"space-between"}>
        <Checkbox me="16px" colorScheme="brandScheme" />
        <Text
          fontWeight="bold"
          color={textColor}
          fontSize="md"
          textAlign="start"
        >
          Illustrations
        </Text>
        <Icon
          ms="auto"
          as={MdDragIndicator}
          color="gray.400"
          w="24px"
          h="24px"
        />
      </Flex>
      <Flex as={CardBody} justifyContent={"space-between"}>
        <Checkbox me="16px" colorScheme="brandScheme" />
        <Text
          fontWeight="bold"
          color={textColor}
          fontSize="md"
          textAlign="start"
        >
          Promotional LP
        </Text>
        <Icon
          ms="auto"
          as={MdDragIndicator}
          color="gray.400"
          w="24px"
          h="24px"
        />
      </Flex>
    </Card>
  );
};

export default Task;
