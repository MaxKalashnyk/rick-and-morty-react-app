import React, { Component } from "react";
import "./App.css";
import { getCharactersList } from "./api";
import CharacterList from "./Components/CharacterList/CharacterList";
import FilterPanel from "./Components/FilterPanel/FilterPanel";

class App extends Component {
    state = {
        charactersList: [],
        characterName: ""
    };

    async componentDidMount() {
        const charactersList = await getCharactersList();
        this.setState({
            charactersList: charactersList
        });
    }

    performSearch = event => {
        event.preventDefault();
        const elemsList = Array.from(event.target.elements);
        const inputEl = elemsList.find(item => item.name === "search");
        if (inputEl) {
            const inputValue = inputEl.value.toLowerCase();

            this.setState({
                characterName: inputValue
            });
        }
    };

    render() {
        const { charactersList, characterName } = this.state;

        const filteredList = charactersList.filter(character => {
            const lowercasedItem = character.name.toLowerCase();
            return lowercasedItem.includes(characterName);
        });

        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <aside>
                                <FilterPanel
                                    handleSearch={this.performSearch}
                                />
                            </aside>
                        </div>
                        <div className="col-md-9">
                            <main>
                                <CharacterList characters={filteredList} />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
