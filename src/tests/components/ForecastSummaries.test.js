import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: 800,
      temperature: {
        min: 12,
        max: 22,
      },
      onSelect: () => {},
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: 602,
      temperature: {
        min: 16,
        max: 28,
      },
      onSelect: () => {},
    },
  ];

  it("renders", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("rendersthe correct number of instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
