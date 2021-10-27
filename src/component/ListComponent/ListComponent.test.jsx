import { render, screen } from "@testing-library/react"
import ListComponentElement from "../ListComponentElement/ListComponentElement"

const tasks =  [
    {name: 'piscine', date:'27/10/2021 10:30'},
    {name: 'paintball', date:'27/10/2021 14:00'},
    {name: 'escalade', date:'28/10/2021 10:30'},
    {name: 'macdo', date:'28/10/2021 12:30'},
    {name: 'ciné', date:'29/10/2021 15:00'}
]

test("ListComponent with multiple tasks", () => { 
    const rendered = render(<ListComponentElement tasks={tasks}/>)
    expect(rendered).toMatchSnapshot();
});