import React from "react";
import Clock from "react-live-clock";

export default class MyTime extends React.Component {
  render() {
    <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Tokyo"} />;
  }
}
