import React from "react";
import Friendlydate from "./Friendlydate";
import WeatherIcon from "./WeatherIcon";

export default function WheatherInfo(props) {
  return (
    <div className="container WheatherInfo text-center">
      <div class="row mt-5 first-information">
        <div class="col-sm-4 col-md-4">
          <span className="temperature">{Math.round(props.info.temp)}</span>
          <span className="unit">°C</span>
        </div>
        <div class="col-sm-4 col-md-4 text-capitalize">{props.info.city}</div>

        <div className="col-sm-4 col-md-4 mt-2 weather-img">
          <WeatherIcon code={props.info.icon} />
        </div>
      </div>
      <div class="row mt-1 second-information">
        <div class="col-sm-4 col-md-4">
          <span className="temperature">
            Fells like: {Math.round(props.info.felllike)}
          </span>

          <span className="unitFells">°C</span>
        </div>
        <div className="col-sm-4 col-md-4">
          <Friendlydate date={props.info.date} />
        </div>
        <div className="col-sm-4 col-md-4 text-capitalize">
          {props.info.description}
        </div>
      </div>
    </div>
  );
}
