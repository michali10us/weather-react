import React, { useState, useEffect } from "react";
import "./Forcast.css";
import ForcastDaily from "./ForcastDaily";
import axios from "axios";

export default function Forcast(property) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function hadelRequest(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [property.coordinate]);

  if (loaded) {
    return (
      <div className="container Forcast">
        <div className="row">
          <div className="col">
            <ForcastDaily dailyData={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";

    let longitude = property.coordinate.lon;
    let latitude = property.coordinate.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hadelRequest);

    return null;
  }
}
