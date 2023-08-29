import React, {useState} from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    // setReady(true);
  }

  function search(){
    const apiKey = "597c40c39084687093b091cd48b366f8";
    // let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }


  if (weatherData.ready) {
    return(
      <div className="Weather" class="container">
        <div className="Search" class="input-details" id="search-form">
          <form onSubmit={handleSubmit}>
          <input
            type="search"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            name="text"
            class="input-box"
            placeholder="Enter a city to search"
            onChange={handleCityChange}
          />
          <button id="btnSearch" class="search-btn">
            <div class="fas fa-search search-icon"></div>
          </button>
          <button id="btnLocation" class="location-btn">
            <div class="fa-solid fa-location-dot location-icon"></div>
          </button>
          </form>
          
        </div>
        <WeatherInfo data={weatherData} />
        
      </div>
      );
  }else{
    search();

    return "Loading...";
  }

  
    
}