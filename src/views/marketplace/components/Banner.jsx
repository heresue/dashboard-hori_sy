import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import styled from "styled-components";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <SwiperStyle pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <Box className="slide-box">
          <Heading
            className="slide-title"
            color={"white"}
            maxWidth={"70%"}
            fontSize={"34px"}
            lineHeight={"42px"}
            mb={"14px"}
          >
            Discover, collect, and sell extraordinary NFTs
          </Heading>
          <Text
            className="slide-text"
            color={"rgb(227, 218, 255)"}
            maxW={"56%"}
            lineHeight={"28px"}
            mb={"40px"}
          >
            Enter in this creative world. Discover now the latest NFTs or start
            creating your own!
          </Text>
          <Flex className="btn-area">
            <ButtonStyle $white>Discover now</ButtonStyle>
            <ButtonStyle>Watch Video</ButtonStyle>
          </Flex>
        </Box>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </SwiperStyle>
  );
};

const ButtonStyle = styled.button`
  background: ${(props) => (props.$white ? "white" : "")};
  color: ${(props) => (props.$white ? "black" : "white")};
  height: 40px;
  width: auto;
  display: inline-flex;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  padding: 20px 27px;
  border-radius: 16px;
  cursor: pointer;
`;

const SwiperStyle = styled(Swiper)`
  display: flex;
  border-radius: 30px;
  .slide-box {
    background: url(${require("../../../assets/images/NftBanner.png")});
    padding: 56px 0;
    padding-inline: 64px;
  }
`;

export default Banner;
