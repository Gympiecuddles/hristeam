import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Button from './Button'

import logo from '../assets/logo.png'

const NavBox = styled(motion.nav)`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    color:#000000;
    background-color: #ffffff;
    z-index: 3;
    span {
        display: flex;
        justify-content: space-between;
        width: 550px;
        list-style: none;
    }
`;

const MotionLink = motion(Link);
const StyledLink = styled(MotionLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #000000;
    font-size: 1.1em;
    font-weight: 600;
    text-decoration: none;
`;

const LogoLink = styled(StyledLink)`
    margin-left: 25px;
    display: flex;
    align-items: center;
    width: 250px;
    font-size: 2.7em;
    img {
        height: 60px;
        width: 60px;
    }
    div {
        margin: 7px;
        margin-top: 12px;
        width: 2px;
        height: 35px;
        background-color: #56adb9;
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
        <LogoLink to="/" whileHover={{ color: "#56adb9"}}><img src={logo} alt="logo"></img> HRIS<div /><p>Team</p></LogoLink>
        <span>
            <StyledLink to="/" whileHover={{ color: "#56adb9"}}>Home</StyledLink>
            <StyledLink to="/services" whileHover={{ color: "#56adb9"}}>Services</StyledLink>
            <StyledLink to="/team" whileHover={{ color: "#56adb9"}}>Team</StyledLink>
            <StyledLink to="/contact" whileHover={{ color: "#56adb9"}}>Contact us</StyledLink>
        </span>
        <Button type="light" text="Book Us" />
    </NavBox>
  )
}
