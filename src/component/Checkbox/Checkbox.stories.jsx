import Checkbox from "./Checkbox";

export default {
    title: 'component/Checkbox',
    component: Checkbox
}

const mockCheck = () => {};

export const checked = () => <Checkbox checked={true} onCheck={mockCheck}/>
export const unchecked = () => <Checkbox checked={false} onCheck={mockCheck}/>