import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor (props) {
    super(props)
    
    
  }
  render(){
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}

export default App;
