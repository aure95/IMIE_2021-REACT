import { render, screen } from "@testing-library/react"
import ListComponentElement from "./ListComponentElementElement"


test("test ListComponentElement", () => {
    const rendered = render(ListComponentElement);

    expect(rendered).toMatchSnapshot();
});