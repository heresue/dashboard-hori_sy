import {
  Card,
  CardHeader,
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Progress,
} from "@chakra-ui/react";
import { ComplexDataCheck } from "../../../variables/tables";
import Title from "../../../components/common/Title";

const ComplexTable = () => {
  return (
    <Card>
      <CardHeader>
        <Title>Complex Table</Title>
      </CardHeader>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>NAME</Th>
              <Th>STATUS</Th>
              <Th isNumeric>DATE</Th>
              <Th>PROGRESS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* element.map() */}
            {ComplexDataCheck.map((row, index) => (
              <Tr key={index}>
                <Td>{row.name}</Td>
                <Td>{row.status}</Td>
                <Td>{row.date}</Td>
                <Td>
                  <Progress value={row.progress} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ComplexTable;
