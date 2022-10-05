import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import conversation from '../assets/conversation.jpg'

const NewsBox = styled(motion.article)`
    position: fixed;
    top: 10%;
    right: -.4%;
    display: flex;
    width: 350px;
    height: 300px;
`;

const NewsButton = styled(motion.div)`
    width: 35px;
    height: 296px;
    background-color: #022f35;
    border: 2px solid #edfdff;
    border-radius: 4px;
    cursor: pointer;
    h3 {
        padding: 6px;
        padding-top: 10px;
        color: #edfdff;
        writing-mode: vertical-lr;
        letter-spacing: 2px;
    }
`;

const NewsContent = styled.div`
    width: 305px;
    height: 300px;
    background-color: #ffffff;
    img {
        width: 100%;
        height: 180px;
    }
    p {
        margin: 15px;
        margin-top: 5px;
        margin-left: 25px;
        font-size: 20px;
    }
    p::after {
        content: "";
        position: absolute;
        top: 73.5%;
        left: 20.2%;
        width: 255px;
        height: 1px;
        border-top: 1px solid #56adb9;
        background-color: #56adb9;
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
        whileHover={{ backgroundColor: '#696969' }} 
        onClick={() => setCollapsed(collapsed => !collapsed)}
        >
            <h3>Newsletter</h3>
        </NewsButton>
        <NewsContent>
            <img src={conversation} />
            <p>Sign up for our newsletter!</p>
            <form>
                <input placeholder="Email" type="email" required />
                <motion.button whileHover={{ backgroundColor: '#198796' }} type='submit'>Submit</motion.button>
            </form>
        </NewsContent>
    </NewsBox>
  )
}
