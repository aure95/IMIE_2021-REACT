import { useState } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import Checkbox from '../Checkbox/Checkbox';
import style from './ListComponent.module.css'


const titleName = 'Default title name';
const dateDefault = myDate();

function myDate() {
    var today = new Date();
    return 'Ajouté le ' + today.toLocaleString('en-FR');
}

// function onCheck(setCheck, check) {
//     setCheck(check)
// }


export default function ListComponent(props) {

    const [check, setCheck] = useState(true)

    const onCheck = () => setCheck(!check);

    return ( 
        <div className={`${style.task} ${check? style.checked : style.unchecked}`}>
        <div className={style.listComponent}>
            <h5 >{props.name}</h5>
            <p> {dateDefault} </p>
        </div>
        <div className={style.checkbox}>
            <Checkbox check={check} onCheck={onCheck}/>
        </div>
        {/* <div className={style.checkbox}></div> */}
    </div>
    )
}

