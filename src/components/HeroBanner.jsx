import React from 'react'
import { Container,Row, Col,Image } from 'react-bootstrap'
import banner from '../assets/pic1.jpg'
import './styles/HeroBanner.css'
import {motion} from 'framer-motion'

const HeroBanner = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2, type: 'tween' }}
    >
    
        <header
        className="banner container-fluid  hero__cont"
        style={{
            backgroundSize : "cover",
            backgroundPosition:"center center",
            backgroundImage : `url("${banner}")`,
        }}
        >
        

        <div className="banner__contents">
            <h1 className='banner__title'>Computer Engineering</h1>
            <h1 className="banner__description">142,765 Computer Engineers follow this</h1>
        </div>
        <div className="banner--fadeBottom container-fluid  hero__cont"/>

        </header>
      
      </motion.div>
    
  )
}

export default HeroBanner