import React from "react";
import Clock from "../../components/timer/timer";
import { RiTempColdLine, RiTempHotLine } from "react-icons/ri";
import {
  InfoCard,
  InfoCardContent,
  InfoCardFooter,
  InfoCardTitle
} from "../../components";
import COLORS from "../../constants/colors";
import GaugeChart from "react-gauge-chart";
const { GaugeText, GaugeContainer } = require("../dashboard/dashboard.styles");

import useWeatherData from "../../hooks/useWeatherData";
const { Container, FooterGridContainer } = require("./week-forecast.styles");

const WeekForecast = () => {
  const { daily, loadingWeatherData } = useWeatherData();

  if (loadingWeatherData) return <></>;

  return (
    <Container>
      {daily.map((day) => (
        <InfoCard>
          <InfoCardTitle
            style={{
              justifyContent: "space-between"
            }}
          >
            <span>JAPAN</span>

            <span>09:00</span>
          </InfoCardTitle>
          <InfoCardContent>ORDERS</InfoCardContent>
          <InfoCardFooter>
            <FooterGridContainer>
              <span>STABLE</span>
            </FooterGridContainer>
          </InfoCardFooter>
        </InfoCard>
      ))}
    </Container>
  );
};

export default WeekForecast;
