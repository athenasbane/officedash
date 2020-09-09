import React from 'react';

import { Paper, Typography, Grid, makeStyles, Grow } from '@material-ui/core';

function Todo(props) {

    let color = props.task.priority * 50
    let textColor = 250 / props.task.priority

    const useStyles = makeStyles({
    root: {
        color: `rgba(${textColor}, ${textColor}, ${textColor}, 1)`,
        width: '100%',
        background: `rgba(${color}, ${color}, ${color}, 0.9)`,
        cursor: 'pointer',
        marginTop: '20px',
        textAlign: 'center'
    }

    });

    const classes = useStyles();

    return (
        <Grow in timeout={props.index * 500}>
          <Paper
            onClick={() => props.clicked(props.task.id)} 
            className={classes.root} 
            hidden={props.task.completed}>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" component="h2" gutterBottom>
                            {props.task.title}
                        </Typography> 
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Priority: {props.task.priority}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>  
        </Grow>
        
    );
};

export default Todo;