import { useState } from 'react'
import { checked } from '../Checkbox.stories';
import myStyle from './ButtonAdd.module.css'

export default function ButtonAdd(props) {

    const [click, setClick] = useState(false);

    const onClick = () => {
        if (props.onClick != undefined) {
            props.onClick();
        }
        setClick(!click)
    }

    return (
        <button className={`${click? myStyle.unclicked : myStyle.clicked} ${myStyle.button_add}`} onClick={() => onClick()}>
            +
        </button>
    )

} 