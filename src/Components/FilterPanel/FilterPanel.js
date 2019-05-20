import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SortingPanel from "../SortingPanel/SortingPanel";

export class FilterPanel extends Component {
    render() {
        return (
            <form
                className="filter-form"
                onSubmit={this.props.handleSearch}
                onChange={this.props.handleFilter}
                ref={this.props.refProp}
            >
                <SearchBar />
                <SortingPanel resetHandler={this.props.handleResetFilter} />
            </form>
        );
    }
}

export default FilterPanel;
