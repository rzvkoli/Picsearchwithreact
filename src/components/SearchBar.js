import React, { Component } from 'react';
import './SearchBar.css';
import { BsSearch } from "react-icons/bs";


export default class SearchBar extends Component {

    state = { inputValue : '' }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onInputSubmit(this.state.inputValue)

    }

  render() {
    return (
      <div className='search-bar'>
        <header className='header'>
          <h1 className='title'>Pic Search</h1>
          <p className='txt'>Welcome to pic search</p>
        </header>
        <div className='form-search-button'>
          <form className='form' onSubmit={this.onFormSubmit} >
            <label className='label'>Enter the word you want below</label>
            <input
              className='field'
              type='text'
              placeholder='Search'
              value={this.state.inputValue}
              onChange={(e) => this.setState({inputValue : e.target.value})}
              />
          </form>
          <div className='search-button'>
            <button
              className='button'
              onClick={this.onFormSubmit} >
              <BsSearch className='icon-search' size={25}/>
              </button>
          </div>
        </div>
      </div>
    );
  }
}
