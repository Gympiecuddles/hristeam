import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import About from '../components/About'
import Button from '../components/Button'
import MiniForm from '../components/MiniForm'

import office from '../assets/office.jpg'

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



export default function Hero() {
  return (
    <>
      <HeroBox>
        <ContentBox>
          <TextBox>
            <h2>Navigate the road to HR Compliance</h2>
            <h6>Providing leadership & employee training programs and HR investigations training.</h6>
            <Button type="white" text="Our Services ➤" />
          </TextBox>
          <MiniForm />
        </ContentBox>  
        <img src={office} />
      </HeroBox>
      <About />
    </>
  )
}
