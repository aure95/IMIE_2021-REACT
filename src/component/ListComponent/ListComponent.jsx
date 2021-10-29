import ListComponentElement from "../ListComponentElement/ListComponentElement";
import { Droppable } from "react-beautiful-dnd";
import style from './ListComponent.module.css'

export default function ListComponent(props) {
    return (
        <div>
        <Droppable droppableId="1">
        {(provided) => (
        <div>
        <ul className={style.ul} ref={provided.innerRef}>
                {props.tasks.map(
                    (task, index) => {
                        return (
                            <li><ListComponentElement className={style.element} key={index} name={task.name} date={task.date}/></li>
                        )
                    }
                )}
        </ul>
        </div> )} 
        </Droppable>
        </div>
    );
}