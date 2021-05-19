import "./App.css";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({
    temp: 280.32,
    pressure: 1012,
    humidity: 81,
    name: "London",
  });
  const [city, setCity] = useState("vancouver");

  const handelChange = (event) => {
    const town = event.target.value;
    setCity(town);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82eddd64ff36ae986bb99ea5ea33c80f`
      )
      .then((result) => {
        console.log("App -> result", result);
        setWeather({
          temp: result.data.main.temp,
          pressure: result.data.main.pressure,
          humidity: result.data.main.humidity,
          name: result.data.name,
        });
      });
  }, [city]);
  console.log(weather);
  return (
    <div className="App">
      <div className="App-header">
        <h1>weather of cities</h1>
      </div>
      <TextField
        className="city-holder"
        id="city-name"
        label="Name of city"
        variant="outlined"
        value={city}
        onChange={handelChange}
      />{" "}
      <br />
      <div>
        <TextField
          id="temp-basic"
          disabled
          label="Temperature"
          variant="outlined"
          value={weather.temp}
        />
        <TextField
          id="pressure-basic"
          disabled
          label="Pressure"
          variant="outlined"
          value={weather.pressure}
        />
        <TextField
          id="humidity-basic"
          disabled
          label="Humidity"
          variant="outlined"
          value={weather.humidity}
        />
        <TextField
          id="name-basic"
          disabled
          label="City Name"
          variant="outlined"
          value={weather.name}
        />
      </div>
    </div>
  );
}

export default App;
