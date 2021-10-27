import { useState } from "react"
import style from './Checkbox.module.css'

const checked = 'V';
const unchecked = 'X';

export default function Checkbox(props) {

    // const [check, setCheck] = useState(false); 
    console.log(props)
    return (
        // <div className={`${check? style.check : style.uncheck} ${style.checkbox}`} onClick={() => setCheck(!check)} >
        <div className={`${props.check? style.check : style.uncheck} ${style.checkbox}`} onClick={() => props.onCheck()} >
            {props.check? checked : unchecked}
        </div>
    )

}