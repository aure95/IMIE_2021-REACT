import { mockComponent } from 'react-dom/test-utils';
import style from './ListComponent.module.css'

const titleName = 'Default title name';
const dateDefault = myDate();

function myDate() {
    var today = new Date();
    return 'Ajouté le ' + today.toLocaleString('en-FR');
}

export default function ListComponent(props) {
    return <div className={style.task}>
        <div className={style.listComponent}>
            <h5 >{props.name}</h5>
            <p> {dateDefault} </p>
        </div>
        <div className={style.checkbox}></div>
    </div>
}

