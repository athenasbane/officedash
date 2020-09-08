import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Todos from './components/Todos/Todos';
import RightSide from './components/Rightside/Rightside';
import EditTask from './components/Rightside/EditTask/EditTask';

import './App.css'

function App() {

  const [ edit, setEdit ] = useState(false);
  const [ editID, setEditID ] = useState(null);

  const editHandler = (id) => {
    setEdit(!edit)
    setEditID(id)
  };

  return (
    <BrowserRouter> 
      <div className="App">
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              >
            <Grid item xs={5}>
              <Todos clicked={editHandler}/>
            </Grid>
            <Grid item xs={7}>
              {edit ? <EditTask id={editID} /> : <RightSide />}
            </Grid>
          </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
