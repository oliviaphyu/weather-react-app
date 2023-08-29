import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if(unit === "celsius"){
        return(
            <div className="WeatherTemperature">
                <p class="celcius" id="temp">
                {Math.round(props.celsius)}
                </p>
                <span class="link-style">
                <a href="/" id="clink" class="active">
                    ℃
                </a>
                |
                <a href="/" id="flink" onClick={convertToFahrenheit}>
                    ℉
                </a>
                </span>
            </div>
        );
    }else{
        let fahrenheit = (props.celsius * 9/5) + 32;
        return(
            <div className="WeatherTemperature">
                <p class="celcius" id="temp">
                {Math.round(fahrenheit)}
                </p>
                <span class="link-style">
                <a href="/" id="clink" onClick={convertToCelsius}>
                    ℃
                </a>
                |
                <a href="/" id="flink" class="active">
                    ℉
                </a>
                </span>
            </div>
        );
    }
    
}