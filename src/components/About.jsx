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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2000px;
    div {
      display: flex;
      justify-content: center;
      height: 600px;
      width: 100%;
      article {
        display: flex;
        margin-left: calc(-4% / 2 );
        margin-right: calc(-4% / 2 );
        max-width: 1200px;
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
    @media (max-width: 1254px) {
      height: 3200px;
      div {
        height: 1000px;
        article {
          flex-direction: column-reverse;
          align-items: center;
          img {
            order: 1;
            margin-top: 80px;
            height: 100%;
            max-width: 100%;
          }
          div {
            height: 80%;
            width: 770px;
            text-align: left;
          }
        }
      }
    }
    @media (max-width: 836px) {
      height: 2950px;
      div {
        align-items: flex-end;
        height: 950px;
        article {
          img {
            height: auto;
            margin-top: 0px;
            width: 85%;
          }
          div {
            justify-content: flex-start;
            align-items: flex-start;
            height: 85%;
            width: 85%;
            h6 {
              margin-top: 20px;
            }
            h3 {
              font-size: calc(3vw + 24px);
            }
          }
        }
      }
    }
`;

const DivFix = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  width: 100%;
  @media (max-width: 1254px) {
    height: "1010px"
  }
`;

const ArticleLeft = styled.article`
  justify-content: flex-start;
  div {
    margin-left: 210px;
  }
  @media (max-width: 1254px) {
    div {
      margin-left: 0px;
    }
  }
`;

const ArticleRight = styled.article`
  justify-content: flex-end;
  div {
    margin-right: 150px;
  }
  @media (max-width: 1254px) {
    justify-content: center;
    div {
      align-items: flex-start;
      margin-right: 0px;
    }
  }
`;

const ServiceBox2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
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
  @media (max-width: 1852px) {
    article {
      width: 900px;
      div {
        font-size: 29px;
      }
    }
  }
  @media (max-width: 940px) {
    article {
      justify-content: center;
      width: 800px;
      div {
        margin: 0px;
      }
    }
  }
  @media (max-width: 940px) {
    height: 900px;
    article {
      flex-direction: column;
      width: 75%;
    }
  }
  @media (max-width: 532px) {
    article {
      justify-content: center;
      width: 800px;
      img {
        width: 85%;
      }
      div {
        width: 85%;
        p {
          font-size: calc(.2vw + 24px);
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
    width: 1200px;
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
  @media (max-width: 1254px) {
      article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 80%;
        width: 80%;
        div {
          margin-top: 50px;
        }
        span {
          flex-direction: column;
          p {
            margin-top: 50px;
            width: 500px;
          }
        }
      }
    }
    @media (max-width: 1063px) {
      height: calc(1000px - 5vw);
    }
    @media (max-width: 596px) {
      height: calc(2200px - 200vw);
      article {
        h3 {
          font-size: calc(28px + 5vw);
        }
        span {
          p {
            width: 100%;
          }
        }
      }
    }
`;

export default function About() {
  return (
    <>
      <ServicesBox>
        <div>
          <ArticleLeft>
            <img src={ServiceImg1} alt="" />
            <div>
              <h6><span></span>HR On-Call</h6>
              <h3>Human Resource Consulting</h3>
              <p>The cost effective way for you to quickly get answers to your most pressing HR questions and get the help you need whenever a complex employee situation arises</p>
              <Button type="primary" text="Get A Consultation"></Button>
            </div>
          </ArticleLeft>
        </div>
        <div>
          <ArticleRight>
            <div>
              <h6><span></span>HR Management Training</h6>
              <h3>Training Programs</h3>
              <p>HR training from basic, entry-level HR programs to learn the “do’s and don’ts” of regulatory compliance to strategic leadership and HR training for senior executives</p>
              <Button type="primary" text="Get A Consultation"></Button>
            </div>
            <img src={ServiceImg2} alt="" />
          </ArticleRight>
        </div>
        <DivFix>
          <ArticleLeft>
            <img src={ServiceImg3} alt="" />
            <div>
              <h6><span></span>Internal Investigations</h6>
              <h3>Conduct Internal Investigations</h3>
              <p>Guiding HR and internal investigators through the investigative process, from complaint intake of an employee relations issue, to interviewing witnesses and gathering evidence, to preparing a final investigation report that will hold up in court</p>
              <Button type="primary" text="Get A Consultation"></Button>
            </div>
          </ArticleLeft>
        </DivFix>
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
