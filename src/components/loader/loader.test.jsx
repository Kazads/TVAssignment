import { Loader } from "./Loader";
import { render, screen } from "@testing-library/react";

const component = <Loader />;

describe("Loader should ", () => {
  test("render properly", () => {
    render(component);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeDefined();
  });

  test("show message if shown for longer then 3 seconds", () => {
    render(component);
    setTimeout(() => {
      const loader = screen.getByTestId("loader");
      expect(loader).toBeDefined();
      const message = screen.getByText("This is taking a longer time then expected...");
      expect(message).toBeDefined();
    }, 5000)
    
  });
});
