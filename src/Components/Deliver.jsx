import React from 'react';
import styled from 'styled-components';
import food from "../Assets/Images/Services/Van-Service.svg";
import customer from "../Assets/Images/Services/Customer-Service.svg";
import money from "../Assets/Images/Services/Moneyback.svg";


const DeliverSection =styled.div`

`; 
const DeliverContainer =styled.div`
  width:78vw;
  margin: auto;

`; 
const DeliverContent=styled.div`
 display:flex;
 justify-content:center;
 align-items: center;
 margin-top:80px;
`; 
const DeliverBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;

`; 
const DeliverLogo =styled.img`
width: 5vw;
margin-bottom: 15px;

`; 
const DeliverPara =styled.h3`
 margin: 10px 0;
 text-transform: uppercase;


`; 
const DeliverBottom =styled.p`
margin: 0px;
font-size:15px;
`; 

const Deliver = () => {
  return (
    <DeliverSection>
        <DeliverContainer>
            <DeliverContent>
                <DeliverBox>
                   <DeliverLogo src={food} alt="img"/>
                   <DeliverPara>Free and fast delivery</DeliverPara>
                   <DeliverBottom>Free delivery for all orders over $140</DeliverBottom>
                </DeliverBox>

                <DeliverBox>
                   <DeliverLogo src={customer} alt="img"/>
                   <DeliverPara>24/7 Customer Service</DeliverPara>
                   <DeliverBottom>Friendly 24/7 Customer Service</DeliverBottom>
                </DeliverBox>

                <DeliverBox>
                   <DeliverLogo src={money} alt="img"/>
                   <DeliverPara>Money Back Guarantee</DeliverPara>
                   <DeliverBottom>We return money within 30 days</DeliverBottom>
                </DeliverBox>
            </DeliverContent>
        </DeliverContainer>
    </DeliverSection>
  )
}

export default Deliver
