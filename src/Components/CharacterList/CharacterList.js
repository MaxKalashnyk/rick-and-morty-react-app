import React, { Component } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharacterList.css';

export class CharacterList extends Component {
  render() {
    console.log(this.props);
    const characterList = this.props.characters.map(character => {
      return <CharacterItem key={character.id} data={character} />;
    });

    return (
      <div className="wrap">
        <div className="characters-wrap row">{characterList}</div>
      </div>
    );
  }
}

export default CharacterList;
