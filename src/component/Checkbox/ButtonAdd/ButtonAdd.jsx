import { useState } from 'react'
import { checked } from '../Checkbox.stories';
import myStyle from './ButtonAdd.module.css'

export default function ButtonAdd() {

    const [click, setClick] = useState(false);

    return (
        <button className={`${click? myStyle.unclicked : myStyle.clicked} ${myStyle.button_add}`} onClick={() => setClick(!click)}>
            +
        </button>
    )

} 