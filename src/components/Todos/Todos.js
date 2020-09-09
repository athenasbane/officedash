import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Todo from './Todo/Todo';

export default function Todos (props) {
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch('https://taskdash-5838b.firebaseio.com/task.json', { signal: signal })
        .then(response => response.json())
        .then(data => {
            let taskArr = Object.values(data);
            taskArr = taskArr.map((el, index) => {
                return {
                  ...el,
                  id: Object.keys(data)[index]  
                }
            })
            taskArr.sort((a, b) => {
                return a.priority - b.priority;
            }) 

            taskArr = taskArr.filter((task) => !task.complete)
           
            setTasks(taskArr)
        })

        return function cleanup() {
            abortController.abort()
        }

    }, [])

    return (
    <Container fixed>
        {tasks.map((task, index) => <Todo clicked={props.clicked} key={task.id} task={task} index={index} />)}
    </Container>
)};
