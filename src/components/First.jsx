import React from 'react'
import {Button,TextField, Typography } from '@mui/material'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="Username" placeholder='username'/>
      <br /><br />
      
      <input type="Password" placeholder='password'/>
      <br /><br />
    <button>Login</button>
    <br />
    <br />
    <br />
    <br />
    <Typography variant="h3">Login Page</Typography>
    <br /><br />
    <TextField variant="outlined" label='username' />
    <br />
    <br />
    <TextField variant="standard" label='password' />
    <br />
    <br />
     <TextField variant="filled" label='confirm password' />
     <br />
     <br />
     <Button variant="text" >Login</Button>&nbsp;
     <Button variant="contained" color="success">Login</Button>&nbsp;&nbsp;
     <Button variant="standard" >Login</Button>

    

    </div>
  )
}

export default First
