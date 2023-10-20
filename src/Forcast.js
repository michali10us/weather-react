import React from "react";
import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forcast() {
  return (
    <div className="container Forcast">
      <div className="row">
        <div className="col">
          <div className="forcast-day">Sun</div>
          <div>
            <WeatherIcon code={"01d"} />
          </div>
          <div>
            <span className="forcast-minTemp">12°</span>
            <span className="forcast-maxTemp">33°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
