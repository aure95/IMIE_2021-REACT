import { render, screen } from "@testing-library/react"
import MainPage from "./MainPage"

test("show MainPage", () => {
    const rendered = render(<MainPage/>)

    expect(rendered).toMatchSnapshot();
});
