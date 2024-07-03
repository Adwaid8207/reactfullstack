import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar,Box, Button, Toolbar, Typography} from '@mui/material'
const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Apps
          </Typography>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/'}>Home</Link> </Button>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/l'}>Login</Link> </Button>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/r'}>Registration</Link> </Button>
          <Button ><Link style={{textDecoration:'none',color:'white'}} to ={'/t'}>Table</Link> </Button>
          <Button ><Link style={{textDecoration:'none',color:'white'}} to ={'/c'}>Counter</Link> </Button>
          <Button ><Link style={{textDecoration:'none',color:'white'}} to ={'/d'}>Three</Link> </Button>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/f'}>Formbasics</Link> </Button>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/a'}>ApiGet</Link> </Button>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/p'}>Api</Link> </Button>
          <Button><Link style={{textDecoration:'none',color:'white'}} to ={'/gc'}>GridCard</Link> </Button>







        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
