import React from 'react';
import logo from './logo.svg';
import './App.css';
//import * as d3 from d3;
import GlobalStyle from './styles/Global.js'
import Navigation from './components/navigation.js';
import Footer from './components/footer.js'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import About from './components/about.js'
import FacebookChart from './components/facebookchart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/fbchart'>
              <FacebookChart/>
            </Route>
          </Switch>
        </Router>

        <Footer/>
      </div>
    );
  }
}

export default App;
