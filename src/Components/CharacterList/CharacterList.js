import React, { Component } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import Pagination from "../Pagination/Pagination";

export class CharacterList extends Component {
    render() {
        console.log(this.props);
        const characterList = this.props.characters.map(character => {
            return <CharacterItem key={character.id} data={character} />;
        });
        return (
            <div className="wrap">
                <div className="characters-wrap row">{characterList}</div>
                <Pagination />
            </div>
        );
    }
}

export default CharacterList;
