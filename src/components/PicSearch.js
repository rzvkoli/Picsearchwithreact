import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import PicsList from './PicsList';
import './PicSearch.css';

export default class PicSearch extends Component {

  state = { pics:[] };
  
  onInputSubmit = async inputValue => {
    const response = await axios.get('https://api.unsplash.com/search/photos',
        {
          params :{ query:inputValue },
          headers :{
            Authorization:
            'Client-ID siEiZu-_GmYfn3HlHphhXwuhTAe9wao8QcRKOCcDQ5o'
          }
        });
        
        this.setState( { pics : response.data.results} );
  }

  render() {
    return (
      <div className='pic-search'>
        <SearchBar onInputSubmit={this.onInputSubmit}/>
        <PicsList pics={this.state.pics}/>
      </div>
    );
  }
}
