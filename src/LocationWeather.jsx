import React from "react";

const LocationWeather = ({ weather }) => {
    {console.log(weather)}

    return (
        <div className="weather">
            <div>
                <h3>Country: {weather.location.country}</h3>
                <h4>City: {weather.location.name}</h4>
            </div>
            <div>mora
                <p>Temperature: {weather.current.temperature}ºC</p>
                <p>Temperature Feeling: {weather.current.feelslike}ºC</p>
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Description: {weather.current.weather_descriptions}</p>
                <img src={weather.current.weather_icons} alt="weather_img" />
            </div>
        </div>
    );
}

export default LocationWeather;