import React from 'react';
import Pokemon from './Pokemon';

/*
Pokedex : esse componente representa a enciclopédia de pokemons.
Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.
Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .
*/

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        {this.props.data.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index} />)}
      </div>
    );
  }
}

export default Pokedex;
