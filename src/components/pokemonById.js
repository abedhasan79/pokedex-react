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

                console.log(response.data);

                setPokemon(response.data);

                const response2 = await axios.get(response.data.species.url);
                console.log(response2.data);
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

            <div>
                {pokemon.sprites.other.dream_world.front_default === null
                    ? <img src={pokemon.sprites.front_default} alt='pokemon' />
                    : <img src={pokemon.sprites.other.dream_world.front_default} alt='pokemon' />
                }
            </div>

            <div>
                <h2>{pokemon.name}</h2>
            </div>

            <div>
                {pokemon.types.map((type,index)=>(
                    <div key={index}>
                        Type {index+1}: {type.type.name}
                    </div>
                ))}
            </div>

            <div>
                {pokemon.abilities.map((ability,index)=>(
                    <div key={index}>
                        Ability {index+1}: {ability.ability.name}
                    </div>
                ))}
            </div>

            <div>
                {pokemon.stats.map((stat,index)=>(
                    <div key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </div>
                ))}
            </div>

            <div>
                {pokeDescription.egg_groups.map((egg, index)=>(
                    <div key={index}>
                        Egg Group {index+1}: {egg.name}
                    </div>
                ))}
            </div>

            <div>
                {pokeDescription.flavor_text_entries.map((text, index)=>(
                    <div key={index}>
                        {text.language.name==="en"?text.flavor_text:""}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PokemonById;