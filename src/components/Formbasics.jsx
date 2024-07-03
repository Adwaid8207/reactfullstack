import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Formbasics = () => {
    var [inputs, setInputs] = useState({username: "",email:"", place:""});
    
    const inputHandler = (e) =>{
        console.log(e.target.value);
        setInputs({...inputs, [e.target.name] : e.target.value });
        console.log(inputs);
    };
  return (
    <div style={{marginTop :'10%', marginLeft  :'45%'}}>
      <TextField variant='outlined' label='Username' onChange={inputHandler} name="username" value={inputs.username} ></TextField><br /><br />
      <TextField variant='outlined' label='Email' onChange={inputHandler} name="email" value={inputs.email} ></TextField><br /><br />
      <TextField variant='outlined' label='Place' onChange={inputHandler} name="place" value={inputs.place} ></TextField><br /><br />
      <Button  variant="contained"color='secondary'>Submit</Button>
    </div>
  )
}

export default Formbasics
