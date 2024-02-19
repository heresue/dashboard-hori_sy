import { Card, CardBody, Icon, Text } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/MiniCalendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";

function MiniCalendar(props) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());
  return (
    <Card>
      <CardBody>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={<Text color="brand.500"></Text>}
          prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
          nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
        />
      </CardBody>
    </Card>
  );
}

export default MiniCalendar;
