import React from 'react';
import styled from 'styled-components';
//import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './navbar.css';


const StyledNavbar = styled(Navbar)`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`;

const StyledNav = styled(Navbar)`
color: green;
font-size: 0.8em;
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
background: white;
`;

const StyledNavDropdown = styled(NavDropdown)`
color: #ffb3df;

`;

const StyledNavDropdownItem = styled(NavDropdown.Item)`
background-color: black;
color: #ffb3df;
font-size: 0.8em;
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
  <StyledNavbarBrand href="#home">The Pink Effect</StyledNavbarBrand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <StyledNav className="mr-auto">
      <StyledNavLink className='navlink' href="#home">Home</StyledNavLink>
      <StyledNavLink className='navlink' href="#link">Link</StyledNavLink>
      <StyledNavDropdown title="Legend" id="basic-nav-dropdown">
        <StyledNavDropdownItem className='navdropdownlink' href="#action/3.1">Action</StyledNavDropdownItem>
        <StyledNavDropdownItem href="#action/3.2">Another action</StyledNavDropdownItem>
        <StyledNavDropdownItem href="#action/3.3">Something</StyledNavDropdownItem>
        <NavDropdown.Divider />
        <StyledNavDropdownItem href="#action/3.4">Separated link</StyledNavDropdownItem>
      </StyledNavDropdown>
    </StyledNav>
  </Navbar.Collapse>
</Navbar>


            </div>
        );
    }


}

export default Navigation;