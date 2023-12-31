import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <section id="#hero-section" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-content">
        {/* left side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">

            <motion.h1  initial={{y:"2rem", opacity: 0 }} animate={{y: "1rem", opacity:1}} transition={ {duration:2 , type:"spring"}}>
              Turning Your <br />
              Dreams Into
              <br />
              An Address
            </motion.h1>
          </div>

          <div className="flexColStart hero-desc">
            <span className="secondaryText">
           <br/>
              Home is a shelter from storms — all sorts of storms
            </span>
            <span className="secondaryText">
              Every day is a journey, and the journey itself is home
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/*right side*/}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{ x:"7rem", opacity:0}}
          animate={{ x:0, opacity:1}} transition={{
            duration:2,
            type:"spring"
          }}
          className="image-container">
          
            <img src="./Hero.png" alt="hero-image" className="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
