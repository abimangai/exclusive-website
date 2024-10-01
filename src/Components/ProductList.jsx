import React from 'react';
import styled from 'styled-components';
import productdata from "../ProductsData.json"; // Importing JSON data
import view from "../Assets/Images/Products/Eye.svg";
import like from "../Assets/Images/Products/Heart.svg";
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContexts';

const ProductSection = styled.div`
 
`;

const ProdDetails = styled.div`
  padding: 40px 0px;
  background-color: #fff;
  width: 80vw;
  margin: auto;
`;

const ProductGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  cursor:pointer;
 
 
`;

const ProductContainer = styled.div`
  margin-top:40px;
  
`;

const UpperContainer = styled.div`
  display: flex;
  background-color: #ddd;
  height: 180px;
  margin-bottom: 15px;
  border-radius: 8px;
  padding: 20px 10px;
  position: relative;

  &:hover .btn{
    cursor:pointer;
    display:block;
  }
  span {
    position: absolute;
    z-index: 1;
    top: 10px;
    padding:3px;
    left: 10px;
    border-radius: 4px;
    color: #fafafa;
    background: #00ff66;
  
}
.off{
  background: #ee4c06;
}
`;

const ImageContainer = styled(Link)`

  img {
   
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartContainer = styled.div`
width:100%;
position: absolute;
bottom: 0;
left:0;
display:none;

`;
const CartContent = styled.button`
cursor: pointer;
background-color:#000;
color:#fff;
padding:10px;
width:100%;
border-radius:5px;
border:1px solid #000;
transition: 0.5s ease;

`;
const WishListIcon = styled.img`
  width: 28px;
  margin-bottom: 10px;
`;

const ViewIcon = styled.img`
  width: 28px;
`;

const BottomContainer = styled.div`
width: 100%;
`;

const ProductDetails = styled.div`
  display: flex;
  gap:15px;
  align-items: center;
  width: 100%;
`;

const ProductName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333; 
`;

const Cost = styled.h4`
  font-size: 1.2rem;
  color: #000;
  margin:0px;
`;

const Rating = styled.div`
  color: #f39c12;
`;

const Bought = styled.h5`
  font-size: 0.9rem;
  color: #777;
  margin:0px;
`;

const ProductList = () => {

  const {filteredProducts} = useData()

  const limitedProductData = filteredProducts.slice(0, 8); // Take only the first 8 items

  return (
    <>
      <ProductSection>
        <ProdDetails>
        <ProductGrid>
        {limitedProductData.length > 0 ? (
              limitedProductData.map(product => {
                return <ProductContainer key={product.id}>
                <UpperContainer>
                {product.new && <span>NEW</span>}
                {product.off && <span className="off">-{product.offer}%</span>}

                <ImageContainer to={`/product/${product.id}`}>
                  <img src={require(`../Assets/Images/Products/${product.image}`)} alt={product.name} />
                </ImageContainer>
                <IconContainer>
                <WishListIcon src={like} alt="icon"/>
                <ViewIcon src={view} alt="icon"/>
                </IconContainer>

                <CartContainer className='btn'>
                  <CartContent>Add To Cart</CartContent>
                </CartContainer>

                </UpperContainer>

                <BottomContainer>
                <ProductName>{product.name}</ProductName>
                <ProductDetails>
                  <Cost>${product.cost}</Cost>
                  <Rating>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</Rating>
                  <Bought>({product.bought} )</Bought>
                </ProductDetails>
                </BottomContainer>

              </ProductContainer>
              })
            ):'No Products Found'}
          </ProductGrid>
          {/* <ProductGrid>
            {limitedProductData.map((product) => (
              <ProductContainer key={product.id}>
                 <UpperContainer>
                 {product.new && <span>NEW</span>}
                 {product.off && <span className="off">-{product.offer}%</span>}

                  <ImageContainer to={`/product/${product.id}`}>
                    <img src={require(`../Assets/Images/Products/${product.image}`)} alt={product.name} />
                  </ImageContainer>
                  <IconContainer>
                    <WishListIcon src={like} alt="icon" />
                    <ViewIcon src={view} alt="icon" />
                  </IconContainer>

                  <CartContainer className="btn">
                  <CartContent>Add To cart</CartContent>
                </CartContainer>
                </UpperContainer>
               
              
                <BottomContainer>
                  <ProductName>{product.name}</ProductName>
                  <ProductDetails>
                    <Cost>${product.cost}</Cost>
                    <Rating>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</Rating>
                    <Bought>({product.bought} )</Bought>
                  </ProductDetails>
                </BottomContainer>
              </ProductContainer>
            ))}
          </ProductGrid> */}
        </ProdDetails>
      </ProductSection>
    </>
  );
}

export default ProductList;
