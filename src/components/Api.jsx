import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    var [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>{
            console.log(res);
            setData(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })

    },[])
  return (
    <div>
      
      
    </div>
  )
}

export default Api
