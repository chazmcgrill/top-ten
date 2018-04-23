import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          onChange={this.handleInput} 
          value={this.state.searchText} 
          placeholder="film title"
        />
        <button onClick={this.handleSubmit} >Search</button>
      </form>
    );
  }
}

export default SearchBar;