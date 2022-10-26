import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Newsletter1 from '../assets/Newsletter1.jpg'

const NewsBox = styled(motion.article)`
    position: fixed;
    top: 10%;
    right: -.4%;
    display: flex;
    width: 350px;
    height: 300px;
    z-index: 1;
    @media (max-width: 1172px) {
        display: none;
    }
`;

const NewsButton = styled(motion.div)`
    width: 35px;
    height: 381px;
    background-color: #56adb9;
    border: 2px solid #56adb9;
    border-radius: 4px;
    cursor: pointer;
    h3 {
        padding: 6px;
        padding-top: 10px;
        color: #ffffff;
        writing-mode: vertical-lr;
        letter-spacing: 2px;
    }
`;

const NewsContent = styled.div`
    width: 305px;
    height: 385px;
    background-color: #ffffff;
    img {
        width: 100%;
        height: 180px;
    }
    h6 {
        margin: 10px;
        margin-top: 5px;
        margin-left: 25px;
        font-size: 20px;
        font-weight: 500;
    }
    h6::after {
        content: "";
        position: absolute;
        top: 73.5%;
        left: 18.2%;
        width: 245px;
        height: 1px;
        border-top: 1px solid #56adb9;
        background-color: #56adb9;
    }
    p {
        padding: 10px;
        padding-left: 25px;
    }
    form {
        margin-left: 27px;
        input {
            width: 200px;
            height: 22px;
        }
        button {
            display: block;
            margin-top: 10px;
            width: 80px;
            height: 24px;
            color: #ffffff;
            background-color: #56adb9;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
    }
`;

const collapseVariants = {
    closed: { x: 305 },
    open: { x: 0 },
}

export default function Newsletter() {
    const [collapsed, setCollapsed] = useState(true);
  return (
    <NewsBox animate={collapsed ? "closed" : "open"} variants={collapseVariants}>
        <NewsButton 
        whileHover={{ backgroundColor: "#0d9caf", color: "#ffffff" }} 
        onClick={() => setCollapsed(collapsed => !collapsed)}
        >
            <h3>HR Resource</h3>
        </NewsButton>
        <NewsContent>
            <img src={Newsletter1} />
            <h6>Sign up for our newsletter!</h6>
            <p>HR Resource is an "all thing's" HR newsletter with industry veteran insight's into the essentials</p>
            <form>
                <input placeholder="Email" type="email" required />
                <motion.button whileHover={{ backgroundColor: '#198796' }} type='submit'>Submit</motion.button>
            </form>
        </NewsContent>
    </NewsBox>
  )
}
