import React from 'react';

function SearchBar({ searchQuery, onSearchQueryChange, onSearch }) {

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="search-bar">
            <input
                className='letter'
                type="text"
                placeholder='Pokemon Name'
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
            />
            <div>
                <button className='btn btn-primary' onClick={handleSearch}>SEARCH</button>
                <div className="search-light"></div>
            </div>
        </div>
    );
}

export default SearchBar;