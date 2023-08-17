import './App.css';
import Pokedex from './pages/pokedex';
import PokemonById from './components/pokemonById';
function App() {
  return (
    <div className="App">
      <Pokedex/>
      {/* <PokemonById pokemonId={500}/> */}
    </div>
  );
}

export default App;
