import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const NavBox = styled(motion.nav)`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    color:#ffffff;
    background-color: black;
    z-index: 3;
    span {
        margin-right: 80px;
        display: flex;
        justify-content: space-between;
        width: 500px;
        list-style: none;
    }
`;

const MotionLink = motion(Link);
const StyledLink = styled(MotionLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: white;
    text-decoration: none;
`;

const LogoLink = styled(StyledLink)`
    margin-left: 80px;
    display: flex;
    align-items: center;
    width: 140px;
    font-size: 2em;
    div {
        margin: 6px;
        margin-top: 9px;
        width: 2px;
        height: 25px;
        background-color: white;
    }
    p {
        padding-top: 8px;
        font-size: .6em;
        font-weight: 500;
    }
`;


export default function Navbar() {
  return (
    <NavBox>
        <LogoLink to="/" whileHover={{ color: "#ff6c6c"}} >HRIS<div /><p>Team</p></LogoLink>
        <span>
            <StyledLink to="/" whileHover={{ color: "#ff6c6c"}}>Home</StyledLink>
            <StyledLink to="/services" whileHover={{ color: "#ff6c6c"}}>Services</StyledLink>
            <StyledLink to="/team" whileHover={{ color: "#ff6c6c"}}>Team</StyledLink>
            <StyledLink to="/contact" whileHover={{ color: "#ff6c6c"}}>Contact us</StyledLink>
        </span>
    </NavBox>
  )
}
