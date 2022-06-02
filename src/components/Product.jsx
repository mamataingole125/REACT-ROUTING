import React from 'react'
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom'

const Product = () => {

    const {id}=useParams();
    const [product,setProduct]=React.useState({})

useEffect(()=>{
    if(id){
    fetch(`http://localhost:2000/Products/${id}`)
    .then((r)=>r.json())
    .then((d)=>setProduct(d))
    }
   
},[id])

  return (
   
    <div>
     
    <h3>Product id:{product.id}</h3>
    <h3>{product.name}</h3>
    <h3>{product.price}</h3>
    </div>
  )
}

export default Product