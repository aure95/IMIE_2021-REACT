import { useState } from "react"
import style from './Checkbox.module.css'

const checked = 'V';
const unchecked = 'X';

export default function Checkbox() {

    const [check, setCheck] = useState(false); 

    return (
        <div className={`${check? style.check : style.uncheck} ${style.checkbox}`} onClick={() => setCheck(!check)} >
            {check? checked : unchecked}
        </div>
    )

}