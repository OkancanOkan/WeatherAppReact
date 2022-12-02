import React, { useState } from "react";
import axios from "axios";
console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {

  const apiKey = '45aab7374feaeb7f2691a4412255fd60'

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        setLocation('')
      });
    }
  };

  
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          placeholder='Enter Location'
          onKeyPress={searchLocation}
          onChange={event => setLocation(event.target.value)}
          type="search" />
      </div>
      <div className="container">
        {/* top */}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{ data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{ data.weather[0].main}</p> : null}
          </div>
        </div>
        {/* bottom  */}
        {data.name != undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{ data.main.feels_like.toFixed()} °C </p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity.toFixed()} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null }
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
