import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, humidity, wind, temperature } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecastDetails">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__humidity">{humidity}%</div>
      <div className="forecast-details__windSpeed">{wind.speed}</div>
      <div className="forecast-details__windDirection">{wind.direction}</div>
      <div className="forecast-details__tempMax">{temperature.max}&deg;C</div>
      <div className="forecast-details__tempMin">{temperature.min}&deg;C</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
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
