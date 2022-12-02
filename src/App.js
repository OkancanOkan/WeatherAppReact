import React,{useState} from "react";
import axios from "axios";

//const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=45aab7374feaeb7f2691a4412255fd60`

function App() {
  return <div className="app">
    <div className="container">
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
      <div className="bottom">
        <div className="feels">
        <h1>70°F</h1>
        </div>
      </div>
    </div>
  </div>
}

export default App;
