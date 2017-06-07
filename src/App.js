import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  constructor() {
    super();
    this.state = { gifs: [], loading: true };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = query => {
    const url = query ? `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=24` :
                        'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=24';
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ gifs: res.data, loading: false }))
      .catch(err => console.log('Error fetching and parsing data.', err));
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? <p>Loading...</p> : <GifList data={this.state.gifs} />}
        </div>
      </div>
    );
  }
}
