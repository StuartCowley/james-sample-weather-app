import React from "react";
import PropTypes from "prop-types";

function ForecastSummary({ date, temperature, description, icon }) {
  // const { date, temp, desc, icon } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary-date">{date}</div>
      <div className="forecast-summary-icon">{icon}</div>
      <div className="forecast-summary-temp">{temperature.max}</div>
      <div className="forecast-summary-desc">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
