import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import * as d3 from d3;
import GlobalStyle from './styles/Global.js'
import Navigation from './components/navigation.js';
import Footer from './components/footer.js'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import About from './components/about.js'
import FacebookChart from './components/facebookchart.js';
import Instagram from './components/instagram.js';
import YouTube from './components/youtube.js';
import Spotify from './components/spotify.js';
import Lyrics from './components/lyrics.js';
import MusicVideos from './components/musicvideos.js';
import Music from './components/music.js';
import TikTok from './components/tiktok.js';
import Tunefind from './components/tunefind.js';
import Mapportal from './components/map.js';
import Home from './components/home.js';
import Contact from './components/contact.js';
import TestWrap from './components/testrwap.js';
import TestChart from './components/testchart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Twitter from './components/twitter';

class App extends React.Component{
  constructor (props) {
    super(props)
    
    
  }
  render(){
    return (
      <div className="App">
        <GlobalStyle/>
        <Navigation/>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/about'>
                <About/>
              </Route>
              <Route path='/contact'>
                <Contact/>
              </Route>
              <Route path='/youtube'>
                <YouTube/>
              </Route>
              <Route path='/spotify'>
                <Spotify/>
              </Route>
              <Route path='/facebook'>
                <TestWrap/>
                <FacebookChart />
              </Route>
              <Route path='/map'>
                <Mapportal/>
              </Route>
              <Route path='/instagram'>
                <Instagram/>
              </Route>
              <Route path='/tiktok'>
                <TikTok/>
              </Route>
              <Route path='/tunefind'>
                <Tunefind/>
              </Route>
              <Route path='/twitter'>
                <Twitter/>
              </Route>
              <Route path='/musicvideos'>
                <MusicVideos/>
              </Route>
              <Route path='/music'>
                <Music/>
              </Route>
              <Route path='/lyrics'>
                <Lyrics/>
              </Route>
              
            </Switch>
          </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;
