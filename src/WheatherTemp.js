import React from "react";
import "./App.css";

export default function WheatherTemp(prop) {
  return (
    <span>
      <span className="temperature">{Math.round(prop.temperature)}</span>
      <span className="unitCel">°C</span>
      <span className="unit">°|</span>
      <span className="unitFer">°F</span>
    </span>
  );
}
