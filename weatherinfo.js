// WeatherInfo.js
import React from "react";

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { main, weather } = weatherData;

  return (
    <div>
      <h2>{weather[0].description}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      {/* Add weather icon if the API provides it */}
      {weather[0].icon && (
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].description}
        />
      )}
    </div>
  );
};

export default WeatherInfo;
