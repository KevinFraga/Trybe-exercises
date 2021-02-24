import React from 'react';
import PropTypes from 'prop-types';

/*
Pokemon : como o próprio nome diz, esse componente representa um pokemon.
Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico.
Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
nome do pokemon;
tipo do pokemon;
peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon.
*/

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pkmn'>
        <section className='pkmn-info'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>Average weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        </section>
        <section className='pkmn-image'>
          <img src={this.props.pokemon.image} alt={this.props.pokemon.name} />
        </section>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
  })
}
  

export default Pokemon;
