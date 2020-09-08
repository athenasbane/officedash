import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

export default function ADate () {

    const [ TheDate, setDate ] = useState(new Date().toLocaleDateString())

    useEffect(() => {
        window.setInterval(() => {
            setDate(new Date().toLocaleDateString())
        }, 36000)
    })

    return (
        <Typography variant="h1" component="h2" gutterBottom>{TheDate}</Typography>
    );
};