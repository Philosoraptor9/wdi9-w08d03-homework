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

    this.state = {gifs: []};
    // this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange = async (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=2rIWz3Iud2RuGJVSjAYlbPZJ7SEcYaM2`;
    // request.get(url, (err, res) => {
    //   this.setState({gifs: res.body.data});
    // });
    const result = await fetch(url);
    const parsed = await result.json();
    console.log(parsed);
    this.setState({gifs: parsed.data});
  }

  render() {
    return (
      <div className="App">
      <h1>Search GIPHYs!</h1>
      <SearchContainer onTermChange={term => this.handleTermChange(term)} />
      <GiphyList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
