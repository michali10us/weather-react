/* import { upload } from "@testing-library/user-event/dist/upload";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils"; */
import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  let [loaded, upLoaded] = useState(false);
  let [search, newSearch] = useState("");
  let [message, newMessage] = useState("");

  function showWeather(response) {
    upLoaded(true);
    newMessage(response.data.main.temp);
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
    <form className="row g-3 align-items-center" onSubmit={hadelSubmit}>
      <div className="col-auto">
        <input
          type="search"
          placeholder="Search a city"
          onChange={handelChange}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary btn-lg ">
          Current location
        </button>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <h2>
          The temperature in {search} is : {Math.round(message)}°C
        </h2>
      </div>
    );
  } else {
    return form;
  }

  <footer>
    <a href="https://github.com/michali10us/weather-react">Open-sourced </a>
    by Michal
  </footer>;
}
