import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
const Navbar = () => {





  return (
    <div className={styles.Nav}>Navbar

        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
    </div>
  )
}

export default Navbar
