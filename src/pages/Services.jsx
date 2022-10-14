import React from 'react'
import styled from 'styled-components'

import FormSection from '../components/FormSection';

import conversation from '../assets/conversation.jpg'

const ServiceBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(3700px - 30vw);
  @media (max-width: 1772px) {
    height: calc(3300px - 18vw)
  }
  @media (max-width: 694px) {
    height: calc(5200px - 230vw)
  }
`;

const Hero = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin-top: 70px;
  width: 100%;
  h2 {
    grid-area: 1/1/2/2;
    font-size: 3.5em;
    color: white;
    z-index: 1;
  }
  img {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: 50% 50%;
    filter: brightness(45%);
    z-index: -1;
  }
`;

const Row1 = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 500px;
    h3 {
      margin-top: -20px;
      margin-bottom: 20px;
      font-size: 2.8em;
      b {
        font-weight: 700;
        color: #e3c446;
      }
    }
    p {
      width: 40%;
      font-size: 1.2em;
      line-height: 24px;
    }
  @media (max-width: 1376px) {
    p {
      width: 560px;
    }
  }
  @media (max-width: 694px) {
    height: calc(1000px - 60vw);
    h3 {
      margin-left: 30px;
      margin-right: 30px;
    }
    p {
      width: 80%;
    }
  }
`;

const Row2 = styled.article`
  display: flex;
  width: 100%;
  height: 600px;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color:#ece8e8;
    h3 {
      margin-top: -25px;
      margin-bottom: 25px;
      width: 50%;
      font-size: 2.8em;
      font-weight: 500;
      color: #a5a5a5;
    }
    p{
      width: 50%;
      font-size: 1.2em;
      line-height: 24px;
    }
  }
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1376px) {
    span {
      h3 {
        width: 350px;
      }
      p {
        width: 350px;
      }
    }
  }
  @media (max-width: 1024px) {
    span {
      text-align: center;
      h3 {
        width: 80%;
      }
      p {
        width: 80%;
      }
    }
  }
  @media (max-width: 694px) {
    flex-direction: column;
    height: 1000px;
    span {
      order: 2;
      width: 100%;
      height: calc(2000px - 200vw);
    }
    img {
      order: 1;
      width: 100%;
    }
  }
`;

const Row3 = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 500px;
  background-color: #4a90e2;
  color: #ffffff;
    h3 {
      margin-top: -20px;
      margin-bottom: 20px;
      font-size: 2.5em;
      b {
        font-weight: 700;
        color: #e3c446;
      }
    }
    p {
      width: 40%;
      font-size: 1.2em;
      line-height: 24px;
    }
  @media (max-width: 1376px) {
    p {
      width: 560px;
    }
  }
  @media (max-width: 694px) {
    height: calc(1000px - 60vw);
    h3 {
      margin-left: 30px;
      margin-right: 30px;
    }
    p {
      width: 80%;
    }
  }
`;

const Row4 = styled.article`
  display: flex;
  width: 100%;
  height: 600px;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color:#ece8e8;
    h3 {
      margin-top: -20px;
      margin-bottom: 20px;
      width: 50%;
      font-size: 2.7em;
      font-weight: 500;
      color: #a5a5a5;
    }
    p{
      width: 50%;
      font-size: 1.2em;
      line-height: 24px;
    }
  }
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1376px) {
    span {
      h3 {
        width: 350px;
      }
      p {
        width: 350px;
      }
    }
  }
  @media (max-width: 1024px) {
    span {
      h3 {
        width: 80%;
      }
      p {
        width: 80%;
      }
    }
  }
  @media (max-width: 694px) {
    flex-direction: column;
    height: 1000px;
    span {
      order: 2;
      width: 100%;
      height: calc(2000px - 200vw);
      text-align: center;
    }
    img {
      order: 1;
      width: 100%;
    }
  }
`;

const Row5 = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 500px; 
    h3 {
      margin-top: -20px;
      margin-bottom: 20px;
      font-size: 2.7em;
      b {
        font-weight: 700;
        color: #e3c446;
      }
    }
    p {
      width: 40%;
      font-size: 1.2em;
      line-height: 24px;
    }
  @media (max-width: 1376px) {
    p {
      width: 560px;
    }
  }
  @media (max-width: 694px) {
    height: calc(700px - 20vw);
    h3 {
      margin-left: 30px;
      margin-right: 30px;
    }
    p {
      width: 80%;
    }
  }
`;

export default function Services() {
  return (
    <>
      <ServiceBox>
        <Hero>
          <h2>Services</h2>
          <img src={conversation} alt="hero img" />
        </Hero>
        <Row1>    
            <h3><b>What</b> do we do?</h3>
            <p>Since our founding in 2001, every decision has been guided by our mission to help 
              individuals create the life they want to live, while protecting their loved ones 
              and planning their financial legacy. Offering access to a diverse portfolio of 
              insurance, retirement, savings, and wealth-building strategies, our licensed agents 
              across North America help guide individuals from where they are to where they want 
              to be.
            </p>
        </Row1>
        <Row2>
          <span>
            <h3>Skilled Personnel</h3>
            <p>Much of the ultimate success of a project stems from the productive planning 
              and coordination that occurs between the general contractor, key subcontractors, 
              and vendors during pre-construction. With our vast shared experience, 
              HRIS Team’s staff and trusted subcontractors make invaluable contributions 
              to the owner and design teams both before and throughout the project.
            </p>
          </span>
          <img src={conversation} alt="Img" />
        </Row2>
        <Row3>
            <h3>Commitment to quality</h3>
            <p>HRIS Team’s team members care deeply about each project and each client. 
              From our leadership team to our project managers, skilled staff, and valued 
              subcontractors, we strive to be flexible, resourceful, and efficient from start 
              to finish. Once the project is complete, we remain accessible and ready to react 
              quickly to service and maintenance requests. We value the relationships with our 
              clients, which is why a majority of our new work comes from existing clients year 
              after year.
            </p> 
        </Row3>
        <Row4>
          <img src={conversation} alt="Img2" />
          <span>
            <h3>Value engineering & Cost Controls</h3>
            <p>HRIS Team delivers cost-effective and value-engineered design solutions if 
              unforeseen budgetary conditions are encountered.  Clients often rely heavily on our 
              thorough financial documentation and status reports to supplement their own internal 
              or external reporting requirements.
            </p>
          </span>
        </Row4>
        <Row5>
            <h3>Minimize disturbance</h3>
            <p>HRIS Team is resourceful and adept in creating a schedule that diminishes 
              disturbance to our clients, their operations, and their customers.  In doing so, 
              our clients are able to minimize possible revenue loss from renovation.  
              HRIS Team routinely offers accelerated schedule options as well.
            </p>
        </Row5>
      </ServiceBox>
      <FormSection />
    </>
  )
};
