import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { GrMenu, GrClose } from 'react-icons/gr'

import Button from './Button'

import logo from '../assets/logo.png'

const NavBox = styled(motion.nav)`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    color:#000000;
    background-color: #fca1a1;
    z-index: 3;
    span {
        display: flex;
        justify-content: space-between;
        width: 550px;
        list-style: none;
    }
    @media (max-width: 1172px) {
        span {
            display: none;
        }
        b {
            display: none;
        }
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
    outline: none;
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
    @media (max-width: 432px) {
        margin-left: 0;
        width: 190px;
        font-size: 2em;
        img {
            height: 45px;
            width: 45px;
        }
    }
`;

/* Mobile styles */
const MobileNav = styled.div`
    display: none;
    @media (max-width: 1172px) {
        display: block;
    }
`;

const Bars = styled(GrMenu)`
    margin: 35px;
    margin-right: 45px;
    font-size: 35px;
    cursor: pointer;
`;

const X = styled(GrClose)`
    margin: 35px;
    margin-right: 45px;
    font-size: 35px;
    cursor: pointer;
`;

const ActiveNav = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 100px;
    left: 50%;
    height: 100vh;
    width: 50%;
    background-color: #ffffff;
    @media (max-width: 768px) {
        left: 0;
        width: 100%;
    }
`;

const MotionMobileLink = motion(Link);
const MobileLink = styled(MotionMobileLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    color: #000000;
    font-size: 1.5em;
    font-weight: 600;
    text-decoration: none;
`;

export default function Navbar() {
    const [active, useActive] = useState(false);

    const HandleClick = () => {useActive(!active)};

  return (
    <NavBox>
        <LogoLink to="/" whileHover={{ color: "#56adb9"}}><img src={logo} alt="logo"></img> HRIS<div /><p>Team</p></LogoLink>
        <span>
            <StyledLink to="/" whileHover={{ color: "#56adb9"}}>Home</StyledLink>
            <StyledLink to="/services" whileHover={{ color: "#56adb9"}}>Services</StyledLink>
            <StyledLink to="/team" whileHover={{ color: "#56adb9"}}>Team</StyledLink>
            <StyledLink to="/contact" whileHover={{ color: "#56adb9"}}>Contact us</StyledLink>
        </span>
        <b>
            <Button type="light" text="Book Us"/>
        </b>
        <MobileNav>
            {active ? 
            <>
                <X onClick={HandleClick} />
                <ActiveNav initial={{ x: 100, opacity: 0 }} animate={{ x:0, opacity: 1 }} exit={{ x:100, opacity: 0 }}>
                    <MobileLink onClick={HandleClick} to="/" whileHover={{ backgroundColor: "#eafcff"}}>Home</MobileLink>
                    <MobileLink onClick={HandleClick} to="/services" whileHover={{ backgroundColor: "#eafcff"}}>Services</MobileLink>
                    <MobileLink onClick={HandleClick} to="/team" whileHover={{ backgroundColor: "#eafcff"}}>Team</MobileLink>
                    <MobileLink onClick={HandleClick} to="/contact" whileHover={{ backgroundColor: "#eafcff"}}>Contact us</MobileLink>
                    <Button type="light" text="Book Us" />
                </ActiveNav>
            </>
            : 
            <Bars onClick={HandleClick} />
            }
            
            
        </MobileNav>
    </NavBox>
  )
}
