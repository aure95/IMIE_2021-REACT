import {screen, render} from '@testing-library/react';
import {ButtonAdd} from './ButtonAdd'

test("buttonAdd", () => {
    const rendered = render(<ButtonAdd/>);

    expect(rendered).toMatchSnapshot();
})