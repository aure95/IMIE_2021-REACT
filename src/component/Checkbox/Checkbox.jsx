import { useState } from "react"
import style from './Checkbox.module.css'

export default function Checkbox() {

    const [check, setCheck] = useState(false); 

    return (
        <div className={`${check? style.check : style.uncheck} ${style.checkbox}`} onClick={() => setCheck(!check)} >
            
        </div>
    )

}