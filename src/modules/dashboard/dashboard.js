import React, { useContext, useEffect, useRef } from "react";
import DurationTabs, { DURATION_TABS } from "../duration-tabs/duration-tabs";

import { AppContext } from "../../App";
import UnitTabs from "../unit-tabs/unit-tabs";
import {
  InfoCard,
  InfoMarket,
  InfoCardContent,
  InfoCardFooter,
  InfoCardTitle,
  InfoCardSubTitle,
  InfoCardFooterLegend
} from "../../components";

import useWeatherData from "../../hooks/useWeatherData";

import OrderGauge from "../../components/ordergauge/ordergauge";

import COLORS from "../../constants/colors";
import WeekForecast from "../week-forecast/week-forecast";
import HourlyForecast from "../hourly-forecast/hourly-forecast";
import GaugeChart from "react-gauge-chart";
import Gauge from "react-svg-gauge";
//import Gauge from "../../components/SVGgauge/gauge";
import Tab from "../../components/tab/tab";
import Clock from "../../components/timer/timer";
import TouchCarousel from "../../components/carousel/carousel";

const {
  Container,
  DashboardHeader,
  InfoCardsContainer,
  DashboardSectionHeader,
  GaugeText,
  GaugeContainer
} = require("./dashboard.styles");

const Dashboard = () => {
  const {
    selectedDurationTab,
    selectDurationTab,
    selectedUnit,
    selectUnit
  } = useContext(AppContext);

  const {
    humidity,
    windSpeed,
    windDirection,
    windAngle,
    sunrise,
    sunset,
    visibility,
    loadingWeatherData
  } = useWeatherData();

  if (loadingWeatherData) return <></>;

  const order = 6;

  return (
    <Container>
      <DashboardHeader>
        SBB RELOADED
        <UnitTabs selected={selectedUnit} onSelect={selectUnit} />
      </DashboardHeader>

      <DashboardSectionHeader></DashboardSectionHeader>
      <InfoCardsContainer>
        <InfoMarket>
          <InfoCardTitle>FLAG MARKET & NAME</InfoCardTitle>
          <InfoCardSubTitle>TIME</InfoCardSubTitle>
          <InfoCardContent>
            <Gauge
              value={order}
              width={200}
              height={200}
              label=""
              valueLabelStyle={""}
              //valueFormatter={(number) => `${number}%`}
              min={0}
              max={3200}
              minMaxLabelStyle={{}}
              minTxt={"go"}
              maxTxt={"avg. 7d max"}
              backgroundColor="#edebeb"
              color="#fe0400"
            />
            <OrderGauge />
          </InfoCardContent>
        </InfoMarket>
        <InfoMarket>
          <InfoCardTitle>FLAG MARKET & NAME</InfoCardTitle>
          <InfoCardSubTitle>TIME</InfoCardSubTitle>
          <InfoCardContent></InfoCardContent>
        </InfoMarket>
        <InfoMarket>
          <InfoCardTitle>FLAG MARKET & NAME</InfoCardTitle>
          <InfoCardSubTitle>TIME</InfoCardSubTitle>
          <InfoCardContent>ORDERS</InfoCardContent>
        </InfoMarket>
        <InfoCard>
          <InfoCardTitle>CATALOG & PRODUCTS</InfoCardTitle>
          <InfoCardSubTitle>
            AUTOMATED AVAILABILITY TEST & ERROR DETECTION
          </InfoCardSubTitle>
          <InfoCardContent>
            <TouchCarousel />
          </InfoCardContent>
        </InfoCard>

        <InfoCard>
          <InfoCardTitle>CATALOG & PRODUCTS</InfoCardTitle>
          <InfoCardSubTitle>
            AUTOMATED AVAILABILITY TEST & ERROR DETECTION
          </InfoCardSubTitle>
          <InfoCardContent>
            <GaugeContainer>
              <GaugeChart
                id="uv-gauge-chart"
                nrOfLevels={2}
                arcsLength={[order / 10, (10 - order) / 20]}
                colors={[COLORS.ORANGE, "#efefef"]}
                percent={order / 200}
                arcPadding={0.02}
                cornerRadius={2}
                needleColor="transparent"
                needleBaseColor="transparent"
                nrOfLevels={420}
                arcsLength={[0.4, 0.5, 0.2]}
                colors={["#EA4228", "#F5CD19", "#5BE12C"]}
                percent={0.37}
                arcPadding={0.02}
              />
              <GaugeText>{order}</GaugeText>
            </GaugeContainer>
          </InfoCardContent>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>CUSTOMERS</InfoCardTitle>
          <InfoCardSubTitle>AUDIENCE & LIVE TRAFFIC</InfoCardSubTitle>
          <InfoCardContent></InfoCardContent>
          <InfoCardFooter></InfoCardFooter>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>API CHECK</InfoCardTitle>
          <InfoCardSubTitle>LIVE MONITORING</InfoCardSubTitle>

          <div></div>
          <InfoCardFooter />
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>HEALTH CHECK</InfoCardTitle>
          <InfoCardSubTitle>LIVE MONITORING</InfoCardSubTitle>
          <Tab />
          <InfoCardContent></InfoCardContent>
          <InfoCardFooter>
            <InfoCardFooterLegend>
              LENGOW - ECOMMERCE FEED MANAGEMENT PLATFORM <br />
              OLAPIC - CONTENT MANAGEMENT & CUSTOMER ENGAGEMENT PLATFORM
            </InfoCardFooterLegend>
          </InfoCardFooter>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>CUSTOMER BEHAVIOR</InfoCardTitle>
          <InfoCardSubTitle>GOOGLE ANALYTICS TRACKING</InfoCardSubTitle>
          <InfoCardContent></InfoCardContent>

          <InfoCardFooter></InfoCardFooter>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>LIVE MAP</InfoCardTitle>
          <InfoCardSubTitle>
            REALTIME E-COMMERCER ORDER TRACKING
          </InfoCardSubTitle>
          <InfoCardContent></InfoCardContent>

          <InfoCardFooter></InfoCardFooter>
        </InfoCard>
      </InfoCardsContainer>
    </Container>
  );
};

export default Dashboard;
