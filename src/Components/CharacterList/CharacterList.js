import React, { Component } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import "./CharacterList.scss";

export class CharacterList extends Component {
    render() {
        const characterList = this.props.characters.map(character => {
            return <CharacterItem key={character.id} data={character} />;
        });

        return <div className="characters-wrap row">{characterList}</div>;
    }
}

export default CharacterList;
