import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import productdata from "../ProductsData.json";
import deliveryicon from "../Assets/Images/SingleProduct/icon-delivery.svg";
import returnicon from "../Assets/Images/SingleProduct/Icon-return.svg";

const ProductSection = styled.div`
`;

const ProductContainer = styled.div`
     width:80vw;
     margin:auto;
`;

const RouteSection = styled.div`
`;

const RouteContent = styled.p`
padding:50px 0px;
`;

const ProductContent = styled.div`
display:flex;

`;

const LeftContent = styled.div`
width:100%;
background-color:#e4e2e2;
display:flex;
align-items:center;
justify-content: center;
padding:60px 110px;
`;

const Image = styled.img`
width:340px;

`;
const RightContainer = styled.div`
padding: 60px;
`;


const RightContent = styled.div`
`;
const  ProductName= styled.h3`
margin:0px;
`;
const  RatingContainer= styled.div`
display:flex;
flex-direction:start;
gap:10px;
margin-top:10px;
margin-bottom:10px;


`;
const  Rating= styled.p`
   color: #f39c12;
   margin:0px;
`;
const  Review= styled.p`
margin:0px;
`;
const Stock= styled.p`
margin:0px;
color:#00FF66;
`;
const  Cost= styled.h4`
margin:0px;
`;
const  Description= styled.p`
`;
const ColorContainer= styled.div`
`;
const  ColorText= styled.h5`

`;
const  ColorImage= styled.img`

`;

const  BottomContainer= styled.div`
border:1px solid #cac9c9;
padding:12px;
`;

const  DeliveryContainer= styled.div`
display:flex;

`;
const ReturnContainer= styled.div`
display:flex;
`;
const  Imagee= styled.img`
`;
const  Content= styled.div`
padding-left: 20px;
padding-bottom:12px;
`;
const  ConPara= styled.h4`
margin:0px;
`;
const  ConPar= styled.p`
font-size:14px;
margin:10px 0px 0px 0px;
span{
 text-decoration: underline;
}
`;  


const SingleProductPage = () => {
  const { id } = useParams();
  const product = productdata.find(p => p.id === parseInt(id));

  return (
    <>
      <ProductSection>
        {product && (
          <ProductContainer>
            <RouteSection>
              <RouteContent>
                Home / {product.category} / {product.name}
              </RouteContent>
            </RouteSection>
            <ProductContent>
              <LeftContent>
                <Image src={require(`../Assets/Images/Products/${product.image}`)} alt="img" />
              </LeftContent>
              <RightContainer>
              <RightContent>
               <ProductName>{product.name}</ProductName>

               <RatingContainer>
               <Rating>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</Rating>
               <Review>({product.review})reviews</Review>
               <Stock>{product.stock}</Stock>
               </RatingContainer>
               <Cost>${product.cost}</Cost>
               <Description>{product.description}</Description>
               <hr/>

               <ColorContainer>
               <ColorText>Colors:</ColorText>
               <ColorImage src="" alt=""/>
               </ColorContainer>
            
               <BottomContainer>
                <DeliveryContainer>
                 <Imagee src={deliveryicon} alt="img"/>
                 <Content>
                  <ConPara>Free Delivery</ConPara>
                  <ConPar>Enter Your Postal Code For Free Delivery</ConPar>
                 </Content>
                </DeliveryContainer>
                <hr/>

                <ReturnContainer>
                <Imagee src={returnicon} alt="img"/>
                 <Content>
                  <ConPara>Return Delivery</ConPara>
                  <ConPar>Free 30 Days Delivery Returns<span> Details</span></ConPar>
                 </Content>
                </ReturnContainer>

               </BottomContainer>
              </RightContent>
              </RightContainer>
            </ProductContent>
          </ProductContainer>
        )}
      </ProductSection>
    </>
  );
}

export default SingleProductPage;
