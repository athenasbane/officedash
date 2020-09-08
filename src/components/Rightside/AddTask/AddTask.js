import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import Form from '../Form/Form';

import { url } from '../../../constants';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '95%',
        height: '100%'
    }
};

function AddTask (props) {
    const { classes } = props;
    const [ title, setTitle ] = useState('');
    const [ priority, setPriority] = useState(1);
    const [ complete, setComplete] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault()

       fetch(url + '.json', {
           method: 'POST',
           mode: 'cors',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({title, complete, priority})
       })
       .then(response => {})
       .catch(error => console.log(error))
    }

    return (
        <Paper className={classes.root}>
            <Form 
                setTitle={(value) => setTitle(value)}
                title={title}
                setPriority={(value) => setPriority(value)}
                priority={priority}
                setComplete={(value) => setComplete(value)}
                complete={complete}
                submit={ submitHandler }
                />
        </Paper>
    );
};

export default withStyles(styles)(AddTask)

