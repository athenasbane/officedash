import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

export default function Clock () {

    const [ time, setTime ] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <Typography variant="h1" component="h2" gutterBottom>{time}</Typography>
    );
};
