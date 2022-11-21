import React,{ Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import searchApi from '../../services/searchApi';

class MusicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchInput: '',
        searchResults:[]
    };
  }
  getMusic=(e)=>{
    this.setState({
        searchInput: e.target.value,
    });
    searchApi(this.state.searchInput).then(
        searchResults=> {
          this.setState({
            searchResults: searchResults
          })
        }
    )
  }
  render() {
    return (
        <>
          <SearchBar getMusic={this.getMusic}/>
          {this.state.searchResults && 
            <SearchResults results={this.state.searchResults}/>
          }
        </>

    );
  }
}
  
export default MusicSearch;
  