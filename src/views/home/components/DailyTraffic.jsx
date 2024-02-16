import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Title, { TitleH3 } from "../../../components/common/Title";
import ColumnChart from "../../../components/charts/BarChart";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variables/charts";

const DailyTraffic = () => {
  return (
    <Card display={"flex"}>
      <CardHeader>
        <StatGroup display={"flex"} justifyContent={"space-between"}>
          <Stat>
            <StatLabel>Daily Traffic</StatLabel>
            <StatNumber>2.579</StatNumber>
          </Stat>
          <Stat>
            <StatHelpText>
              <StatArrow textAlign={'right'} type="increase" />
              2.45%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </CardHeader>
      <CardBody>
        <ColumnChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </CardBody>
    </Card>
  );
};

export default DailyTraffic;
