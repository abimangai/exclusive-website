import React from 'react'
import styled from 'styled-components';
import rectangle from "../Assets/Images/Category/Rectangle 18.svg";
import phone from "../Assets/Images/Category/Category-CellPhone.svg";
import computer from "../Assets/Images/Category/Category-Computer.svg";
import smartwatch from "../Assets/Images/Category/Category-SmartWatch.svg";
import headphone from "../Assets/Images/Category/Category-Headphone.svg";
import gaming from "../Assets/Images/Category/Category-Gamepad.svg";
import camera from "../Assets/Images/Category/Group 1000005941.svg";



const CategorySection=styled.div`
    
`;
const CategoryContainer=styled.div`
    width: 78vw;
    margin: auto;
    margin-top: 30px;
`;
const CategoryHeader=styled.div`
    
`;
const CategoryHead=styled.div`
    display: flex;
`;
const CategoryRectangle =styled.img`
    min-height:5px;
`;
const CategoryPara=styled.p`
    color: #f53d3d;
    margin-left:5px;
`;
const CategoryBrowse=styled.h1`
    color:#000;
  
`;
const CategoryProduct=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align: center;
    gap: 30px;
    
    
    
`;
const CategoryBox=styled.div`
  width: 120px; 
  height: 120px; 
  border: 1px solid #9f9e9e;
  padding: 10px;
  border-radius: 4px;

  
`;
const CategoryImg=styled.img`
  max-width: 100%;
  max-height: 75%;
  object-fit: contain;
`;
const CategoryName=styled.p`
     margin-top: 10px;
     font-size: 14px;
`;


const Category = () => {
    return (
        <>
            <CategorySection>
                <CategoryContainer>
                    <CategoryHeader>
                        <CategoryHead>
                            <CategoryRectangle src={rectangle} alt="img"/>
                            <CategoryPara>Category</CategoryPara>
                        </CategoryHead>
                        <CategoryBrowse>Browse By Category</CategoryBrowse>
                     </CategoryHeader>
                     <CategoryProduct>
                          <CategoryBox>
                            <CategoryImg src={phone} alt="img"/>
                            <CategoryName>Phone</CategoryName>
                          </CategoryBox>
                          <CategoryBox>
                            <CategoryImg src={computer} alt="img"/>
                            <CategoryName>Computer</CategoryName>
                          </CategoryBox>
                          <CategoryBox>
                            <CategoryImg src={smartwatch} alt="img"/>
                            <CategoryName>Smartwatch</CategoryName>
                          </CategoryBox>
                          <CategoryBox>
                            <CategoryImg src={headphone } alt="img"/>
                            <CategoryName>Heaphone</CategoryName>
                          </CategoryBox>
                          <CategoryBox>
                            <CategoryImg src={gaming} alt="img"/>
                            <CategoryName>Gaming</CategoryName>
                          </CategoryBox>
                          <CategoryBox>
                            <CategoryImg src={camera} alt="img"/>
                            <CategoryName>Camera</CategoryName>
                          </CategoryBox>
                     </CategoryProduct>
                </CategoryContainer>
            </CategorySection>
        </>
    )
}

export default Category
