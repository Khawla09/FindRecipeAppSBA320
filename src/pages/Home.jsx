import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Dessert from '../components/Dessert'
import { motion } from 'framer-motion'
import styled from 'styled-components';

// Define breakpoints


// Styled component with media queries



function Home() {
  return (
    // it is just a div containing animation staff
    <motion.div animate ={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition= {{duration: 1}}>


        <Popular />
         <Veggie />
         <Dessert />
    </motion.div>
  )
}

export default Home