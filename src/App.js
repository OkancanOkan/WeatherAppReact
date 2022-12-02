import React, { useState } from "react";
import axios from "axios";

//const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=45aab7374feaeb7f2691a4412255fd60`

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* top */}
        <div className="top">
          <div className="location">
            <p>DALLAS</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        {/* bottom  */}
        <div className="bottom">
          <div className="feels">
            <p>70°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
