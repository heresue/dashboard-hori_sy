import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../variables/charts";
import LineChart from "../../../components/charts/LineChart";

const Weekly = () => {
  return (
    <Card display={"flex"} flexDir={"row"} justify={"space-between"}>
      <CardHeader>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            $37.5K
          </StatHelpText>
        </Stat>
      </CardHeader>
      <CardBody>
        <LineChart
          chartData={lineChartDataTotalSpent}
          chartOptions={lineChartOptionsTotalSpent}
        />
      </CardBody>
    </Card>
  );
};

export default Weekly;
