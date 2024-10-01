import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import searchicon from "../Assets/Images/Navbar Icon/search-img.svg";
import wishlisticon from "../Assets/Images/Navbar Icon/Wishlist-img.svg"
import carticon from "../Assets/Images/Navbar Icon/Cart-img.svg";
import { useData } from '../contexts/DataContexts';

const RightNav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:0.5 rem;
    flex-direction: row;
    margin-top:10px;
`;
const SearchBarContainer = styled.div`
    display:flex;
    align-items: center;
    background:#F5F5F5;
    padding: 10px;
    border-radius: 8px;
    img{
       width:22px;
    }


`;
const SearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 1rem;
    background:transparent; 
`;
const Navicon = styled.div`
  display: flex;
  padding-left:8px;
  align-items: center;  
  img{
       width:25px;
    }
 
`;

export const SearchNavbar = () => {

  const { searchTerm , handleSearch} = useData()
 
  return (
    <>
      <RightNav>
        <SearchBarContainer>
          <SearchInput type="text" placeholder='What are you looking for ?' onChange={handleSearch} value={searchTerm} />
          <img src={searchicon} alt="icon" />
        </SearchBarContainer>
        <Navicon>
          <img src={wishlisticon} alt="icon" />
        </Navicon>
        <Navicon>
          <img src={carticon} alt="icon" />
        </Navicon>
      </RightNav>

    </>
  )
}


