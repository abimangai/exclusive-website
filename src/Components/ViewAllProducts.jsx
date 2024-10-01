import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ViewProductBox=styled.div`
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      display:flex;
     
`;
const ViewButton=styled(Link)`
      background-color: #f53d3d;
      color:#fff;
      border-radius: 5px;
      padding: 15px 30px;
      text-decoration: none;
      font-size: 1rem;

`;

const ViewAllProducts = () => {
  return (
    <>
   
        <ViewProductBox>
            <ViewButton to="/products">View All Products</ViewButton>
        </ViewProductBox>
   
  
    </>
  )
}

export default ViewAllProducts
