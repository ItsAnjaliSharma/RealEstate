import React from 'react'
import './Header.css'

const Header = () => {
  return (
     <section className='h-wrapper '>
       <div className='flexCenter paddings h-container'>
       <img src='./logo.png' alt='logo' width={100} />


       <div className='flexCenter h-menu'>
        <a href='#'>Home</a>
        <a href='#'>Properties</a>
        <a href='#'>About Us</a>        
        <a href='#'>Our Values</a> 
        <button className='button'>    
        <a href='#'>Contact Us</a></button>
       </div>
       </div>
     </section>

  )
}

export default Header
