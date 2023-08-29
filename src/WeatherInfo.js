import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div class="city-details">
          <h1 id="city">{props.data.city}</h1>
          <p id="date">< FormattedDate date={props.data.date}/></p>
          <p id="desc">{props.data.description}</p>
        </div>
        <div class="weather-container">
          <div class="weather-icon">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="icon"
            />
            <div>
            <WeatherTemperature celsius={props.data.temperature} />
            </div>
            
            
          </div>
          <div class="weather-details">
            <ul>
              <li>
                <i class="fa-solid fa-water tiny-icon"></i> Humidity:
                <span id="humid">{" "}{props.data.humidity}%</span>
              </li>
              <li>
                <i class="fa-solid fa-wind tiny-icon"></i> Wind:
                <span id="wind">{" "}{Math.round(props.data.wind)}km/h</span>
              </li>
            </ul>
          </div>
          
        </div>
        </div>
    );
}