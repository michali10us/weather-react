import axios from "axios";
import React, { useState } from "react";
import Friendlydate from "./Friendlydate";
import "./App.css";

export default function Weather() {
  let [search, newSearch] = useState("");
  let [message, newMessage] = useState({});

  function showWeather(response) {
    newMessage({
      temp: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      felllike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }
  function hadelSubmit(event) {
    event.preventDefault();
    let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(showWeather);
  }
  function handelChange(event) {
    newSearch(event.target.value);
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

  {
    return (
      <div>
        {form}
        <div className="container text-center">
          <div class="row mt-5 first-information">
            <div class="col-sm-4 col-md-4">
              <span className="temperature">{Math.round(message.temp)}</span>
              <span className="unit">°C</span>
            </div>
            <div class="col-sm-4 col-md-4 text-capitalize">{search}</div>
            <div className="col-sm-4 col-md-4 weather-img">
              <img
                src={message.icon}
                /* width="20" */
                height="50"
                alt="Weather icon"
              />
            </div>
          </div>
          <div class="row mt-1 second-information">
            <div class="col-sm-4 col-md-4">
              <span className="temperature">
                Fells like: {Math.round(message.felllike)}
              </span>

              <span className="unitFells">°C</span>
            </div>
            <div class="col-sm-4 col-md-4">
              Update time:
              <Friendlydate date={message.date} />
            </div>
            <div className="col-sm-4 col-md-4 text-capitalize">
              {message.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
