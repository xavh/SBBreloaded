import React from "react";
import { RiTempHotFill } from "react-icons/ri";

import {
  InfoCard,
  InfoCardContent,
  InfoCardFooter,
  InfoCardTitle
} from "../../components";

import COLORS from "../../constants/colors";

import useWeatherData from "../../hooks/useWeatherData";
const { Container, FooterGridContainer } = require("./hourly-forecast.styles");

const HourlyForecast = () => {
  const { hourly, loadingWeatherData } = useWeatherData();

  if (loadingWeatherData) return <></>;

  return (
    <Container onWheel={(e) => console.log(e)}>
      {hourly.map((hour) => (
        <InfoCard>
          <InfoCardTitle
            style={{
              justifyContent: "center"
            }}
          >
            <span>{hour.time}</span>
          </InfoCardTitle>
          <InfoCardContent></InfoCardContent>
          <InfoCardFooter>
            <FooterGridContainer></FooterGridContainer>
          </InfoCardFooter>
        </InfoCard>
      ))}
    </Container>
  );
};

export default HourlyForecast;
