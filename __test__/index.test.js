import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a navbar", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "Hello, my name is Edwin welcome to my site",
    });

    expect(heading).toBeInTheDocument();
  });
});
