import React from "react";

import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";

export default function ForcastDaily(prop) {
  function temperatureMin() {
    let tempMin = Math.round(prop.dailyData.temp.min);
    return `${tempMin}°`;
  }

  function temperatureMax() {
    let tempMax = Math.round(prop.dailyData.temp.max);
    return `${tempMax}°`;
  }

  function formatDay() {
    let date = new Date(prop.dailyData.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div>
      <div className="forcast-day">{formatDay()}</div>
      <div>
        <WeatherIcon code={prop.dailyData.weather[0].icon} />
      </div>
      <div>
        <span className="forcast-minTemp">{temperatureMin()}</span>
        <span className="forcast-maxTemp">{temperatureMax()}</span>
      </div>
    </div>
  );
}
