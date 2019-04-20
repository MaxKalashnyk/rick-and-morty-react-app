import React, { Component } from "react";
import "./App.css";
import { getCharactersList } from "./api";
import CharacterList from "./Components/CharacterList/CharacterList";

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <aside>hey</aside>
                        </div>
                        <div className="col-md-9">
                            <main>
                                <CharacterList
                                    characters={this.state.charactersList}
                                />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
