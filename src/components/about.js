import React from 'react';
import { Container, Col, Image, Badge, Jumbotron, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/about.css'
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
  h1{

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
              
  <Container className='tint' fluid>
    <br/><br/><br/><br/>
    <h1 className='titlefont'>About</h1>
    <p>
      
    </p>
  </Container>
</Jumbotron>



<AboutWrapper>
            <h1>About BLACKPINK</h1>
            
            <h2>WHat is pink effect?</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id scelerisque lacus, sit amet vestibulum justo. Nam a accumsan sapien. Nam dignissim hendrerit aliquam. Cras sed justo risus. Suspendisse nunc sem, vulputate ut sodales nec, dapibus sit amet sem. Mauris eu dui mattis, molestie est et, ultrices purus. Duis scelerisque, nisl non dictum gravida, arcu mi tempor felis, ut tincidunt odio ante a odio. Mauris ut  ex dolor. Nunc mollis condimentum elit, id rutrum sem <a href='/'>link in a p</a>dapibus in. Suspendisse elit urna, pulvinar non ipsum vitae, egestas porta purus. Sed a scelerisque leo, et eleifend ex. Donec eget odio pharetra, luctus ante nec, scelerisque sem. Suspendisse vel neque quam. Pellentesque porttitor et ante ut posuere.

            </p>
            <p>
            Aliquam in lectus efficitur, lobortis velit at, blandit est. In auctor, orci sit amet fringilla rhoncus, turpis ex gravida orci, at ornare diam quam sit amet mi. Donec molestie quam eget auctor imperdiet. Nunc venenatis nunc a lorem faucibus consequat. Suspendisse eget lectus non nisi imperdiet ornare. Vivamus gravida sapien quis nisl malesuada tristique at non purus. Cras vestibulum, lectus at hendrerit tristique, ex metus interdum odio, sit amet bibendum velit quam vel purus. Aenean tristique tincidunt libero, vitae porttitor nisi auctor sit amet. Sed commodo sed erat at ultrices. Nunc cursus, nibh eu aliquam auctor, erat sem euismod velit, in ultricies tortor quam quis orci. Vivamus tempor urna nibh, sed lacinia sapien semper et. Maecenas sed suscipit mauris.
            </p>
            
            <small>this is some lext and  a <a href='/'>links</a> </small>
            </AboutWrapper>
        </div>
      );
    }
}

export default About;