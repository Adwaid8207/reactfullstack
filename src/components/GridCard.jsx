import {Card,CardMedia,CardContent ,Grid,Button,Typography,CardActions } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GridCard = () => {
    var [pro,setPro]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>{
            console.log(res);
            setPro(res.data)

        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div>
      <Grid container spacing={2}>
        {pro.map((val,i)=>{
            return(
                <Grid item xs={12} md={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
                </Grid>
                
            )
        })}

      </Grid>
    </div>
  )
}

export default GridCard
