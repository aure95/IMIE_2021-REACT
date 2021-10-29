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
        {name: 'ciné', date:'29/10/2021 15:00'},
    ]

const formTasks = [
        {labelName: 'activity', type: 'text'},
        {labelName: 'date', type: 'date'},
        {labelName: 'time', type: 'time'},
    ]

const formTaskConvert = {
    'activity' : 'name',
    'date' : 'date',
    'time' : 'time',
}

function toFormTask(formTaskCreated) {
    var formTask  = {};
    if (formTaskCreated) {
        for (let key in formTaskCreated) {
            formTask[formTaskConvert[key]] = formTaskCreated[key];
        }
        formTask[formTaskConvert['date']] = formTaskCreated['date'] + ' ' + formTaskCreated['time'];
        formTask[formTaskConvert['date']] = formTask[formTaskConvert['date']].replaceAll('-','/')
    }
    return formTask;
}

function verifyFormTask(formTaskCreated) {
    let isComplete = false;
    if (formTaskCreated) {
        isComplete = true;
        formTasks.forEach((formTaskElement) => {
            if (formTaskCreated[formTaskElement.labelName] === undefined) {
                isComplete = false;
                //break;
            }
        })
    }
    return isComplete;
}

export default function MainPage() {

    const [taskCreated, setTaskCreated] = useState({});
    const [tasks, setTasks] = useState([]);
    const [isButtonAddClicked, setButtonAddClicked] = useState(false)

    // appellé une fois car argument initialisé []
    useEffect(()=>  {
        var tasksCopy = [...tasks];
        tasksCopy = tasksCopy.concat(tasksMock);
        setTasks(tasksCopy);
    },[])

    function RAZformTaskCreated() {
        setTaskCreated({});
    }

    const onClickButtonAdd = () => {
        setButtonAddClicked(!isButtonAddClicked);
    }

    const onChangeInput= (event) => {
        let name = event.target.name;
        var taskCreatedCopy = {...taskCreated};
        taskCreatedCopy[name] = event.target.value;
        setTaskCreated(taskCreatedCopy);
    }

    const onClickButtonAddTask = () => {
        let taskCreatedCopy = {...taskCreated}
        var isComplete = verifyFormTask(taskCreatedCopy);
        if (isComplete) {
            setButtonAddClicked(!isButtonAddClicked);
            var tasksCopy = [...tasks];
            var formTaskConverted = toFormTask(taskCreatedCopy)
            tasksCopy.push(formTaskConverted);
            setTasks(tasksCopy);
            RAZformTaskCreated();
        } else {
            alert('remplir tous les champs');
        }
    }

    const content = () => {
        if (isButtonAddClicked) {
            return (
                <div>
                    <TaskForm formTasks={formTasks} onClickButtonAddTask={onClickButtonAddTask} onChange={onChangeInput}/>
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
