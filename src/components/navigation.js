import React from 'react';
import styled from 'styled-components';
//import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './navbar.css';


const StyledNavbar = styled(Navbar)`
color: green;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid green;
border-radius: 3px;
`;

const StyledNav = styled(Navbar)`
color: green;
font-size: 0.8em;
font-family: 'Cousine', monospace;
font-color #ffb3df;
margin: 0em;
padding: 0.25em 10em;
border-radius: 3px;
`;

const StyledNavLink = styled(Nav.Link)`
color: #ffb3df;

`;

const StyledNavbarBrand = styled(Navbar.Brand)`
color: #ffb3df;
font-color = #ffb3df;
`;

const StyledNavDropdown = styled(NavDropdown)`
color: #ffb3df;
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
      <StyledNavLink href="#home">Home</StyledNavLink>
      <StyledNavLink href="#link">Link</StyledNavLink>
      <StyledNavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </StyledNavDropdown>
    </StyledNav>
  </Navbar.Collapse>
</Navbar>


            </div>
        );
    }


}

export default Navigation;