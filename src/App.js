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
import InstagramMap from './components/instagrammap.js';
import Home from './components/home.js';
import Contact from './components/contact.js';
import ContactMe from './components/contactform.js';
import TestWrap from './components/testrwap.js';
import FusionChart from './components/fusionchart.js';
import ChartViewer from './components/newchart.js';
import HomepageChart from './components/homepagechart.js';
import InstagramChart from './components/instagramchart.js';
import BPTrackTable from './components/bpmusictrackdata.js';
import KpopTrackTable from './components/kpopmusicdata.js';
import BoombayahPieChart from './components/boombayahpiechart.js';
import SpotifyChart from './components/spotifychart.js';
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
                <HomepageChart/>
                <ChartViewer/>
              </Route>
              <Route exact path='/fusion'>
                
                <ChartViewer/>
                
                <div>
                  <p>Lorem ipsum bbb</p>
                  <br></br>
                  <p>bcdsbchds</p>
                </div>
              </Route>
              <Route path='/about'>
                <About/>
              </Route>
              <Route path='/contact'>
                <Contact/>
                <ContactMe/>
              </Route>
              <Route path='/youtube'>
                <YouTube/>
              </Route>
              <Route path='/spotify'>
                <Spotify/>
                <SpotifyChart/>
              </Route>
              <Route path='/facebook'>
                <TestWrap/>
                <FacebookChart />
              </Route>
              <Route path='/map'>
                
              </Route>
              <Route path='/instagram'>
                <Instagram/>
                <InstagramChart/>
                <InstagramMap/>
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
                <BoombayahPieChart/>
              </Route>
              <Route path='/music'>
                <Music/>
                <BPTrackTable/>
                <br></br>
                <KpopTrackTable/>
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
