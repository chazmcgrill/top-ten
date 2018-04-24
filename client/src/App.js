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
    this.handleDelete = this.handleDelete.bind(this);
    this.postMovie = this.postMovie.bind(this);
  }

  fetchAll() {
    fetch('/users')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  async postMovie(m) {
    const movie = {
      title: m.Title,
      imdb_id: m.imdbID,
      img_url: m.Poster
    }
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
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

  handleDelete(id) {
    console.log(id);
    fetch('/users/' + id, {
      method: 'delete'
    })
    .then(response => response.json());
    this.fetchAll();
  }

  componentDidMount() {
    this.fetchAll();
  }

  render() {
    return (
      <div className="App">
        <h1>top ten</h1>
        <SearchBar handleSubmit={this.handleSearch}/>
        <div>
          {this.state.movies.map(movie =>
            <div 
              key={movie.id} 
              onClick={() => this.handleDelete(movie.id)} 
              id={movie.id} >
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
