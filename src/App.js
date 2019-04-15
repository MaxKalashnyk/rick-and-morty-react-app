import React, { Component } from "react";
import "./App.css";
import { getCharactersList } from "./api";
import CharacterList from "./Components/characters-list/CharacterList";

class App extends Component {
    state = {
        charactersList: []
    };

    async componentDidMount() {
        const charactersList = await getCharactersList();
        this.setState({
            charactersList: charactersList
        });
    }

    render() {
        return (
            <div className="App">
                <CharacterList characters={this.state.charactersList} />
            </div>
        );
    }
}

export default App;
