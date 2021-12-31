import React, { useEffect, useRef } from "react";
import Gauge from "svg-gauge";
const defaultOptions = {
  max: 30000,
  dialStartAngle: 90,
  dialEndAngle: 0,
  value: 50
  // Put any other defaults you want. e.g. dialStartAngle, dialEndAngle, radius, etc.
  //https://github.com/naikus/svg-gauge
};

const Gauge = (props) => {
  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);
  useEffect(() => {
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValueAnimated(props.value, 1);
  }, [props]);

  return <div ref={gaugeEl} className="gauge-container" />;
};

export default Gauge;
