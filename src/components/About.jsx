import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import FormSection from './FormSection'

import ServiceImg1 from '../assets/ServiceImg1.jpg'
import ServiceImg2 from '../assets/ServiceImg2.jpg'
import ServiceImg3 from '../assets/ServiceImg3.jpg'
import Martha from '../assets/martha.jpg'

const ServicesBox = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 137vh;
    div {
      display: flex;
      justify-content: center;
      height: 43vh;
      width: 100%;
      article {
        display: flex;
        margin-left: calc(-4% / 2 );
        margin-right: calc(-4% / 2 );
        max-width: 52%;
        img {
          margin-top: 95px;
          height: 69%;
          max-width: 47%;
          border-radius: 10px;
          object-fit: fill;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 36%;
          height: 100%;
          h6 {
            font-size: 1.2em;
            font-weight: 600;
            span {
              height: 20px;
              width: 20px;
              background-color: blue;
              border-radius: 50%;
            }
          }
          h3 {
            margin-top: 20px;
            font-size: 3.2em;
            font-weight: 600;
            letter-spacing: 1px;
          }
          p {
            margin-top: 35px;
            margin-bottom: 35px;
            max-width: 90%;
            font-size: 1.5em;
          }
        }
      }
    }
`;

const ServiceBox2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-color: #f7f7f7;
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    img {
      margin: 60px;
      height: 400px;
      width: 400px;
      border-radius: 10px;
      object-fit: cover;
    }
    div {
      margin-left: 130px;
      font-size: 2em;
      p {
        margin-bottom: 30px;
        font-size: 1em;
        font-weight: 600;
      }
      b {
        font-size: .65em;
        font-weight: 400;
        p {
          margin-top: 7px;
          font-size: .65em;
          font-weight: 400;
        }
      }
    }
  }
`;

const ServiceBox3 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  article {
    display: grid;
    grid-template-columns: 53% 47%;
    grid-template-rows: 1fr 55px 1fr;
    width: 51%;
    height: 60%;
    h3 {
      grid-area: 1/1/2/2;
      font-size: 3.4em;
      font-weight: 600;
      line-height: 60px;
    }
    div {
      grid-area: 1/2/2/3;
      display: flex;
      justify-content: end;
      align-items: center;
    }
    span {
      grid-area: 3/1/4/3;
      display: flex;
      justify-content: space-between;
      p {
        width: 30%;
        font-size: 1.9em;
        font-weight: 600;
      }
    }
  }
`;

export default function About() {
  return (
    <>
      <ServicesBox>
        <div>
          <article style={{justifyContent: "flex-start"}}>
            <img src={ServiceImg1} alt="" />
            <div style={{marginLeft: '210px'}}>
              <h6><span></span>HR On-Call</h6>
              <h3>Human Resource Consulting</h3>
              <p>The cost effective way for you to quickly get answers to your most pressing HR questions and get the help you need whenever a complex employee situation arises</p>
              <Button type="primary" text="Get A Consultation"></Button>
            </div>
          </article>
        </div>
        <div>
          <article style={{justifyContent: "flex-end"}}>
            <div style={{marginRight: '150px'}}>
              <h6><span></span>HR Management Training</h6>
              <h3>Training Programs</h3>
              <p>HR training from basic, entry-level HR programs to learn the “do’s and don’ts” of regulatory compliance to strategic leadership and HR training for senior executives</p>
              <Button type="primary" text="Get A Consultation"></Button>
            </div>
            <img src={ServiceImg2} alt="" />
          </article>
        </div>
        <div>
          <article style={{justifyContent: "flex-start"}}>
            <img src={ServiceImg3} alt="" />
            <div style={{marginLeft: '210px'}}>
              <h6><span></span>Internal Investigations</h6>
              <h3>Conduct Internal Investigations</h3>
              <p>Guiding HR and internal investigators through the investigative process, from complaint intake of an employee relations issue, to interviewing witnesses and gathering evidence, to preparing a final investigation report that will hold up in court</p>
              <Button type="primary" text="Get A Consultation"></Button>
            </div>
          </article>
        </div>
      </ServicesBox>
      <ServiceBox2>
        <article>
          <img src={Martha} alt="Martha Fowler" />
          <div>
            <p>“We assist people and organizations to achieve measurable results through targeted, results-focused training and performance solutions.”</p>
            <b>Martha Fowler<p>President & CEO</p></b>
          </div>
        </article>
      </ServiceBox2>
      <ServiceBox3>
        <article>
          <h3>HR Resource: Insider Advice on How to Conduct HR Investigations</h3>
          <div>
            <Button type="primary" text="Explore Resource" />
          </div>
          <span>
            <p>How to Select HR and Employee Relations Investigators</p>
            <p>HR Investigations: A Case for Case Management</p>
            <p>Conducting Employee Relations Investigations: 2 More Strategies for Creating Consistent Internal Investigation Processes</p>
          </span>
        </article>
      </ServiceBox3>
      <FormSection />
    </>
  )
}
