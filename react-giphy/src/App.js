import React, { Component } from 'react';
import SearchContainer from './Components/SearchContainer';
import GiphyList from './Components/GiphyList';
import request from 'superagent';
import './App.css';
// GIPHY API key - &api_key=2rIWz3Iud2RuGJVSjAYlbPZJ7SEcYaM2
// http://api.giphy.com/v1/gifs/search?q=${term}&api_key=2rIWz3Iud2RuGJVSjAYlbPZJ7SEcYaM2

class App extends Component {
  constructor(){
    super();

    this.state = {gifs: []}
  }
  handleTermChange(term){
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=2rIWz3Iud2RuGJVSjAYlbPZJ7SEcYaM2`;
    request.get(url, function(err, res) {
      console.log(res.body.data[0]);
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
      <SearchContainer onTermChange={this.handleTermChange} />
      <GiphyList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
