import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import About from '../components/About'
import Button from '../components/Button'
import Newsletter from '../components/Newsletter'
import MiniForm from '../components/MiniForm'

import office from '../assets/office.jpg'

const HeroBox = styled.section`
  display: flex;
  justify-content: center;
  height: 70vh;
  width: 100%;
  img {
      position: absolute;
      width: 100%;
      height: 65vh;
      filter: brightness(57%);
      z-index: -1;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 27%;
    height: 60vh;
    color: #ffffff;
    h2 {
      font-size: 4.3em;
      font-weight: 600;
      letter-spacing: 2px;
      line-height: 75px;
    }
    h6 {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 95%;
      font-size: 1.8em;
      font-weight: 500;
    }
`;



export default function Hero() {
  return (
    <>
      <HeroBox>
        <TextBox>
          <h2>Navigate the road to HR Compliance</h2>
          <h6>Providing leadership & employee training programs and HR investigations training.</h6>
          <Button type="white" text="Our Services ➤" />
        </TextBox>
        <MiniForm />
        <img src={office} />
      </HeroBox>
      <About />
      <Newsletter />
    </>
  )
}
