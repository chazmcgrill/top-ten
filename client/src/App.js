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
    this.postMovie = this.postMovie.bind(this);
  }

  fetchAll() {
    fetch('/users')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  async postMovie(movie) {
    console.log(movie);
    const m = {
      title: movie.Title,
      imdb_id: movie.imdbID,
      img_url: movie.Poster,
      ranking: 6
    }
    const response = await fetch('/addmovie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(m)
    })
    const status = await response.status;

    if (status === 200) {
      this.fetchAll();
    }
  }

  handleSearch(text) {
    console.log(text);
    fetch(`http://www.omdbapi.com/?t=${text}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(this.postMovie)
  }

  componentDidMount() {
    this.fetchAll();
    console.log(this);
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
                src={movie.img_url} 
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
