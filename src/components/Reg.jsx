import React from 'react'
import {Button, TextField, Typography } from '@mui/material'

const Reg = (props) => {
  return (
    <div>
      <Typography textAlign='center'variant='h4'>Forms</Typography><br /><br />
          <TextField variant="filled" label='Name' value={props.data.Name} /><br /><br />
          <TextField variant="filled" label='Age' value={props.data.Age} /><br /><br />
          <TextField variant="filled" label='Place' value={props.data.place}/><br /><br />
          <TextField variant="outlined" label='Fathers Name' /><br /><br />
          <TextField variant="outlined" label='Mothers Name' /><br /><br />
          <TextField variant="outlined" label='Password' /><br /><br />
          <TextField variant="outlined" label='Confirm Password' /><br /><br />
          <TextField variant="outlined" label='username' /><br /><br />
          <Button variant="text" color="success">Submit</Button>








    </div>
  )
}

export default Reg
