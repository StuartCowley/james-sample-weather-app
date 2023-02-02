import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";

function ForecastSummary({ date, temperature, description, icon, onSelect }) {
  // const { date, temp, desc, icon } = props;
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} className="icon" />
      </div>
      <div className="forecast-summary__temperature">
        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button
        className="details-button"
        type="button"
        onClick={() => onSelect(date)}
      >
        More Details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
