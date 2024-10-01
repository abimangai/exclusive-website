import React from 'react'
import styled from 'styled-components'
import { Header } from './Header';
import { SearchNavbar} from './SearchNavbar';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (

        <NavbarContainer>
            <Header />
            <NavBar>
                <Nav>
                    <LogoContainer>
                        <Logo>Exclusive</Logo>
                    </LogoContainer>
                    <ListContainer>
                        <List>
                            <ListName to="/"> Home </ListName>
                            <ListName to="contact"> Contact </ListName>
                            <ListName to="about"> About</ListName>
                            <ListName to="signup"> Signup</ListName>
                        </List>
                    </ListContainer>
                    <SearchNavbar />
                </Nav>
            </NavBar>

            <NavHr />

        </NavbarContainer>

    )
}

const NavbarContainer = styled.div`

`;
const NavBar = styled.div`
width:80vw;
margin:auto;
`;

const Nav = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items: center;
`;

const LogoContainer = styled.div`
color:#000;
`;

const Logo = styled.h1`

`;
const ListContainer = styled.div`

@media(max-width:1020px){
    display:none;
   }
`;
const List = styled.ul`
margin-top:6%;
list-style:none;
display:flex;
gap:2rem;
`;
const ListName = styled(Link)`
padding:10px;
font-size:18px;
color: #000;
text-decoration:none;
cursor:pointer;
&:hover{
    text-decoration:underline;
}

@media(max-width:1100px){
 padding:7px;
}
`;



const NavHr = styled.hr`
    
`;


