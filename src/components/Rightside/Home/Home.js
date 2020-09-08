import React from 'react';

import { Paper, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Clock from './Clock/Clock';
import Date from './Clock/Date';

const styles = {
    root: {
        marginTop: '100px',
        width: '95%',
        height: '100%',
        background: '#eee',
    },
    clock: {
        marginTop: '200px'
    },
    date: {
        marginBottom: '200px'
    }
};

function Home(props) {
    const { classes } = props;
    
    return (
        <Paper className={classes.root}>
            <Grid justify="center" alignItems="center" direction="column" container spacing={3}>
                <Grid className={classes.clock} item>
                    <Clock />
                </Grid>
                <Grid className={classes.date} item>
                    <Date />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(Home);