import React from 'react';
import { Container, Col, Image, Badge, Jumbotron, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/about.css'
import icecreampic from '../extra/images/icecream1.JPG'
const AboutWrapper = styled.div`
margin: 10rem 0;
  flex-direction: column;
  width: 1020px;
  max-width: 100%;
  h2 {
    color: green;
    margin-bottom: 2rem;
  }
  h3 {
    color: yellow;
    margin: 2rem 0;
    display: flex;
    align-items: center;
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
const jumbotron = {
  
  backgroundImage: `url(${icecreampic})`,
  backgroundSize: 'cover',
  display: 'block'
  
  
}


class About extends React.Component{
    render(){
      return(
        <div>
            <Jumbotron fluid className='jumbotron'>
              
  <Container className='tint'>
    <h1>About</h1>
    <p>
      about bp and this site
    </p>
  </Container>
</Jumbotron>



<AboutWrapper>
            <h1>bloopie<Badge variant="secondary">New</Badge></h1>
            <h2>bloopie<Badge pill variant="primary">
    Primary
  </Badge></h2>
            <h3>bloopie</h3>
            <h4>bloopie</h4>
            <h5>bloopie</h5>
            <h6>bloopie</h6>

            <p>this is a paragraph</p>
            <p><a href='/'>thsi is a link inside paragraph</a></p>
            <ol>
              <li>lisy istem 1</li>
              <li>list item 2</li>
              <li>item 3</li>
            </ol>
            <small>this is some lext and  a <a href='/'>links</a> </small>
            </AboutWrapper>
        </div>
      );
    }
}

export default About;