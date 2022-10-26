import React from 'react'
import styled from 'styled-components'

import FormSection from '../components/FormSection';

import ServicePage1 from '../assets/ServicePageImg1.jpg'
import ServicePage2 from '../assets/ServicePageImg2.jpg'
import ServicePage3 from '../assets/ServicePageImg3.jpeg'

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
    filter: brightness(55%);
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
          <img src={ServicePage1} alt="hero img" />
        </Hero>
        <Row1>    
            <h3><b>What</b> do we do?</h3>
            <p>Hiring. Onboarding. Managing HR compliance. Whether you've got urgent questions or need ongoing support, with HRIS Team, you can get the HR services you need.
            </p>
        </Row1>
        <Row2>
          <span>
            <h3>HR & Employee Relations Investigations Programs</h3>
            <p>At HRIS Team, we specialize in providing HR and Employee Relations training and HR investigations training workshops.  Our training is very interactive and experiential, as we engage attendees in practical “hands on” skills development in how to properly conduct an investigation into allegations of harassment, discrimination, retaliation, or other types of employee misconduct.  We have been in business since 2002 and have clients in all industry sectors and of all sizes.  However, one common denominator with the clients we serve is that we get to know our clients’ business before we even step foot in the classroom to begin training employees.
            </p>
          </span>
          <img src={ServicePage2} alt="Img" />
        </Row2>
        <Row3>
            <h3>Employee Relations Issues</h3>
            <p>If you are currently dealing with some employee relations’ issues and just aren’t sure how to fix them, then you’ve come to the right place. For 20+ years we have helped organizations large and small and across all industry sectors navigate the complicated road of Human Resource Management. We are subject-matter experts in federal labor and employment law compliance, employee relations and performance management, and putting in place “people management infrastructure” that provides support for organizational growth while also minimizing organizational risk. 
            </p> 
        </Row3>
        <Row4>
          <img src={ServicePage3} alt="Img2" />
          <span>
            <h3>We Boost Employee Leadership Potential</h3>
            <p>Each one of our training consultants brings their real world experience to the classroom and relates their experiences to course content. Our HRIS programs are concise, practical, experiential and drive changes in leadership behavior–guaranteed.
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
