import React from 'react'
import styled from 'styled-components'


const NavContainer =styled.div`
width:100%;
`;
const NavHeader =styled.div`
  background-color:#000;
  display:flex;
  color:#fff;
 justify-content:space-evenly;
 align-items:center;
 padding-left:20%;

 @media(max-width:1200px){
  padding-left:10%;
 }
 @media(max-width:980px){
  padding-left:5%;
 }
 @media(max-width:640px){
  padding-left:3%;
 }
`;

const NavText =styled.div`
font-size:15px;
padding:10px ;
@media(max-width:930px){
  font-size:12px;
 }
`;
const NavSpan =styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  font-size: 16px;
  margin-left:8px;
  @media(max-width:780px){
  font-size:12px;
 }
`;

const NavSelect =styled.select`
  background: #000;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #fff;
  padding:10px;

  @media(max-width:780px){
  font-size:12px;
 }
 @media(max-width:640px){
  padding-left:2%;
 }
 
`;

const Option = styled.option`
  background: #222;
  color: #fff;
  font-size: 1rem;

`;
export const Header = () => {
  return (
  <>
   <NavContainer>
    <NavHeader>
      <NavText>
        Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%!
       <NavSpan>Shop Now</NavSpan>
      </NavText>
      <NavSelect>
        <Option>English</Option>
        <Option>Tamil</Option>
        <Option>Malayalam</Option>
      </NavSelect>
     </NavHeader>
    </NavContainer>
  </>
  )
}


