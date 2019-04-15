import React, { Component } from "react";
import CharacterItem from "../character-item/CharacterItem";

export class CharacterList extends Component {
    render() {
        console.log(this.props);
        const characterList = this.props.characters.map(character => {
            return <CharacterItem key={character.id} data={character} />;
        });
        return <div className="characters-wrap">{characterList}</div>;
    }
}

export default CharacterList;
