import { Heading } from "@chakra-ui/react";

const Title = (props) => {
  return (
    <Heading as={"h1"} my={30} fontSize={'22px'} fontWeight={700}>
      {props.children}
    </Heading>
  );
};

export const TitleH2 = (props) => {
  return (
    <Heading as={"h2"} fontSize={"20px"} fontWeight={700}>
      {props.children}
    </Heading>
  );
};

export const TitleH3 = (props) => {
  return (
    <Heading as={"h3"} fontSize={"14px"} fontWeight={500} color={'gray.400'}>
      {props.children}
    </Heading>
  );
};

export const TitleH4 = (props) => {
  return (
    <Heading
      as={"h4"}
      my={30}
      fontSize={20}
      fontWeight={700}
      color={"darkblue"}
    >
      {props.children}
    </Heading>
  );
};

export default Title;
