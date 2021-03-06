import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';

import { url } from '../../../constants';

import { withStyles } from '@material-ui/core/styles';

import Form from '../Form/Form';

const styles = {
    root: {
        width: '100%',
        height: '100%'
    }
};

function EditTask (props) {
    const { classes } = props;
    const [ title, setTitle ] = useState('');
    const [ priority, setPriority] = useState(1);
    const [ complete, setComplete] = useState(false);

    const toggleComplete = () => {
        console.log(complete)
        setComplete(prev => !prev)
    };

    const submitHandler = (e) => {
        e.preventDefault()

        fetch(url + `/${props.id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ title, complete, priority })

        })
        .then(response => { 
            window.location.reload(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(url + `/${props.id}.json`, {
            signal: signal,
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTitle(data.title)
            setPriority(data.priority)
            setComplete(data.complete)
        })

    
    return function cleanup() {
        abortController.abort()
        }
    }, [props.id])
    

    return (
        <Paper className={ classes.root }>
            <Form 
                setTitle={ (value) => setTitle(value) }
                title={ title }
                setPriority={ (value) => setPriority(value) }
                priority={ priority }
                toggleComplete={ toggleComplete }
                complete={ complete }
                submit={ submitHandler }
                />
        </Paper>
    );
};

export default withStyles(styles)(EditTask)