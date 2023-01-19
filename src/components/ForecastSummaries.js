import React from "react";
import Proptypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries() {
  return (
    <div class="forecast-summaries">
      {forecast.map((forecast) => (
        <ForecastSummary
          date={forecast.date}
          desc={forecast.desc}
          icon={forecast.icon}
          temp={forecast.temp}
        />
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: Proptypes.arrayOf(
    Proptypes.shape({
      date: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temp: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ForecastSummaries;
