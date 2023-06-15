import { BrowserRouter } from "react-router-dom";
import { MenuComponent } from "./MenuComponent";
import { act, render, screen } from "@testing-library/react";

const component = (
  <BrowserRouter>
    <MenuComponent />
  </BrowserRouter>
);

describe("Menu component should ", () => {
  test("render properly", () => {
    //Block warning from not using act, which shouldn't be used in this case.
    //Typescript won't allow me to do this, so the filetype has been changed to JSX
    global.IS_REACT_ACT_ENVIRONMENT = false;
    render(component);
    const menu = screen.getByTestId("menu");
    const search = screen.getByText("Search series");
    const show = screen.getByText("Show series details");
    expect(menu).toBeDefined();
    expect(search).toBeDefined();
    expect(show).toBeDefined();
  });
});
