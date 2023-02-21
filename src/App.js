import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // name = "Beast"
  render() {
    return (
      <div>
        {/* Hey! This is {this.name} */}
        
        <Navbar/>
        <News pageSize={6}/>
      </div>
    )
  }
}

