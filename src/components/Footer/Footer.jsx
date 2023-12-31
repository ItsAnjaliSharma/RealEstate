import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-Container'>
            {/*left side */}
           <div className='flexColStart f-left'>
               <img src='./logo.png' alt='logo' width={120}/>
                 <span className='secondaryText'>
                    Our Vision is to be the most preferred <br/>
                    and trusted company in the world of real estate.
                 </span>
           </div>
           {/*right side */}

           <div className='flexColStart f-right'>
                 <span className='primaryText'>Information</span>
                 <span className='secondaryText'>Panchsheel Park, New Delhi, Delhi</span>

                <div className='flexCenter f-menu'>
                   <span>Property</span>
                   <span>Services</span>
                   <span>Product</span>
                   <span>About Us</span>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Footer
