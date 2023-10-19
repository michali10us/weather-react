import axios from "axios";
import React, { useState } from "react";
import WheatherInfo from "./WheatherInfo";
import Forcast from "./Forcast";
import "./App.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      felllike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
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
              Search location
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
        <WheatherInfo info={weatherData} />
        <div className="Forcast mt-3">
          <Forcast />
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
