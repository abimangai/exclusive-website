import React from 'react'
import applelogo from '../Assets/Images/Home/apple-logo.svg';
import mobileimg from '../Assets/Images/Home/phone-img.png';
import arrowlogo from '../Assets/Images/Home/arrow-right-icon.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Category from './Category';
import ViewAllProducts from './ViewAllProducts';
import Deliver from './Deliver';
import ProductList from './ProductList';
  
const HomeContainer=styled.div`
padding: auto;
`;
const HomeContent=styled.div`
margin: auto;
background-color:#000;
display:flex;
justify-content: center;
border-radius: 10px;
align-items: center;
padding:0px 20px;
flex-direction: row;
width: 78vw;
`;

const RightContent=styled.div`
margin-left: 40px;
margin-bottom:80px;
margin-top:30px;
`;

const AppleLogoContainer=styled.div`
  display: flex;
  padding-top:80px;
`;
const AppleText=styled.h3`
font-size:14px;
color:#fff;
/* margin:auto; */
`;
const OfferText=styled.h1`
color:#fff;
font-size: 4.5vw;
margin: 0px;
padding-top:15px;
padding-bottom:15px;

`;
const ShopContainer=styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.3rem;
  color:#fff;
  
`;
const ShopLink=styled.p`
  text-decoration: underline;
  margin: auto 0;
  padding: auto 0;
  
`;
const ArrowImg=styled.img`

`;
const LeftContent=styled.div`
padding-top: 0px;
margin: auto;
img{
    overflow: hidden;
    display: block;
    width: 100%;

} 
`;

const Home = () => {
  return (
    <>
    <HomeContainer>
        <HomeContent>
            <RightContent>
                <AppleLogoContainer>
                    <img src={applelogo } alt="logo"/>
                    <AppleText>iPhone 14 series</AppleText>
                </AppleLogoContainer>
               
                <OfferText>Up to 10% <br /> off Voucher</OfferText>
                <ShopContainer  to="/products">
                <ShopLink>Shop Now</ShopLink>
                <ArrowImg src={arrowlogo} alt='icon'/>
               </ShopContainer>
              
            </RightContent>

            <LeftContent>
                <img src={mobileimg} alt='image'/>
            </LeftContent>
        </HomeContent>
    </HomeContainer>
    
    <Category />
    <ProductList/>
    <ViewAllProducts/>
    <Deliver/>
    
    
    </>
  )
}

export default Home

