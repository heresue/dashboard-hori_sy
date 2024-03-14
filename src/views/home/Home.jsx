import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import MiniSt from "../../components/card/MiniSt";
import IconBox from "../../components/icons/IconBox";
import { MdBarChart } from "react-icons/md";
import {
  FcAreaChart,
  FcDoughnutChart,
  FcFlowChart,
  FcComboChart,
} from "react-icons/fc";
import TotalSpent from "./components/TotalSpent";
import Weekly from "./components/Weekly";
import CheckTable from "./components/CheckTable";
import DailyTraffic from "./components/DailyTraffic";
import YourPie from "./components/YourPie";
import ComplexTable from "./components/ComplexTable";
import Task from "./components/Task";
import MiniCalendar from "../../components/calendar/MiniCalendar";
import { useEffect, useState } from "react";

const Home = () => {
  // useEffect(함수, [의존성 배열])
  // *의존성 배열: package.json 열어보면 dependencies라는 의존성 배열들이 있음. 이와같은 역할

  // 1. 컴포넌트가 언마운트 될 때(소멸) -----------------------------
  // --------------------------------------------------------------
  const [color, setColor] = useState("lightblue");

  useEffect(() => {
    // 1. 컴포넌트가 마운트 될 때(탄생) -----------------------------
    //  - 배경색을 노란색으로 변경
    //  탄생이니까 무조건 렌더링되기 때문에 의존할 게 없음. 의존성배열은 빈 상태로 둔다.
    document.body.style.backgroundColor = color;
    document.body.id = "intro"; // id값 셋팅 (id값을 넣어줌)
    document.body.classList.add("intro"); // class 네임 셋팅

    // 2. 컴포넌트가 언마운트 될 때(소멸) -----------------------------
    return () => {
      document.body.style.backgroundColor = "white";
      document.body.id = "";
      document.body.classList.remove("intro");
    };
    // --------------------------------------------------------------
  }, [color]);

  // 3. 업데이트: 버튼 클릭시 배경색 변경 ----------------------------
  useEffect(() => {
    console.log(`색상이 ${color}로 변경되었습니다.`);
  }, [color]);

  const toggleColor = () => {
    setColor(color === "lightblue" ? "lightpink" : "lightblue");
  };
  // --------------------------------------------------------------

  return (
    <VStack spacing={5}>
      <button onClick={toggleColor}>배경색 변경!</button>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px" w={"100%"}>
        <MiniSt
          name="Earnings"
          value="$350.4"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<MdBarChart />}
            />
          }
        />
        <MiniSt
          name="Spend this month"
          value="$642.39"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcDoughnutChart />}
            />
          }
        />
        <MiniSt growth="10.39%" name="Sales" value="$574.34" />
        <MiniSt
          name="Your balance"
          value="$1,000"
          endContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcAreaChart />}
            />
          }
        />
        <MiniSt
          name="New Tasks"
          value="154"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcComboChart />}
            />
          }
        />
        <MiniSt
          name="Total Projects"
          value="2935"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcFlowChart />}
            />
          }
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
        <Weekly />
        <TotalSpent />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
        <CheckTable />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
          <DailyTraffic />
          <YourPie />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
        <ComplexTable />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
          <Task />
          <MiniCalendar />
        </SimpleGrid>
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
