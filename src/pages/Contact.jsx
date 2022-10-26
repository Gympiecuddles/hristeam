import React from 'react'
import styled from 'styled-components'

const ContactPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 1350px;
    h2 {
      position: absolute;
      top: 425px;
      font-size: 125px;
      letter-spacing: 5px;
      color: #eeeeee;
      z-index: 0;
    }
    h3 {
      margin: 20px;
      width: 1000px;
      font-size: 3em;
      text-align: center;
    }
    h3::after {
      content: "";
      position: absolute;
      top: 28%;
      left: 49%;
      width: 70px;
      height: 2px;
      border-top: 2px solid #e3c446;
      background-color: #e3c446;
    }
    @media (max-width: 1020px) {
      h3 {
        width: 900px;
        font-size: 2.8em;
      }
      h3::after {
        left: 46%;
      }
    }
    @media (max-width: 880px) {
      height: 1550px;
      h3 {
        width: 90vw;
        font-size: calc(25px + 2vw);
      }
    }
    @media (max-width: 838px) {
      h3::after {
        top: 30%;
        left: 45%;
      }
      h2 {
        top: 435px;
      }
    }
    @media (max-width: 624px) {
      height: 1750px;
      h3::after {
        top: 27%;
        left: 44%;
      }
      h2 {
        top: calc(500px - 22vw);
        font-size: 20vw;
      }
    }
    @media (max-width: 425px) {
      h3::after {
        top: 28.5%;
        left: 42%;
      }
      h2 {
        top: calc(500px - 19vw);
        font-size: 20vw;
      }
    }
    @media (max-width: 350px) {
      h3::after {
        top: 30%;
        left: 40%;
      }
      h2 {
        top: calc(500px - 16vw);
        font-size: 20vw;
      }
    }
`;

const ContactBox = styled.article`
    display: flex;
    width: 1200px;
    height: 600px;
    background-color: #ffffff;
    box-shadow: 0 10px 24px 0 #57617a1e;
    z-index: 1;
    div {
      width: 1px;
      height: 100%;
      background-color: #dbdbdb;
    }
    @media (max-width: 1200px) {
      width: 840px;
      height: 600px;
      flex-direction: column;
      div {
        width: 100%;
        height: 10px;
      }
    }
    @media (max-width: 880px) {
      width: 90vw;
      height: 800px;
    }
    @media (max-width: 624px) {
      height: 1100px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    width: 840px;
    span {
      display: flex;
      justify-content: space-evenly;
      margin: 10px;
      margin-left: 25px;
      margin-right: 25px;
      input {
        padding: 5px;
        padding-left: 30px;
        width: 330px;
        height: 40px;
        font-size: 15px;
        border: solid 1px #dbdbdb;
        border-radius: 4px;
      }
      select {
        margin-left: 1px;
        padding: 5px;
        padding-left: 25px;
        width: 368px;
        height: 53px;
        font-size: 15px;
        color: #7e7e7e;
        background-color: #ffffff;
        border: solid 1px #dbdbdb;
        border-radius: 4px;
      }
    }  
    textarea {
      margin: 12px;
      margin-left: 42px;
      margin-right: 42px;
      padding: 30px;
      width: 694px;
      height: 30%;
      font-size: 15px;
      border: solid 1px #dbdbdb;
      border-radius: 4px;
    }
    button {
      margin: 20px;
      margin-left: 42px;
      width: 140px;
      height: 45px;
      font-size: 15px;
      color: #ffffff;
      background-color: #e3c446;
      border: none;
      border-radius: 2px;
    }
    @media (max-width: 1200px) {
      height: 4300px;
      padding-top: 15px;
    }
    @media (max-width: 880px) {
      width: 90%;
      span {
        flex-direction: column;
        margin: 0;
        margin-left: 42px;
        width: calc(90vw - 145px);
        input {
          margin-top: 15px;
          width: calc(90vw - 124px);
        }
        select {
          margin-top: 15px;
          width: 202px;
        }
      }
      textarea {
        width: calc(90vw - 145px);
      }
    }
    @media (max-width: 624px) {
      height: 5000px;
    }
`;

const Info = styled.span`
  display: flex;
  flex-direction: column;
  margin: 50px;
  margin-left: 80px;
  width: 30%;
  height: 100%;
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 700;
  }
  p {
    margin-bottom: 40px;
    font-size: 14px;
  }
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    margin-left: 17px;
    width: 65%;
    height: 8%;
  }
  @media (max-width: 800px) {
    width: 95%;
  }
  @media (max-width: 624px) {
    flex-direction: column;
    height: 250px;
    margin-left: 40px;
  }
`;

export default function Contact() {
  return (
    <ContactPage>
      <h2>Contact</h2>
      <h3>Ready to Start Planning An Experience with Your Team? Get in Touch!</h3>
      <ContactBox>
        <Form>
          <span>
            <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
            <input placeholder="Your Email Address" type="email" tabIndex="2" required />
          </span>
          <span>
            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" required />
            <select>
              <option value="How did you find us?">How did you find us?</option>
              <option value="google Search">Google Search</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Referral">Referral</option>
            </select>
          </span>
            <textarea placeholder="Type your message here...." tabIndex="4" required></textarea>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </Form>
        <div />
        <Info>
          <span>
            <h4>Location</h4>
            <p>Based in Delray Beach, FL</p>
          </span>
          <span>  
            <h4>Call Us</h4>
            <p>+1 561 900 7525</p>
          </span>
          <span>
            <h4>Email Us</h4>
            <p>HRISteam@gmail.com</p>
          </span>
        </Info>
      </ContactBox>
    </ContactPage>
  )
}
