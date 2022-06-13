import React from 'react'
import styled from 'styled-components'

import martha from '../assets/martha.jpg'
import janina from '../assets/janina.jpg'
import richard from '../assets/richard.jpg'

const TeamBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 300vh;
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 90px;
      width: 100%;
      height: 260px;
      font-size: 5em;
      color: white;
      background-color: #4e4e4e;
      text-shadow: 2px 2px 10px #4e4e4e;
      box-shadow: 5px 5px 10px #c5c5c5;
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
      span {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 10% 10% 10% 60% 10%;
        margin: 100px;
        width: 1550px;
        height: 1200px;
        div {
          grid-area: 2/2/5/5;
          width: 1100px;
          height: 1100px;
          background-color: #e9e9e9;
          z-index: -1;
        }
        h3 {
          grid-area: 1/1/2/4;
          margin-top: 40px;
          margin-left: 80px;
          text-align: center;
          font-size: 6.5em;
          color: #e3c446;
          b {
            position: absolute;
            margin-top: 70px;
            margin-left: -120px;
            font-size: .7em;
            color: #ffffff;
            z-index: 0;
          }
        }
        h4 {
          grid-area: 2/2/3/4;
          display: flex;
          align-items: end;
          margin-left: 20px;
          height: 90px;
          font-weight: 500;
          text-transform: uppercase;
          color: #e3c446;
        }
        p {
          grid-area: 2/2/4/5;
          margin: 135px;
          width: 100%;
        }
        img {
          grid-area: 3/1/6/3;
          margin: 150px;
          width: 700px;
          height: 900px;
          object-fit: cover;
          border: solid 15px white;
          box-shadow: -1px 1px 5px #000000;
        }
        ul {
          grid-area: 4/3/5/5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 200px;
          padding-left: 240px;
          width: 100%;
          height: 250px;
          background-color: #4a90e2;
          z-index: -1;
          li {
            margin: 10px;
            font-size: 1.2em;
          }
        }
      }
    }
`;

export default function Team() {
  return (
    <TeamBox>
      <h2>Our Team</h2>
      <article>
        <span>
          <div />
          <img src={janina} alt="Janina Fowler" />
          <h3>Janina <b>Fowler</b></h3>
          <h4>Director of Opperations</h4>
          <p>test As a contrast to more elaborate designs we’ll see later in this list, 
            Philly Reps is another agency that takes a cleaner, 
            more minimal approach to its team page. Members are presented 
            in grayscale images that take up the majority of screen space 
            for a nice consistent look and feel. test</p> 
          <ul>
            <li>General Opperations</li>
            <li>Seminar Orginization</li>
            <li>Customer Service</li>  
          </ul>       
        </span>
        <span>
          <div />
          <img src={martha} alt="Martha" />
          <h3>Martha <b>Fowler</b></h3>
          <h4>CEO</h4>
          <p>test As a contrast to more elaborate designs we’ll see later in this list, 
            Philly Reps is another agency that takes a cleaner, 
            more minimal approach to its team page. Members are presented 
            in grayscale images that take up the majority of screen space 
            for a nice consistent look and feel. test</p>
          <ul>
            <li>General Opperations</li>
            <li>Seminar Orginization</li>
            <li>Customer Service</li>  
          </ul>  
        </span>
        <span>
          <div />
          <img src={richard} alt="Richard Schembri" />
          <h3>Richard <b>Schembri</b></h3>
          <h4>Technical Manager</h4>
          <p>test As a contrast to more elaborate designs we’ll see later in this list, 
            Philly Reps is another agency that takes a cleaner, 
            more minimal approach to its team page. Members are presented 
            in grayscale images that take up the majority of screen space 
            for a nice consistent look and feel. test</p>
          <ul>
            <li>General Opperations</li>
            <li>Seminar Orginization</li>
            <li>Customer Service</li>  
          </ul>  
        </span>
      </article>
    </TeamBox>
  )
}
