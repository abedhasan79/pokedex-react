import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonById = ({ listRefId, pokemonId }) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pokeDescription, setPokeDescription] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

                // console.log(response.data);

                setPokemon(response.data);

                const response2 = await axios.get(response.data.species.url);
                // console.log(response2.data);
                setPokeDescription(response2.data);
                // console.log(pokemon)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }

        };

        fetchData();
    }, [pokemonId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!pokemon || !pokeDescription) {
        return <div>No data available.</div>;
    }

    return (

        // <ul ref={listRef} className='poke-ul scrollTop'>
        //     {pokemonList.map((pokemon, index) => (
        //         <div onClick={()=>handleListClick(index+startIndex)} key={index} className='pokemon-list-div'>
        //             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + startIndex}.png`} alt='pokemon' />
        //             <li >{pokemon.name}</li>
        //         </div>

        //     ))}
        // </ul>
        <div ref={listRefId} className='poke-ul'>

            <div className='poke-id'>
                <div>
                    <div className='poke-image-div'>
                        {pokemon.sprites.other.dream_world.front_default === null
                            ? <img src={pokemon.sprites.front_default} alt='pokemon' />
                            : <img src={pokemon.sprites.other.dream_world.front_default} alt='pokemon' />
                        }
                    </div>

                    <div className='poke-name-div'>
                        <h2>{pokemon.name}</h2>
                    </div>

                    <div className='poke-type-div'>
                        {pokemon.types.map((type, index) => (
                            <div key={index}>
                                {type.type.name}
                            </div>
                        ))}
                    </div>

                    <div className='poke-ability-div'>
                        {pokemon.abilities.map((ability, index) => (
                            <div key={index}>
                                Ability {index + 1}: {ability.ability.name}
                            </div>
                        ))}
                    </div>
                    <div className='poke-egg-div'>
                        {pokeDescription.egg_groups.map((egg, index) => (
                            <div key={index}>
                                Egg Group {index + 1}: {egg.name}
                            </div>
                        ))}
                    </div>
                    <div className='poke-stat-div'>
                        {pokemon.stats.map((stat, index) => (
                            <div key={index}>
                                {stat.stat.name}: {stat.base_stat}
                            </div>
                        ))}
                    </div>



                    <div className='poke-description-div'>
                        {/* {pokeDescription.flavor_text_entries.map((text, index) => (
                            <p key={index}>
                                {text.language.name === "en" ? text.flavor_text : ""}
                            </p>
                        ))} */}
                        <p>{pokeDescription.flavor_text_entries.find(text => text.language.name === "en")?.flavor_text || ""}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PokemonById;