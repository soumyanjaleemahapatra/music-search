import React from 'react';
import SearchIcon from '../../assets/SearchIcon';
function SearchBar({getMusic}) {
    return (
        <div className="searchbar">
            <SearchIcon/>
            <input className="searchInput" type="text" onChange={e=>getMusic(e)}/>
        </div>
    );
}

export default SearchBar;