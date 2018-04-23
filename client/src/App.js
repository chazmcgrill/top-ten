import React, { Component } from 'react';
import SearchBar from './SearchBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(text) {
    console.log(text);
    fetch(`http://www.omdbapi.com/?t=${text}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(movie => console.log(movie))
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="App">
        <h1>top ten</h1>
        <SearchBar handleSubmit={this.handleSearch}/>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          {this.state.movies.map(movie =>
            <div key={movie.id}>
              <img 
                src={`https://ia.media-imdb.com/images/M/${movie.img_url}`} 
                alt={movie.title}
                style={{width: '250px'}}
              />
            </div>     
          )}
        </div>
      </div>
    );
  }
}

export default App;
