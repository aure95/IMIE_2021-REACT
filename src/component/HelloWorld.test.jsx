import {render, screen} from '@testing-library/react'
import HelloWorld from './HelloWorld'

test("print hello world to the user", () => {
	const rendered = (<HelloWorld/>);

	const hello = screen.getByText(" Hello World from Component ");
	// test be in the Document	
	expect(hello).toBeInTheDocument();
	// test et enregistre l'etat du test
	//expect(hello).toMatchSnapShot();
} );