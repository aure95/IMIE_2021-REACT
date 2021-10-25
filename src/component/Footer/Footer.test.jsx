import {screen, render} from '@testing-library/react';
import Footer from './Footer'

const name = '@Agence Freya';

test("print footer with name in footer", () => {
    const rendered = (<Footer/>);

    const nameResult = screen.getByText(name);
    
    expect(nameResult).toBeInTheDocument();
});