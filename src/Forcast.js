import React, { useState } from "react";
import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forcast(property) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function hadelRequest(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="container Forcast">
        <div className="row">
          <div className="col">
            <div className="forcast-day">{forecast[0].time}</div>
            <div>
              <WeatherIcon code={"50d"} />
            </div>
            <div>
              <span className="forcast-minTemp">
                {forecast[0].temperature.minimum}
              </span>
              <span className="forcast-maxTemp">
                {forecast[0].temperature.maximum}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bd64o304c00cb1336373a57ft8094a9d";
    let longitude = property.coordinate.lon;
    let latitude = property.coordinate.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hadelRequest);

    return null;
  }
}
