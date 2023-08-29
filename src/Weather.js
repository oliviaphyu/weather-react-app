import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    // setReady(true);
  }

  if (weatherData.ready) {
    return(
      <div className="Weather" class="container">
        <div className="Search" class="input-details" id="search-form">
          <form>
          <input
            type="search"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            name="text"
            class="input-box"
            placeholder="Enter a city to search"
          />
          <button id="btnSearch" class="search-btn">
            <div class="fas fa-search search-icon"></div>
          </button>
          <button id="btnLocation" class="location-btn">
            <div class="fa-solid fa-location-dot location-icon"></div>
          </button>
          </form>
          
        </div>
        <div class="city-details">
          <h1 id="city">{weatherData.city}</h1>
          <p id="date">< FormattedDate date={weatherData.date}/></p>
          <p id="desc">{weatherData.description}</p>
        </div>
        <div class="weather-container">
          <div class="weather-icon">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              id="icon"
            />
            <p class="celcius" id="temp">
              {Math.round(weatherData.temperature)}
            </p>
            <span class="link-style">
              ℃
              {/* <a href="#" id="clink" class="active">
                ℃
              </a>
              |
              <a href="#" id="flink">
                ℉
              </a> */}
            </span>
          </div>
          <div class="weather-details">
            <ul>
              <li>
                <i class="fa-solid fa-water tiny-icon"></i> Humidity:
                <span id="humid">{" "}{weatherData.humidity}%</span>
              </li>
              <li>
                <i class="fa-solid fa-wind tiny-icon"></i> Wind:
                <span id="wind">{" "}{Math.round(weatherData.wind)}km/h</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      );
  }else{
    const apiKey = "597c40c39084687093b091cd48b366f8";
    // let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  
    
}