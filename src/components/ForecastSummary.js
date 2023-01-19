import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, temp, desc, icon } = props;
  return (
    <div class="forecast-summary">
      <div class="forecast-summary-date">{date}</div>
      <div class="forecast-summary-icon">{icon}</div>
      <div class="forecast-summary-temp">
        {temp.max}
        &deg;C
      </div>
      <div class="forecast-summary-desc">{desc}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
