import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PokemonById from './pokemonById';
const Generations = ({ listRef, listRefId, offset, startIndex, pokemonClicked, setPokemonClicked }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonId, setPokemonId] = useState(0);
    // const [pokemonClicked, setPokemonClicked] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?${offset}`);

                // console.log(response.data);

                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [offset]);

    const handleListClick = (index) => {
        // console.log(index);
        setPokemonClicked(true);
        setPokemonId(index);
    }

    // console.log(pokemonList);

    return (

        <>
            {pokemonClicked ?
                <PokemonById listRefId={listRefId} pokemonId={pokemonId}/>
                : (
                    <ul ref={listRef} className='poke-ul scrollTop'>
                        {pokemonList.map((pokemon, index) => (
                            <div onClick={() => handleListClick(index + startIndex)} key={index} className='pokemon-list-div'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + startIndex}.png`} alt='pokemon' />
                                <li >{pokemon.name}</li>
                            </div>

                        ))}
                    </ul>
                )}
        </>

    );
};

export default Generations;