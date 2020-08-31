import React from 'react';
import { Container, Col, Image, Badge, Jumbotron, Button, Row, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/about.css'
import * as d3 from "d3";
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
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="The Pink Efect">
    The Pink Efect
  </Tab>
  <Tab eventKey="profile" title="This Site">
    This Site
  </Tab>
  
</Tabs>
            <h1>About BLACKPINK</h1>
            
            <h2>What is The Pink Effect?</h2>


            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id scelerisque lacus, sit amet vestibulum justo. Nam a accumsan sapien. Nam dignissim hendrerit aliquam. Cras sed justo risus. Suspendisse nunc sem, vulputate ut sodales nec, dapibus sit amet sem. Mauris eu dui mattis, molestie est et, ultrices purus. Duis scelerisque, nisl non dictum gravida, arcu mi tempor felis, ut tincidunt odio ante a odio. Mauris ut  ex dolor. Nunc mollis condimentum elit, id rutrum sem <a href='/'>link in a p</a>dapibus in. Suspendisse elit urna, pulvinar non ipsum vitae, egestas porta purus. Sed a scelerisque leo, et eleifend ex. Donec eget odio pharetra, luctus ante nec, scelerisque sem. Suspendisse vel neque quam. Pellentesque porttitor et ante ut posuere.

            </p>
            <p>
            Aliquam in lectus efficitur, lobortis velit at, blandit est. In auctor, orci sit amet fringilla rhoncus, turpis ex gravida orci, at ornare diam quam sit amet mi. Donec molestie quam eget auctor imperdiet. Nunc venenatis nunc a lorem faucibus consequat. Suspendisse eget lectus non nisi imperdiet ornare. Vivamus gravida sapien quis nisl malesuada tristique at non purus. Cras vestibulum, lectus at hendrerit tristique, ex metus interdum odio, sit amet bibendum velit quam vel purus. Aenean tristique tincidunt libero, vitae porttitor nisi auctor sit amet. Sed commodo sed erat at ultrices. Nunc cursus, nibh eu aliquam auctor, erat sem euismod velit, in ultricies tortor quam quis orci. Vivamus tempor urna nibh, sed lacinia sapien semper et. Maecenas sed suscipit mauris.
            </p>

            <h2>Who Is BLACKPINK?</h2>
            <p>
              Members : JISOO / 지수 (VOCAL) JENNIE / 제니 (RAP, VOCAL) ROSÉ / 로제 (VOCAL) LISA / 리사 (RAP, DANCE)
            </p>
            <p>
             Description : K-pop girl group BlackPink made their breakthrough in 2016 with a brand of energetic dance-pop influenced by hip-hop and trap. The quartet, formed by <a href="spotify:search:label%3A%22YG+Entertainment%22">YG Entertainment</a>, combines the talents of Korean-born lead vocalist Jisoo Kim, New Zealand-raised main rapper/vocalist Jennie Kim, Australian-raised main vocalist Rose Park Chae Young, and Thai lead rapper Lalisa Manoban (aka Lisa, born Pranpriya Manoban). BlackPink debuted with their single "Square One," which featured the hits "Boombayah" and "Whistle." Produced and written with Teddy Park, Future Bounce, and Bekuh Boom,"Square One" introduced a "K-trap" style that sounded like 2NE1 blended with BTS. Both tracks climbed the charts in the United States and Korea, even breaking into the French singles chart. Months later, they released Square Two, which entered the U.S. Heatseekers chart at number 13 and the World Albums chart at number two. Square Two also became the first debut for a K-pop girl group on the Canadian charts.
             </p>
             <p>
             In the summer of 2017, the group issued the chart-topping single "As If It's Your Last," their third to top the Billboard World Digital Songs chart. Months later, they made their Japanese debut with the Blackpink EP (<a href="spotify:search:label%3A%22YGEX%22">YGEX</a>/<a href="spotify:search:label%3A%22Avex+Entertainment%22">Avex Entertainment</a>), which compiled past hits in newly recorded Japanese versions. Topping the Japanese charts, BlackPink became just the third foreign artist debut to do so. Re:BlackPink arrived in early 2018, combining previously issued tracks from both Japanese and Korean releases. The Square Up EP arrived that summer, headed by the international smash single "DDU-DU DDU-DU." In addition to entering the U.K. trending chart, the song became the group's highest showing on the Billboard Hot 100 by an all-female K-pop group (following <a href="spotify:artist:3Cv2vi3WTl8VZOTdrBkKdM">Wonder Girls</a>' 2009 hit "Nobody"). The EP also made moves on the Billboard 200, becoming the highest-charting all-female K-pop effort to date at number 40. Later that October, the group signed a global partnership deal with <a href="spotify:search:label%3A%22Interscope%22">Interscope</a>/<a href="spotify:search:label%3A%22Universal%22">Universal</a> and appeared on the collaborative single "Kiss and Make Up" with English pop star <a href="spotify:artist:6M2wZ9GZgrQXHCFfjv46we">Dua Lipa</a>. The track hit the Billboard Hot 100 and the U.K. Top 40. BlackPink closed out the year with the release of their Japanese debut, Blackpink in Your Area. In 2019, the quartet announced an international tour, which included stops at Coachella and Summer Sonic, and released a second EP, Kill This Love. ~ Neil Z. Yeung, Rovi
            </p>
            
            <small>this is some lext and  a <a href='/'>links</a> </small>
</AboutWrapper>
        </div>
      );
    }
}

export default About;