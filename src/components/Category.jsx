import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { FaBowlFood } from "react-icons/fa6";
import { GiFrenchFries } from "react-icons/gi";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
function Category() {
  return (
    <List>
        {/* replace NavLink with SNavLink for styling purpose */}
        <SNavLink to={"/cuisine/African"}>
            <FaBowlFood />
            <h4>African</h4>
        </SNavLink>
        <SNavLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </SNavLink>
        <SNavLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SNavLink>
        <SNavLink to={"/cuisine/Japanese"}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SNavLink>
        <SNavLink to={"/cuisine/French"}>
            <GiFrenchFries /> 
            <h4>French</h4>
        </SNavLink>
    </List>
  )
}
const List = styled.div`
display: flex;
justify-content: center;
align-items: center ;

`

const SNavLink = styled(NavLink)
`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
 background: linear-gradient(35deg, #da830a, #f0c594a1);
//  background: linear-gradient(35deg, #6c6c6c, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
color: white;
font-size: 0.8rem;
}
svg{
color: white;
font-size: 1.5rem;}

&.active{
background: linear-gradient(to right, #f27121, #e94057);
svg{
color: white;
}
h4{
color: white;}
}

`


export default Category