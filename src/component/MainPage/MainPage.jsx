import { useState, useEffect} from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import style from './MainPage.module.css'
import Layout from '../Layout/Layout'
import ListComponent from '../ListComponent/ListComponent';
import ButtonAdd from '../Checkbox/ButtonAdd/ButtonAdd';
import TaskForm from '../TaskForm/TaskForm';

const tasksMock =  [
        {id: '0', name: 'piscine', date:'27/10/2021 10:30'},
        {id: '1', name: 'paintball', date:'27/10/2021 14:00'},
        {id: '2', name: 'escalade', date:'28/10/2021 10:30'},
        {id: '3', name: 'macdo', date:'28/10/2021 12:30'},
        {id: '4', name: 'ciné', date:'29/10/2021 15:00'},
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

    const generateId = () => {
        return (tasks.length).toString();
    }

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
            formTaskConverted['id'] = generateId()
            tasksCopy.push(formTaskConverted);
            setTasks(tasksCopy);
            RAZformTaskCreated();
        } else {
            alert('remplir tous les champs');
        }
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        
        return result;
    };

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const tasksCopy = reorder(
            [...tasks],
            result.source.index,
            result.destination.index
        );

        setTasks(tasksCopy);
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
                        <ListComponent tasks={tasks} onDragEnd={onDragEnd}/>
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
