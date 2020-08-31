import React, {useState} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../extra/css/navbar.css';
import brand from '../extra/images/pinkeffect3.png';

const StyledNavbar = styled(Navbar)`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`;

const StyledNav = styled(Navbar)`
font-size: 0.9em;
font-family: 'Cousine', monospace;
font-color: #ffb3df;
margin: 0em;
padding: 0.25em 10em;
border-radius: 3px;
`;

const StyledNavLink = styled(Nav.Link)`
color: #ffb3df;
:&hover{
  color: red;
}

`;

const StyledNavbarBrand = styled(Navbar.Brand)`
font-family: 'Cousine', monospace;
`;

const StyledNavDropdown = styled(NavDropdown)`
color: #ffb3df;
background-color: black;

`;

const StyledNavDropdownItem = styled(NavDropdown.Item)`
background-color: black;
color: #ffb3df;
font-size: 1.3em;
opacity: 1;
transition: all 0.3s ease;
border-radius: 0px;



`;

const navstyle = {
    
    color: '#ffb3df'
    


}


class Navigation extends React.Component{
  

    render(){
        return(
            <div>
<Navbar bg="transparent" expand="lg">
  <StyledNavbarBrand href="/"><img src={brand} width='150px'></img></StyledNavbarBrand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <StyledNav className="mr-auto">
      <StyledNavLink className='navlink' href="/">Home</StyledNavLink>
      <StyledNavLink className='navlink' href="/music">Music</StyledNavLink>
      <StyledNavLink className='navlink' href="/spotify">Spotify</StyledNavLink>
      <StyledNavLink className='navlink' href="/instagram">Instagram</StyledNavLink>
      <StyledNavLink className='navlink' href="/youtube" style={{marginRight:'20px'}} >Youtube</StyledNavLink>
      <p className='divider' ></p>
      <StyledNavLink className='navlink' href="/about" >About</StyledNavLink>
      <StyledNavLink className='navlink' href="/contact" >Contact</StyledNavLink>
      <StyledNavDropdown title="Legend" id="basic-nav-dropdown" bsPrefix=''>
        <NavDropdown.Header>Social Media</NavDropdown.Header>
          <StyledNavDropdownItem className='navdropdownlink' href="/instagram">Instagram</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/facebook">Facebook</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/tiktok">TikTok</StyledNavDropdownItem>
          
          <NavDropdown.Header>Music</NavDropdown.Header>
          <StyledNavDropdownItem className='navdropdownlink' href="/lyrics">Lyrical Data</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/musicvideos">Music Video Data</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/youtube">YouTube</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/spotify">Spotify</StyledNavDropdownItem>
          
          <NavDropdown.Header>Miscellaneous</NavDropdown.Header>
          <StyledNavDropdownItem className='navdropdownlink' href="/tunefind">Tunefind</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/about">About</StyledNavDropdownItem>
          <StyledNavDropdownItem className='navdropdownlink' href="/contact">Contact</StyledNavDropdownItem>
          
      </StyledNavDropdown>
    </StyledNav>
  </Navbar.Collapse>
</Navbar>




            </div>
        );
    }


}

export default Navigation;