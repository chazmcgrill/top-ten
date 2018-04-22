import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { movies: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="App">
        <h1>top ten</h1>
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
