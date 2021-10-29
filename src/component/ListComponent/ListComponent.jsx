import ListComponentElement from "../ListComponentElement/ListComponentElement";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import style from './ListComponent.module.css'

export default function ListComponent(props) {

    const onDragEnd = (result) => {
        if (props.onDragEnd) {
            props.onDragEnd(result);
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="1">
        {(provided, snapshot) => (
            <div 
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
                <ul className={style.ul}>
                    {props.tasks.map(
                        (task, index) => {
                            return (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided, snapshot) => (
                                    <div  
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <li>
                                            <ListComponentElement className={style.element} key={index} name={task.name} date={task.date}/>
                                        </li>
                                    </div>
                                )}
                                </Draggable>
                            )
                        }
                    )}
                </ul>
            </div> 
        )} 
        </Droppable>
        </DragDropContext>
    );
}