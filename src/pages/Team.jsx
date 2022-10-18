import React from 'react'
import styled from 'styled-components'

import FormSection from '../components/FormSection'

import martha from '../assets/martha.jpg'
import janina from '../assets/janina.jpg'
import richard from '../assets/richard.jpg'
import conversation from '../assets/conversation.jpg'

const Hero = styled.div`
    margin: 65px;
    width: 100%;
    height: 400px;
    &::after {
      content: "";
      position: absolute;
      top: 5%; left: 0;
      width: 100%; 
      height: 400px;
      background-image: url(${conversation});
      background-size: cover;
      background-position: 50% 50%;
      filter: brightness(45%);
;
      z-index: -1;
    }
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 400px;
      font-size: 3.5em;
      color: white;
      text-shadow: 2px 2px 10px #4e4e4e;
    }
`;

const TeamBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4600px;
    article {
      display: flex;
      flex-direction: column;
      justify-content: end;
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
          background: rgba( 74, 144, 226, 0.55 );
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          backdrop-filter: blur( 16px );
          -webkit-backdrop-filter: blur( 16px );
          border-radius: 10px;
          border: 1px solid rgba( 255, 255, 255, 0.18 );
          z-index: -1;
          li {
            margin: 10px;
            font-size: 1.2em;
          }
        }
      }
    }
    @media (max-width: 1874px) {
      article {
        span {
          ul {
            width: 30vw;
          }
        }
      }
    }
    @media (max-width: 1324px) {
      height: 5000px;
      article {
        span {
          margin-bottom: 230px;
          div {
            width: 960px;
          }
          p {
            grid-area: 2/2/4/4;
            width: 800px;
          }
          img {
            grid-area: 4/2/6/4;
          }
          ul {
            grid-area: 3/2/4/3;
            margin: 135px;
            margin-top: 110px;
            padding: 10px;
            width: 930px;
            height: 120px;
            font-size: 12px;
          }
        }
      }
    }
    @media (max-width: 1024px) {
      article {
        span {
          width: calc(100px + 150vw);
          div {
            width: calc(60px + 90vw);
          }
          p {
            width: calc(250px + 50vw);
          }
          img {
            width: 100%;
          }
        }
      }
    }
    @media (max-width: 806px) {
      article {
        span {
          h3 {
            width: 400px;
            margin-left: 34vw;
            b {
              margin-left: -190px;
            }
          }
          p {
            margin: 20px;
            margin-top: 130px;
          }
          img {
            grid-area: 4/2/6/4;
            margin: 20px;
            margin-top: 150px;
            width: calc(10px + 80vw);
          }
          ul {
            margin-left: 20px;
          }
        }
      }
    }
    @media (max-width: 544px) {
      height: 3400px;
      article {
        span {
          height: 660px;
          h3 {
            margin-top: 0;
            margin-left: calc(6px + 20vw);
            font-size: 4.5em;
            b {
              margin-left: -190px;
            }
          }
          div {
           height: 800px;
          }
          p {
            margin-top: 110px;
            width: calc(145px + 50vw)
          }
          img {
            margin-top: 310px;
            height: 400px;
          }
          ul {
            margin-top: 220px;
          }
        }
      }
    }
`;

export default function Team() {
  return (
    <>
      <TeamBox>
        <Hero>
          <h2>Our Team</h2>
        </Hero>  
        <article>
          <span>
            <div />
            <img src={martha} alt="Martha" />
            <h3>Martha <b>Fowler</b></h3>
            <h4>President & CEO</h4>
            <p>Manages and directs the company toward its primary goals and objectives. 
              Oversees employment decisions at the executive level of the company. 
              Leads a team of executives to consider major decisions including acquisitions, 
              mergers, joint ventures, or large-scale expansion.</p>
            <ul>
              <li>General Opperations</li>
              <li>Seminar Orginization</li>
              <li>Customer Service</li>  
            </ul>  
          </span>
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
      <FormSection />
    </>
  )
}
