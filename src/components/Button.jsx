import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const handleStyleType = varient => {
  switch (varient) {
    case "primary":
      return "background-color: #56adb9; color: #ffffff;";
    case "light":
      return "background-color: #eafcff; color: #108999; width: 280px; margin: 20px;";
    case "white":
      return "background-color: #fafafa; color: #000000; height: 50px; width: 220px;";
  }
};

const StyledButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 55px;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 8px;
    ${({varient}) => handleStyleType(varient)};
`;

const MotionButton = motion(StyledButton);

export default function Button({type, text}) {
  return (
    <MotionButton varient={type} to="/contact" whileHover={{ backgroundColor: "#0d9caf", color: "#ffffff"}} >{text}</MotionButton>
  )
}
