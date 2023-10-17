import axios from "axios";
import React, { useState } from "react";
import Friendlydate from "./Friendlydate";
import "./App.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      felllike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }

  function hadelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handelChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(showWeather);
  }

  let form = (
    <div className="container text-center mt-5">
      <form onSubmit={hadelSubmit}>
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="Search a city"
              onChange={handelChange}
              autoFocus="on"
            />
          </div>
          <div className="col-5">
            <button type="submit" className="btn btn-primary">
              Current location
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (weatherData.ready) {
    return (
      <div>
        {form}
        <div className="container text-center">
          <div class="row mt-5 first-information">
            <div class="col-sm-4 col-md-4">
              <span className="temperature">
                {Math.round(weatherData.temp)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div class="col-sm-4 col-md-4 text-capitalize">{city}</div>
            <div className="col-sm-4 col-md-4 weather-img">
              <img
                src={weatherData.icon}
                /* width="20" */
                height="50"
                alt="Weather icon"
              />
            </div>
          </div>
          <div class="row mt-1 second-information">
            <div class="col-sm-4 col-md-4">
              <span className="temperature">
                Fells like: {Math.round(weatherData.felllike)}
              </span>

              <span className="unitFells">°C</span>
            </div>
            <div class="col-sm-4 col-md-4">
              <Friendlydate date={weatherData.date} />
            </div>
            <div className="col-sm-4 col-md-4 text-capitalize">
              {weatherData.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
