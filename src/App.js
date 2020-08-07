import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/Global.js'
import Navigation from './components/navigation.js';
import Footer from './components/footer.js'
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
        <Footer/>
      </div>
    );
  }
}

export default App;
