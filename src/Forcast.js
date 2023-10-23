import React from "react";
import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forcast() {
  function hadelRequest(response) {
    console.log(response);
  }

  let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
  let longitude = -9.1365919;
  let latitude = 38.7077507;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}
  &key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(hadelRequest);

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
