import React, { Component } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import { Pagination } from "../../constants";
import { CHARACTERSCOUNT } from "../../constants";
import { getCharactersList } from "../../api";
import "./CharacterList.css";

export class CharacterList extends Component {
    constructor() {
        super();
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    componentDidMount() {
        const wrapBlock = document.querySelector(".wrap");
        console.log(this.state);
        const paginationContent = Pagination(
            CHARACTERSCOUNT,
            this.state ? this.state.characterPage : "1"
        );
        wrapBlock.insertAdjacentHTML("beforeend", paginationContent);
        wrapBlock.addEventListener("click", this.handlePaginationClick);
    }

    async handlePaginationClick({ target }) {
        if (target.matches(".pagination-item")) {
            const pageData = target.dataset.page;
            const charactersList = await getCharactersList(pageData);
            this.setState({
                charactersList: charactersList,
                characterPage: pageData
            });
        }
    }

    render() {
        const characters = !this.state
            ? this.props.characters
            : this.state.charactersList;
        const characterList = characters.map(character => {
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
