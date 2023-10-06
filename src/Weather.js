import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Weather() {
  let [loaded, upLoaded] = useState(false);
  let [search, newSearch] = useState("");
  let [message, newMessage] = useState({});

  function showWeather(response) {
    upLoaded(true);

    newMessage({
      temp: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      felllike: response.data.main.feels_like,
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
      <form className="form-inline" onSubmit={hadelSubmit}>
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="Search a city"
              onChange={handelChange}
            />
          </div>
          <div className="col-5">
            <button type="submit" className="btn btn-primary ">
              Current location
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="container text-center">
          <div class="row mt-5">
            <div class="col-sm-3 col-md-4"> {Math.round(message.temp)}°C</div>
            <div class="col-sm-3 col-md-4">{search}</div>
            <div className="col-sm-3 col-md-4 weather-img">
              <img
                src={message.icon}
                width="50"
                height="50"
                alt="Weather icon"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-md-4">
              {Math.round(message.felllike)}°C
            </div>
            <div class="col-sm-3 col-md-4">Last updated:</div>
            <div class="col-sm-3 col-md-4">
              Feels like:{message.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
