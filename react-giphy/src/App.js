import React, { Component } from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import './App.css';
// GIPHY API key - 2rIWz3Iud2RuGJVSjAYlbPZJ7SEcYaM2

class App extends Component {
  handleTermChange(term){
    console.log(term);
  }

  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
      <SearchContainer onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

export default App;
