import render from '@testing-library/react'
import TaskForm from './TaskForm'

test("show TaskForm", () => {
    const rendered = render(<TaskForm/>)

    expect(rendered).toMatchSnapshot();
})