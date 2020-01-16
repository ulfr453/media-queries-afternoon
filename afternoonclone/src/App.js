import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';
import Header from './Component/Header';
import Mid from './Component/Mid'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


  render(){

  
  return (
    <div className= 'bod-man'>
      <header className= 'header'>
       <div>
          <header className= 'top-head'>Start Bootstrap</header>
        </div>
        <div>
          <Button/>
        </div>
      </header>
      <div className= 'center'>
          <Mid/>
      </div>
      
    
    </div>
  );
}
}

export default App;
