import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("Homepage elements exists", () => {
    render(<Home />);

    const container = screen.getByTestId("home");

    expect(container).toBeInTheDocument();
  });
});
