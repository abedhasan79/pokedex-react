import React from 'react';

function SearchBar({ searchQuery, onSearchQueryChange, pokemonList }) {

    const handleSearch = () => {
        onSearchQueryChange("");
    };

    const pokemonListFiltered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-bar">
            <div className='filtered-pokemon-list-div'>
                {searchQuery.length > 0 && (
                    <ul className="filtered-pokemon-list">
                        {pokemonListFiltered.map((pokemon, index) => (
                            <li key={index}>{pokemon.name}</li>
                        ))}
                    </ul>
                )}
            </div>
            <input
                className='letter'
                type="text"
                placeholder='Pokemon Name'
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
            />
            <div>
                <button className='btn btn-primary' onClick={handleSearch}>CLEAR SEARCH</button>
                <div className="search-light"></div>
            </div>


        </div>
    );
}

export default SearchBar;