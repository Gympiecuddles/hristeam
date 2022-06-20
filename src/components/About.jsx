import React from 'react'
import styled from 'styled-components'

import Button from './Button'

import flowers from '../assets/11.png'
import office from '../assets/office.jpg'

const AboutBox = styled.section`
    width: 100%;
    height: 100vh;
`;

const Row1 = styled.article`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40vh;
    p {
      align-self: center;
      width: 500px;
      font-size: 1.5em;
    }
    img {
      margin: 20px;
      width: 530px;
    }
`;

const Row2 = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
    background-color: #e0e0e0;
    h3 {
      margin-top: 25px;
      font-size: 2.2em;
      width: 50%;
    }
    p {
      margin: 20px;
      margin-bottom: 40px;
      font-size: 1.7em;
      width: 50%;
    }
    div {
      display: flex;
      justify-content: center;
      width: 50%;
      height: 600px;
      span {
        display: flex;
        flex-direction: column;
        margin: 20px;
        img {
          width: 400px;
          height: 250px;
        }
        h4 {
          margin-top: 5px;
          margin-bottom: 5px;
          width: 300px;
          font-size: 1.5em;
        }
        p {
          margin: 0;
          width: 300px;
          font-size: 1.3em;
        }
      }
    }
`;

export default function About() {
  return (
    <AboutBox>
      <Row1>
        <p>Since our founding in 2001, every decision has been guided by our mission to help 
            individuals create the life they want to live, while protecting their loved ones 
            and planning their financial legacy. Offering access to a diverse portfolio of 
            insurance, retirement, savings, and wealth-building strategies, our licensed agents 
            across North America help guide individuals from where they are to where they want 
            to be.</p>
        <img src={flowers} alt="" />
      </Row1>
      <Row2>
        <h3>Hear it from our customers</h3>
        <p>More than twenty of the top global advertisers 
          and hundreds of emerging brands and agencies 
          depend on Traackr everyday to make smarter 
          influencer marketing decisions.
        </p>
        <div>
          <span>
            <img src={office} alt="" />
            <h4>Revlon x Wonder Woman 1984</h4>
            <p>Learn how Revlon delivered extraordinary results 
              for its collection with the support of Traackr.
            </p>
          </span>
          <span>
            <img src={office} alt="" />
            <h4>Eau Thermale Avène</h4>
            <p>How skincare brand, Eau Thermale Avène harnessed 
              traditional word-of-mouth marketing in a digital 
              context using an “always-on” influencer strategy.
            </p>
          </span>
          <span>
            <img src={office} alt="" />
            <h4>Traackr x Glossy: State of Influencer Marketing </h4>
            <p>A deep-dive report about how top brands are building 
              more successful, measurable, and integrated influencer 
              marketing programs.
            </p>
          </span>
        </div>
        <Button />
      </Row2>
    </AboutBox>
  )
}
