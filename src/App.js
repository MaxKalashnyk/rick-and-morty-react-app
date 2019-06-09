import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilterPanel from "./Components/FilterPanel/FilterPanel";
import Spinner from "./Components/Spinner/Spinner";
import Pagination from "./Components/Pagination/Pagination";
import About from "./Components/pages/About";
import Header from "./Components/layout/Header";
import { getCharactersList } from "./api";
import { APIKeysObj } from "./constants";
import "./App.scss";

class App extends Component {
    constructor() {
        super();
        this.characterListCopy = [];
        this.onPageChanged = this.onPageChanged.bind(this);
        this.performResetFilter = this.performResetFilter.bind(this);
        this.formRef = React.createRef();
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
        this.characterListCopy = charactersList;
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

    performResetFilter = () => {
        this.setState({
            charactersList: this.characterListCopy,
            characterName: "",
            sortingNameParam: "",
            gender: ""
        });
        this.formRef.current.reset();
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
            <Router>
                <div className="App">
                    <Header />
                    <Route
                        exact
                        path="/rick-and-morty-react-app/"
                        render={props => (
                            <div className="container main-content">
                                <div className="row">
                                    <div className="filter-panel">
                                        <aside className="aside">
                                            <FilterPanel
                                                handleSearch={
                                                    this.performSearch
                                                }
                                                handleFilter={
                                                    this.performFilteringByName
                                                }
                                                handleResetFilter={
                                                    this.performResetFilter
                                                }
                                                refProp={this.formRef}
                                            />
                                        </aside>
                                    </div>
                                    <div className="characters-panel">
                                        <main>
                                            <React.Suspense
                                                fallback={<Spinner />}
                                            >
                                                <CharacterListComponent
                                                    characters={filteredList}
                                                />
                                                <Pagination
                                                    totalRecords={20}
                                                    pageNeighbours={1}
                                                    onPageChanged={
                                                        this.onPageChanged
                                                    }
                                                />
                                            </React.Suspense>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        )}
                    />

                    <Route
                        path="/rick-and-morty-react-app/about"
                        component={About}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
