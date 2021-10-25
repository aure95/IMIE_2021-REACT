import { render, screen } from "@testing-library/react"
import ListComponent from "./ListComponent"


test("test ListComponent", () => {
    const rendered = render(ListComponent);

    expect(rendered).toMatchSnapshot();
});