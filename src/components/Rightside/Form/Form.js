import React from 'react';

import { 
    TextField, 
    Grid, 
    InputLabel,
    MenuItem, 
    Select, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel, 
    Radio, 
    Button, 
    FormControl,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles ({
    root: {
        width: '100%',
        height: '100%'
    },
    title: {
        margin: 'auto'
    },
    priority: {
        margin: 'auto',
    },
    radio: {
        marginTop: '100px'
    },
    selector: {
        minWidth: '200px'
    },
    input: {
        minWidth: '200px'
    }
});

export default function Form (props) {
    const classes = useStyles();
        
    return (
        <form noValidate autoComplete="off" onSubmit={ props.submit }>
                <Grid container direction="column">
                    <Grid item container direction="row" justify="center" align="center">
                        <Grid className={classes.title} item xs={6}>
                           <TextField 
                                className={classes.input} 
                                onChange={(e) => props.setTitle(e.target.value)} 
                                label="Title" 
                                value={props.title}/> 
                        </Grid>
                        <Grid className={classes.priority} item>
                            <InputLabel>Priority:</InputLabel>
                        </Grid>
                        <Grid className={classes.priority} item xs={4}>
                        <Select
                            value={props.priority}
                            onChange={e => props.setPriority(e.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="center" align="center">
                        <Grid item className={classes.radio} xs={6} >
                            <FormControl component="fieldset">
                                <Grid item container direction="row" spacing={1} alignItems="center" >
                                    <Grid item>
                                        <FormLabel component="legend">Complete:</FormLabel>
                                    </Grid>
                                    <Grid item>
                                        <RadioGroup onChange={e => props.setComplete(e.target.value)} row value={props.complete}>
                                            <FormControlLabel value={true} control={<Radio />} label="True" />
                                            <FormControlLabel value={false} control={<Radio />} label="False" />
                                        </RadioGroup>
                                    </Grid> 
                                </Grid>
                            </FormControl>
                        </Grid>
                        <Grid item className={classes.radio} xs={6}>
                            <Button variant="contained" type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>  
            </form>
    );
};