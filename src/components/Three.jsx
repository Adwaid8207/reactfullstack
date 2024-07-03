import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom';

const Three = () => {
    var [name,setName] = useState("Click Any")
    const inputHandler1 = (e) => {
        setName("Welcome to Home");
    }
    const inputHandler2 = (e) => {
        setName("Welcome to Gallery");
    }
    const inputHandler3 = (e) => {
        setName("Welcome to Contact");
    }
  return (
    <div style={{textAlign: "center", marginTop: "15%"}}>
        <h1>{name}</h1>
        <br />
      <Button variant="contained" color="secondary" onClick={inputHandler1}>Home</Button>
      <Button variant="contained" color="success" onClick={inputHandler2}><Link to={"https://imgs.search.brave.com/kVy8AzxFryHVVt-R7Zc5uL_vJaqcB2BvQ31vPPNSm6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHNhcHAtY2hp/Y2tlbi12MC0zOTl1/azFtcXIwZGMxLmpw/ZWc_d2lkdGg9NjQw/JmNyb3A9c21hcnQm/YXV0bz13ZWJwJnM9/YjFlMWMxNzk5YjMy/NmVlMjc1MTk5ZDZm/ZmFhZTBiNDVmYWQw/YzlmMQ"} style={{textDecoration: "none", color: "white"}}>Gallery</Link></Button>
      <Button variant="contained" color="error" onClick={inputHandler3}>Contact</Button>
    </div>
  )
}

export default Three
