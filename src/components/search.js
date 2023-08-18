import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SearchBar({ searchQuery, onSearchQueryChange,  handleListClick, pokemonId, setpokemonId }) {
    const [pokemonList, setPokemonList] = useState([])
    const handleSearch = () => {
        onSearchQueryChange("");
    };

    // const handleListClick =(index)=>{
    //     console.log(index);
    // }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1010`);

                // console.log(response.data.results);

                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const pokemonListFiltered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="search-bar">
            <div className='filtered-pokemon-list-div'>
                {searchQuery.length > 0 && (
                    <ul className="filtered-pokemon-list">
                        {pokemonListFiltered.map((pokemon, index) => (
                            <li onClick={() => handleListClick(pokemonList.indexOf(pokemon) + 1)} key={index}>{pokemon.name}</li>
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