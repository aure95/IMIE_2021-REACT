import {screen, render} from '@testing-library/react';
import Layout from './Layout'

test("Layout printed", () => {
    const rendered = render(<Layout/>)

    expect(rendered).toMatchSnapshot();
})