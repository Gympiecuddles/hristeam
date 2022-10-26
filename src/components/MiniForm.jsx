import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'

import logo from '../assets/logo.png'

const Form = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
    width: 330px;
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    box-shadow: 0px 10px 25px -10px #d1d1d1;
    img {
      position: relative;
      margin: 5px;
      height: 100px;
      width: 100px;
      filter: none;
      z-index: 0;
    }
    h4 {
      font-size: 1.5em;
      font-weight: 600;
    }
    h6 {
      margin-top: 12px;
      font-size: 1.2em;
      font-weight: 500;
      color: #686868;
    }
    form {
      display: flex;
      flex-direction: column;
      margin: 20px;
      input {
        margin-top: 35px;
        padding-left: 20px;
        height: 50px;
        border: 1px solid #d6d6d6;
        border-radius: 7px;
        font-size: 16px;
        font-weight: 500;
        color: #4d4d4d;
      }
      button {
        margin-top: 35px;
        height: 50px;
        color: #ffffff;
        background-color: #56adb9; 
        border: 1px solid #a1a1a1;
        border-radius: 7px;
        font-size: 15px;
        font-weight: 600;
      }
      p {
        margin-top: 20px;
        font-size: 14px;
        color: #747373;
      }
    }
  }
  @media ( max-width: 405px) {
    div {
      width: calc(110px + 50vw);
    }
  }
`;

export default function MiniForm() {
  return (
    <Form>
        <div>
          <img src={logo} alt="logo" />
          <h4>Need HR Help?</h4>
          <h6>Contact an HR Expert Today</h6>
          <form action="">
            <input type="text" placeholder='Your Name*' required/>
            <input type="text" placeholder='Your Email*' required/>
            <input type="text" placeholder='Your Phone Number*'required/>
            <motion.button whileHover={{backgroundColor: "#0d9caf", color: "#ffffff"}} type='submit'>Get A Callback</motion.button>
            <p>By submitting my data I agree to be contacted</p>
          </form>
        </div>
    </Form>
  )
}
