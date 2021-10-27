import { useState } from 'react'
import Layout from '../Layout/Layout'
import ListComponent from '../ListComponent/ListComponent';

export default function MainPage() {

    const tasksMock =  [
        {name: 'piscine', date:'27/10/2021 10:30'},
        {name: 'paintball', date:'27/10/2021 14:00'},
        {name: 'escalade', date:'28/10/2021 10:30'},
        {name: 'macdo', date:'28/10/2021 12:30'},
        {name: 'ciné', date:'29/10/2021 15:00'}
    ]

    const [tasks, setTasks] = useState([]);

    return (
        <div>
            <Layout component={<ListComponent tasks={tasksMock}/>}/>
        </div>
        
    )
}