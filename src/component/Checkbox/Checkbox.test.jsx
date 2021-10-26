import {screen, render} from '@testing-library/react';
import Checkbox from './Checkbox'




test("Checkbox checked", () => {
    const rendered = render(<Checkbox checked={true}/>)
    
    expect(rendered).toMatchSnapshot;

});

test("Checkbox unchecked", () => { 
    const rendered = render(<Checkbox checked={false}/>)

    expect(rendered).toMatchSnapshot;
});