import { screen, render } from "@testing-library/react";
import Home from "../index";

it("should render the home page", () => {
  render(<Home />);
  const heading = screen.getByText(/Sai Khant/i);
  expect(heading).toBeInTheDocument();
});
