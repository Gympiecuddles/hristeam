import React from 'react'
import styled from 'styled-components'

const ContactPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 101vh;
    h2 {
      position: absolute;
      top: 33%;
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
`;

const ContactBox = styled.article`
    display: flex;
    width: 1200px;
    height: 600px;
    background-color: #ffffff;
    box-shadow: 0 10px 24px 0 #57617a1e;
    z-index: 1;
    @media (max-width: 1200px) {
      width: 840px;
      height: 600px;
      flex-direction: column;
    }
    div {
      width: 1px;
      height: 100%;
      background-color: #dbdbdb;
      @media (max-width: 1200px) {
        width: 100%;
        height: 1px;
      }
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
`;

const Info = styled.span`
  display: flex;
  flex-direction: column;
  margin: 50px;
  margin-left: 80px;
  width: 30%;
  height: 100%;
  @media (max-width: 1200px) {
      flex-direction: row;
    }
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
          <h4>Location</h4>
          <p>Based in Delray Beach, FL</p>
          <h4>Call Us</h4>
          <p>+1 000 000 0000</p>
          <h4>Email Us</h4>
          <p>email@email.com</p>
        </Info>
      </ContactBox>
    </ContactPage>
  )
}
