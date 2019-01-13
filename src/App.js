import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox'
import Quote from './components/Quote'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <QuoteBox />
        </div>
      </div>
    );
  }
}

export default App;
