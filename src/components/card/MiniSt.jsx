import {
  Box,
  Card,
  CardBody,
  Flex,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { MdBarChart } from "react-icons/md";
import { TitleH3 } from "../common/Title";

const MiniSt = (props) => {
  const { name, value, startContent, endContent, growth } = props;

  return (
    <Card h={116}>
      <CardBody py={15} display={"flex"} alignItems={"center"}>
        {startContent}
        <Stat ml={startContent ? 5 : 0}>
          <StatLabel>
            <TitleH3>{name}</TitleH3>
          </StatLabel>
          <StatNumber>{value}</StatNumber>
          {growth ? (
            <StatHelpText fontSize={'12px'}>{growth} since last month</StatHelpText>
          ) : null}
        </Stat>
        <Spacer />
        {endContent}
      </CardBody>
    </Card>
  );
};

export default MiniSt;
