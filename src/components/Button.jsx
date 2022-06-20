import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 230px;
    height: 55px;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 5px;
    color: #eef0e4;
    background-color: #da4a1f;  
`;

const MotionButton = motion(StyledButton);

export default function Button() {
  return (
    <MotionButton to="/contact" whileHover={{ backgroundColor: "#e7bab2"}} >Contact Us</MotionButton>
  )
}
