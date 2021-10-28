import { useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import style from './MainPage.module.css'
import Layout from '../Layout/Layout'
import ListComponent from '../ListComponent/ListComponent';
import ButtonAdd from '../Checkbox/ButtonAdd/ButtonAdd';
import TaskForm from '../TaskForm/TaskForm';

const tasksMock =  [
        {name: 'piscine', date:'27/10/2021 10:30'},
        {name: 'paintball', date:'27/10/2021 14:00'},
        {name: 'escalade', date:'28/10/2021 10:30'},
        {name: 'macdo', date:'28/10/2021 12:30'},
        {name: 'ciné', date:'29/10/2021 15:00'}
    ]

const formTasks = [
        {labelName: 'activity', type: 'text'},
        {labelName: 'date', type: 'date'},
        {labelName: 'time', type: 'time'}
    ]

export default function MainPage() {

    const [tasks, setTasks] = useState([]);
    const [isButtonAddClicked, setButtonAddClicked] = useState(false)

    // appellé une fois car argument []
    useEffect(()=>  {
        var tasksCopy = [...tasks];
        tasksCopy = tasksCopy.concat(tasksMock);
        setTasks(tasksCopy);
    },[])

    const onClickButtonAdd = () => {
        setButtonAddClicked(!isButtonAddClicked);
    }

    const onFormDataWritten = (event) => {
        console.log(event)
        setButtonAddClicked(!isButtonAddClicked);
    }

    const content = () => {
        if (isButtonAddClicked) {
            return (
                <div>
                    <TaskForm formTasks={formTasks} onClickButtonAddTask={onFormDataWritten}/>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <ButtonAdd classname={style.button_add} onClick={onClickButtonAdd}/>
                    </div>
                    <div>
                        <ListComponent tasks={tasks}/>
                    </div>    
                </div>
            )
        }
    }

    return (
        <div>
            <Layout component={content()}/>
        </div>
    );

}
