import React, { useState } from 'react'
import {TextField, Typography,Button } from '@mui/material'

const Statebasic = () => {
    //useState
    var [name,setName] =useState('Adwaid');
    var [data,setData] = useState()
    const inputHandler = (e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const changeName = ()=>{
        console.log("btn clicked");
        setData(name)
    }
  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
      <Typography varient='h3'>Hello {data}</Typography>
      <br />
      <TextField varient='outlined' onChange={inputHandler}/>
      <br />
      <Button varient='contained' onClick={changeName}>Change</Button>

    </div>
  )
}

export default Statebasic
