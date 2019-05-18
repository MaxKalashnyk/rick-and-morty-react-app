import React, { Component, Fragment } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
// import { CHARACTERSCOUNT } from "../../constants";
// import Pagination from "../Pagination/Pagination";
// import { getCharactersList } from "../../api";
import "./CharacterList.scss";

export class CharacterList extends Component {
    render() {
        const characterList = this.props.characters.map(character => {
            return <CharacterItem key={character.id} data={character} />;
        });

        return (
            <Fragment>
                <div className="characters-wrap row">{characterList}</div>
                {/* <Pagination
                    items={this.props.characters}
                    onChangePage={this.onChangePage}
                /> */}
            </Fragment>
        );
    }
}

export default CharacterList;
