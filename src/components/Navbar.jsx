import React from 'react'
import styled from 'styled-components'

const NavBox = styled.nav`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: grey;
    h2 {
        font-size: 2em;
    }
    ul {
        display: flex;
        justify-content: space-between;
        width: 500px;
        list-style: none;
    }
`;

export default function Navbar() {
  return (
    <NavBox>
        <h2>HRIS Team</h2>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact us</li>
        </ul>
    </NavBox>
  )
}
