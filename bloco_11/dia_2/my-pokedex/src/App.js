import logo from './logo.svg';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import './Pokedex.css';

function App() {
  return (
    <div className="App">
      <Pokedex data={pokemons} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
