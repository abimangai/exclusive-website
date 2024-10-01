import React from 'react';
import styled from 'styled-components';
import arrow from "../Assets/Images/Footer/icon-send.svg";
import appstore from "../Assets/Images/Footer/AppStore.png";
import googleplay from "../Assets/Images/Footer/GooglePlay.png";
import facebook from "../Assets/Images/Footer/Icon-Facebook.svg";
import insta from "../Assets/Images/Footer/icon-instagram.svg";
import linkedin from "../Assets/Images/Footer/Icon-Linkedin.svg";
import twitter from '../Assets/Images/Footer/Icon-Twitter.svg';
import qrcode from '../Assets/Images/Footer/Qr Code.png';

const FooterSection = styled.div`
  background-color:#000;
  color:#fff;
  margin-top:80px;
  padding-bottom:40px;
 
 
`;
const FooterContainer = styled.div`
margin:auto;
width:80vw;
`;
const FooterCont = styled.div`
 
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 45px;
  
`;
const FooterRightList = styled.div`

`;
const FooterTop = styled.h2`

`;

const ListContent = styled.h3`

`;
const ListPara = styled.p`

`;
const InputBox = styled.div`
     display: flex;
     align-items: center;
     margin-bottom: 20px;
     border:1px solid #fff;
     border-radius: 4px;
     padding: 10px 20px ;
    
`;
const ListInput = styled.input`  
     margin-right: 10px;
     background-color:transparent;
     color:#fff; 
     outline: none;
     border:none;
     
    
`;
const ArrowImg = styled.img`
     cursor: pointer;
`;
const FooterMiddleList = styled.div`
align-items: center;

`;
const FooterList = styled.ul`
list-style: none;
padding: 0;
`;
const FooterItem = styled.li`
 margin-bottom: 10px;

`;
const FooterLeftList = styled.div`
 /* display:flex;
 flex-direction: column; */
`;
const FooterLeft = styled.div`
   
`;
const Para = styled.p`
font-size:14px;
color:#8d8c8c;
font-weight: bold;
display: inline-block;

`;
const StoreContainer = styled.div`
display:flex;
`;

const QrImage = styled.img`
margin-right: 20px;
`;
const AppContainer = styled.div`
display: block;
`;

const StoreImg = styled.img`
display:block;
`;

const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 15px;
margin-top:20px;
`;

const IconImg = styled.img`
  width: 30px;
  cursor: pointer;
  transition: transform 0.3s;
  
`;




const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <FooterCont>
                        <FooterBox>
                            <FooterRightList>
                                <FooterTop>Exclusive</FooterTop>
                                <ListContent>Subscribe</ListContent>
                                <ListPara>Get 10% off for your order</ListPara>
                                <InputBox>
                                    <ListInput type="text" placeholder="Enter your Email" />
                                    <ArrowImg src={arrow} alt="img" />
                                </InputBox>
                            </FooterRightList>
                            <FooterMiddleList>
                                <FooterTop>Support</FooterTop>
                                <FooterList>
                                    <FooterItem>111,Bijoy Sarani,Dhaka,<br/>DH 151,Bangladesh. </FooterItem>
                                    <FooterItem>exclusive@gmail.com</FooterItem>
                                    <FooterItem>+1800 8888 8909</FooterItem>
                                </FooterList>
                            </FooterMiddleList>

                            <FooterMiddleList>
                                <FooterTop>Account</FooterTop>
                                <FooterList>
                                    <FooterItem>My Account </FooterItem>
                                    <FooterItem>login/Register</FooterItem>
                                    <FooterItem>Cart</FooterItem>
                                    <FooterItem>Wishlist</FooterItem>
                                    <FooterItem>Shop</FooterItem>
                                </FooterList>
                            </FooterMiddleList>

                            <FooterMiddleList>
                                <FooterTop>Quick Link</FooterTop>
                                <FooterList>
                                    <FooterItem>Privacy Policy </FooterItem>
                                    <FooterItem>Terms Of Use</FooterItem>
                                    <FooterItem>FAQ</FooterItem>
                                    <FooterItem>Contact</FooterItem>
                                </FooterList>
                            </FooterMiddleList>

                            <FooterLeftList>
                                <FooterTop>Download App</FooterTop>
                                <FooterLeft>
                                    <Para>Save $3 with App New Users only</Para>
                                    <StoreContainer>
                                        <QrImage src={qrcode} alt="img" />
                                        <AppContainer>
                                            <StoreImg src={appstore} alt="img " />
                                            <StoreImg src={googleplay} alt="img" />
                                        </AppContainer>
                                    </StoreContainer>
                                    <IconContainer>
                                        <IconImg src={facebook} alt='img' />
                                        <IconImg src={twitter} alt='img' />
                                        <IconImg src={insta} alt='img' />
                                        <IconImg src={linkedin} alt='img' />
                                    </IconContainer>
                                </FooterLeft>
                            </FooterLeftList>
                        </FooterBox>
                    </FooterCont>
                </FooterContainer>
            </FooterSection>

        </>
    )
}

export default Footer
