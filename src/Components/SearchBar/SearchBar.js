import React, { Component } from "react";

const minSearchInputValueLength = 3;

export class SearchBar extends Component {
    state = {
        searchValue: ""
    };

    searchCharacter = ({ target }) => {
        if (target.value.length >= minSearchInputValueLength) {
            this.setState({ searchValue: target.value });
        }
    };

    render() {
        return (
            <div className="search-wrap">
                <input
                    type="text"
                    className="search-input"
                    onChange={this.searchCharacter}
                    name="search"
                    placeholder="Type smth..."
                />
                <button
                    className="search-button"
                    onClick={this.props.handleSearch}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default SearchBar;
