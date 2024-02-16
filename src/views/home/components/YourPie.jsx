import { Card, CardBody, CardHeader, Select } from "@chakra-ui/react";
import { TitleH2 } from "../../../components/common/Title";
import { pieChartData, pieChartOptions } from "../../../variables/charts";
import PieChart from "../../../components/charts/PieChart";

const YourPie = () => {
  return (
    <Card display={"flex"}>
      <CardHeader
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <TitleH2 fontSize={"16px"}>Your Pie Chart</TitleH2>
        <Select
          fontSize="sm"
          variant="subtle"
          defaultValue="monthly"
          width="unset"
          fontWeight="700"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </CardHeader>
      <CardBody display={"flex"}>
        <PieChart
          h="100%"
          w="100%"
          chartData={pieChartData}
          chartOptions={pieChartOptions}
        />
      </CardBody>
    </Card>
  );
};

export default YourPie;
