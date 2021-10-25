import style from './ListComponent.module.css'

const titleName = 'Default title name';
const dateDefault = 'Ajouté le 2/9 à 10 h';

export default function ListComponent(props) {
    return <div>
        <div>
            <h5 >{props.name}</h5>
            <p> {props.date} </p>
        <div className={style.checkbox}></div>
        </div>
    </div>
}

