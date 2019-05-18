import React, { Component } from "react";
import "./App.scss";
import { getCharactersList } from "./api";
import FilterPanel from "./Components/FilterPanel/FilterPanel";
import { APIKeysObj } from "./constants";
import Spinner from "./Components/Spinner/Spinner";
import Pagination from "./Components/Pagination/Pagination";

class App extends Component {
    constructor() {
        super();
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    state = {
        charactersList: [],
        characterName: "",
        sortingNameParam: "",
        gender: "",
        currentPage: null,
        totalPages: null
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

    performFilteringByName = event => {
        if (event.target.id === "name-asc") {
            this.setState({
                sortingNameParam: "asc"
            });
        } else if (event.target.id === "name-desc") {
            this.setState({
                sortingNameParam: "desc"
            });
        } else if (event.target.id === "gender-all-sort") {
            this.setState({
                gender: ""
            });
        } else if (event.target.id === "gender-female-sort") {
            this.setState({
                gender: APIKeysObj.genderFemale
            });
        } else if (event.target.id === "gender-male-sort") {
            this.setState({
                gender: APIKeysObj.genderMale
            });
        } else if (event.target.id === "gender-unknown-sort") {
            this.setState({
                gender: APIKeysObj.genderUnknown
            });
        }
    };

    async onPageChanged(data) {
        const { currentPage } = data;
        const charactersList = await getCharactersList(currentPage);

        this.setState({ currentPage, charactersList });
    }

    render() {
        const {
            charactersList,
            characterName,
            sortingNameParam,
            gender
        } = this.state;

        let filteredList = charactersList.filter(character => {
            const lowercasedItem = character.name.toLowerCase();
            return lowercasedItem.includes(characterName);
        });

        if (sortingNameParam === "asc") {
            filteredList = filteredList.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });
        } else if (sortingNameParam === "desc") {
            filteredList = filteredList.sort(function(a, b) {
                return b.name.localeCompare(a.name);
            });
        }

        if (gender !== "") {
            filteredList = filteredList.filter(item => {
                return item.gender === gender;
            });
        }

        const CharacterListComponent = React.lazy(props =>
            import("./Components/CharacterList/CharacterList")
        );

        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="filter-panel">
                            <aside>
                                <FilterPanel
                                    handleSearch={this.performSearch}
                                    handleFilter={this.performFilteringByName}
                                />
                            </aside>
                        </div>
                        <div className="characters-panel">
                            <main>
                                <React.Suspense fallback={<Spinner />}>
                                    <CharacterListComponent
                                        characters={filteredList}
                                    />
                                    <Pagination
                                        totalRecords={20}
                                        pageNeighbours={1}
                                        onPageChanged={this.onPageChanged}
                                    />
                                </React.Suspense>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
