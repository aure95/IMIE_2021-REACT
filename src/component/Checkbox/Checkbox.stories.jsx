import Checkbox from "./Checkbox";

export default {
    title: 'component/Checkbox',
    component: Checkbox
}

export const checked = () => <Checkbox checked={true}/>
export const unchecked = () => <Checkbox checked={false}/>