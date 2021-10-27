import { render, screen } from "@testing-library/react"
import ListComponentElement from "./ListComponentElement"


test("test ListComponentElement", () => {
    const rendered = render(<ListComponentElement/>);

    expect(rendered).toMatchSnapshot();
});