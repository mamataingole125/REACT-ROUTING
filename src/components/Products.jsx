import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
const Products = () => {
const [products,setProducts]=useState([])
const navigate=useNavigate();

const handleclick=(id)=>{
  
  navigate(`/Products/${id}`)
 
}


useEffect(()=>{

    const  main=() =>{
        fetch("http://localhost:2000/Products")
        .then((r)=>r.json())
        .then((d)=>setProducts(d))
        // console.log(products)
    }
    main()
},[])

  return (
    <div>
   <h1>product:{""}</h1>

   {products.map((prod)=>(
        <div key={prod.id} className={styles.data}>
      <Link to={`/Products/${prod.id}`}>{prod.name}</Link>
      <button onClick={()=>handleclick(prod.id)}>More Details</button>
        </div>
    ))}
    <div className={styles.each}>
    <Outlet/>
    </div>
    </div>
  )
}

export default Products