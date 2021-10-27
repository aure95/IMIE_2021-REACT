import { useState } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import Checkbox from '../Checkbox/Checkbox';
import style from './ListComponentElement.module.css'


const titleName = 'Default title name';
const dateDefault = myDate();

function myDate() {
    var today = new Date();
    return 'Ajouté le ' + today.toLocaleString('en-FR');
}

export default function ListComponentElement(props) {

    const [check, setCheck] = useState(true)

    const onCheck = () => setCheck(!check);

    return ( 
        <div className={`${style.task} ${check? style.checked : style.unchecked}`}>
        <div className={style.listComponent}>
            <div className={style.text}>
                <p>{props.name}</p>
            {/* <p> {dateDefault} </p> */}
                <p> {props.date} </p>
            </div>
        </div>
        <div className={style.checkbox}>
            <Checkbox check={check} onCheck={onCheck}/>
        </div>
        {/* <div className={style.checkbox}></div> */}
    </div>
    )
}

