import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import About from '../components/About'

import office from '../assets/office.jpg'

const HeroBox = styled.section`
  height: 100vh;
  width: 100%;
  color: black;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: #d6d5c9;
    img {
      position: absolute;
      width: 100%;
      height: 100vh;
      filter: brightness(40%);
      z-index: -1;
    }
    h2 {
      font-size: 4em;
      font-weight: 500;
      letter-spacing: 6px;
    }
    h6 {
      margin: 40px;
      font-size: 1.5em;
      font-weight: 600;
    }
    button {
      margin: 20px;
      width: 230px;
      height: 55px;
      font-size: .9em;
      font-weight: 600;
      letter-spacing: 1px;
      border: none;
      border-radius: 5px;
      color: #eef0e4;
      background-color: #da4a1f;
    }
  }
`;

export default function Hero() {
  return (
    <>
      <HeroBox>
        <div>
          <img src={office} />
          <h2>Building Experiences Worth Repeating</h2>
          <h6>Your nationwide full-service, general contracting company for fast-track commercial construction.</h6>
          <motion.button whileHover={{ backgroundColor: "#0e0000"}} >CONTACT US</motion.button>
        </div>
      </HeroBox>
      <About />
    </>
  )
}
