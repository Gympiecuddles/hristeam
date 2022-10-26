import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import About from '../components/About'
import MiniForm from '../components/MiniForm'

import Home1 from '../assets/Home1.jpg'

const HeroBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 880px;
  width: 100%;
  img {
      position: absolute;
      width: 100%;
      height: 880px;
      filter: brightness(57%);
      object-fit: cover;
      z-index: -1;
    }
    @media (max-width: 1024px) {
      height: 1190px;
      img {
        height: 1190px;
      }
    }
`;

const ContentBox = styled.article`
  display: flex;
  align-items: flex-start;
  height: 660px;
  @media (max-width: 1396px) {
    justify-content: center;
    width: 86%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 990px;
  }
  @media (max-width: 640px) {
    height: 1080px;
    width: 100%;
  }
  @media (max-width: 420px) {
      height: 980px;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 690px;
    color: #ffffff;
    h2 {
      font-size: 4.3em;
      font-weight: 600;
      letter-spacing: .5px;
      line-height: 75px;
    }
    h6 {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 95%;
      font-size: 1.8em;
      font-weight: 500;
    }
    @media (max-width: 1024px) {
      align-items: center;
      margin-bottom: 50px;
      width: 90%;
      text-align: center;
      h2 {
        font-size: calc(4vw + 25px);
      }
      h6 {
        margin-top: 25px;
        width: 100%;
      }
    }
    @media (max-width: 640px) {
      width: 93%;
      h2 {
        line-height: 55px;
      }
    }
    @media (max-width: 420px) {
      h2 {
        width: 80%;
        font-size: calc(4vw + 28px);
        letter-spacing: -.3px;
        line-height: 48px;
      }
    }
`;

const MotionButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 50px;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 8px;
    color: #000000;
    background-color: #fafafa; 
`;

const ServiceButton = motion(MotionButton);

export default function Hero() {
  return (
    <>
      <HeroBox>
        <ContentBox>
          <TextBox>
            <h2>Navigate the road to HR Compliance</h2>
            <h6>Providing leadership & employee training programs and HR investigations training.</h6>
            <ServiceButton to="/services" whileHover={{ backgroundColor: "#0d9caf", color: "#ffffff"}}>Our Services ➤</ServiceButton>
          </TextBox>
          <MiniForm />
        </ContentBox>  
        <img src={Home1} />
      </HeroBox>
      <About />
    </>
  )
}
