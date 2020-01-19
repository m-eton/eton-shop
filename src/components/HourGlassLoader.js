import React from "react";

import {
  FaHourglassStart,
  FaHourglassHalf,
  FaHourglassEnd
} from "react-icons/fa";

const HourGlassLoader = () => (
  <div className="hour-glass-loader">
    <div className="loader-frames">
      <div className="loader-frame one">
        <FaHourglassStart />
      </div>
      <div className="loader-frame two">
        <FaHourglassHalf />
      </div>
      <div className="loader-frame three">
        <FaHourglassEnd />
      </div>
    </div>
    <h5 className="loader-text">Loading...</h5>
  </div>
);

export default HourGlassLoader;
