import ListComponentElement from "../ListComponentElement/ListComponentElement";
import Draggable from "react-beautiful-dnd";
import style from './ListComponent.module.css'

export default function ListComponent(props) {
    return (
        <ul className={style.ul}>
            {props.tasks.map(
                (task, index) => {
                   return <li><ListComponentElement className={style.element} key={index} name={task.name} date={task.date}/></li>
                }
            )}
        </ul>
    );
}