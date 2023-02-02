import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("it renders correctly", () => {
  it("renders a search box and button", () => {
    const { asFragment } = render(<SearchForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
