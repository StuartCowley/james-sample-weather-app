import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";
import WeatherIcon from "react-icons-weather";

function ForecastDetails({ forecast }) {
  const { date, humidity, wind, temperature, icon } = forecast;
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="forecastDetails">
      <div className="forecast-details__icon">
        <WeatherIcon name="owm" iconId={icon} className="icon2" />
      </div>
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__windSpeed">Wind {wind.speed} mph</div>
      <div className="forecast-details__windDirection">({wind.direction})</div>
      <div className="forecast-details__tempMax">
        Max: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__tempMin">
        Min: {temperature.min}&deg;C
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    icon: PropTypes.string.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,

    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
