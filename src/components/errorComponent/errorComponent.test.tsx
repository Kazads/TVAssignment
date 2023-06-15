import { ErrorComponent } from "./ErrorComponent";
import { render, screen } from "@testing-library/react";

const component = <ErrorComponent msg={"ErrorMessage"} />;

describe("ErrorComponent should ", () => {
  test("render properly", () => {
    render(component);
    const message = screen.getByText("ErrorMessage");
    expect(message).toBeDefined();
  });
});
