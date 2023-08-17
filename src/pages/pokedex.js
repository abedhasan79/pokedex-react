import React, { useState, useRef } from "react";

import Generations from '../components/generations';
import TopPanel from "../components/topPanel";
import ImageLight from "../components/imagelight";
import Keyboard from "../components/keyboard";
import SearchBar from "../components/search";

function Pokedex() {

    const [searchQuery, setSearchQuery] = useState("")
    const handleKeyboardClick = (key) => {
        setSearchQuery(searchQuery + key);
    };
    const handleSearch = (query) => {
        // Perform search logic here
        console.log('Searching for:', query);
    };

    const [genCount, setGenCount] = useState(0);

    const handleGenChangeRight = () => {
        setGenCount(genCount + 1)
        if (genCount === 8) {
            setGenCount(0);
        }
        // console.log(genCount);
    }

    const handleGenChangeLeft = () => {
        setGenCount(genCount - 1)
        if (genCount <= 0) {
            setGenCount(0);
        }
        // console.log(genCount);
    }
    const [pokemonClicked, setPokemonClicked] = useState(false);
    const handleReturn = () => {
        setPokemonClicked(false);
        
    }

    const listRef = useRef(null);
    const listRefId = useRef(null);
    const scrollUp = () => {
        const scrollAmount = -100;
        if (!pokemonClicked) {
            listRef.current.scrollTop += scrollAmount;
        } else {
            listRefId.current.scrollTop += scrollAmount;
        }


    }
    const scrollDown = () => {
        const scrollAmount = 100;
        if (!pokemonClicked) {
            listRef.current.scrollTop += scrollAmount;
        } else {
            listRefId.current.scrollTop += scrollAmount;
        }
    }

    return (
        <div className="pokedexMainDiv">
            <div className="pokedex-card">
                <div>
                    <div>
                        <TopPanel />
                    </div>

                    <div className="pokemon-display">
                        <div className="poke-container-main">
                            <div className="pokemon-container">
                                <div>
                                    <div>
                                        <ImageLight />
                                    </div>
                                    <div className="poke-info">
                                        {genCount === 0 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'limit=151'} listRef={listRef} listRefId={listRefId} startIndex={1} /> : ""}
                                        {genCount === 1 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=151&limit=100'} startIndex={152} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 2 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=251&limit=135'} startIndex={252} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 3 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=386&limit=108'} startIndex={387} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 4 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=494&limit=155'} startIndex={495} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 5 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=649&limit=72'} startIndex={650} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 6 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=721&limit=88'} startIndex={722} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 7 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=809&limit=96'} startIndex={810} listRef={listRef} listRefId={listRefId}/> : ""}
                                        {genCount === 8 ? <Generations setPokemonClicked={setPokemonClicked} pokemonClicked={pokemonClicked} offset={'offset=905&limit=105'} startIndex={906} listRef={listRef} listRefId={listRefId}/> : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-right-up-down">
                            <button className="button-1" onClick={handleGenChangeLeft}>&#8592;</button>
                            <button className="button-2" onClick={scrollUp}>&#8593;</button>
                            <button className="button-3" onClick={handleGenChangeRight}>&#8594;</button>
                            <button className="button-4" onClick={scrollDown}>&#8595;</button>
                            <button className="button-5 btn-primary" onClick={handleReturn}>RETURN</button>
                        </div>
                    </div>

                    <div className="middle-gap-1"></div>
                    <div className="middle-gap-2"></div>
                    <div className="middle-gap-3"></div>
                    <div className="middle-gap-4"></div>
                    <div>

                        <div>
                            <SearchBar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} onSearch={handleSearch} />
                        </div>
                        <div>
                            <Keyboard onClick={handleKeyboardClick} />
                        </div>

                        <div className="bottom-bar">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pokedex;