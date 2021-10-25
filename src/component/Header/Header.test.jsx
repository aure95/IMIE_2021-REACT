import {screen, render} from '@testing-library/react';
import Header from './Header';

const name = 'My Header Name';

test('print Header with text ? inside', () => {
    const rendered = render(<Header/>);

    expect(rendered).toMatchSnapshot();
});