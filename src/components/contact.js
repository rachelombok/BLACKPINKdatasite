import React from 'react';
import { Container, Col, Image, Badge, Jumbotron, Button, Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/home.css'
import icecreampic from '../extra/images/icecream1.JPG'

const AboutWrapper = styled.div`
margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;

  flex-direction: column;
  width: 90%;
  max-width: 100%;
  p{
    text-align: left;
  }
  h2 {
    margin: 2rem 0;
    color: white;
    text-align: left;
    margin-bottom: 2rem;
  }
  h3 {
    
    margin: 2rem 0;
    color: white;
    text-align: left;
  }
  small {
    font-size: 1rem;
    line-height: 1rem;
  }
  a {
    position: relative;
    z-index: 5;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    padding: 0.25rem 0.5rem 0.15rem 0.5rem;
    &:hover {
      color: #ffb3df;
      &::before {
        height: 2px;
        width: 100%;
        opacity: 1;
      }
    }
    &::before {
      z-index: -5;
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: -1px;
      left: 0;
      opacity: 1;
      transition: all 0.3s ease;
      background: linear-gradient(90deg, #121212, #ffb3df);
    }
  }
  
  small {
    a {
      position: relative;
      z-index: 5;
      text-decoration: none;
      color: white;
      transition: all 0.3s ease;
      padding: 0.25rem 0.5rem 0.15rem 0.5rem;
      &:hover {
        color: #ffb3df;
        &::before {
          height: 2px;
          width: 100%;
          opacity: 1;
        }
      }
      &::before {
        z-index: -5;
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: -1px;
        left: 0;
        opacity: 1;
        transition: all 0.3s ease;
        background: linear-gradient(180deg, #000000, #ffb3df);
      }
    }
  }
}
`;



class Contact extends React.Component{
    render(){
      return(
        <div>
            <Jumbotron fluid className='jumbotron-contact'>
              
  <Container className='tint' fluid>
    <br/><br/><br/><br/>
    <h1 className='titlefont'>Contact</h1>
    <p>
      
    </p>
  </Container>
</Jumbotron>



<AboutWrapper>
            <h1>Questions?</h1>
            <p style={{textAlign:'center'}}>
              Contact me to ask questions about this site, the best way to reach me isssss
            </p>
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder='Message'/>
          </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            
            </AboutWrapper>
        </div>
      );
    }
}

export default Contact;