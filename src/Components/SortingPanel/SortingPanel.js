import React, { Component } from "react";

export class SortingPanel extends Component {
    render() {
        return (
            <div className="sorting-panel-wrap">
                <fieldset>
                    <legend>Filter by gender</legend>
                    <label htmlFor="gender-all-sort">
                        All
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="gender-all-sort"
                        />
                    </label>
                    <label htmlFor="gender-male-sort">
                        Male
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="gender-male-sort"
                        />
                    </label>
                    <label htmlFor="gender-female-sort">
                        Female
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="gender-female-sort"
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Filter by name</legend>
                    <label htmlFor="name-asc">
                        Aa-Zz
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="name-asc"
                        />
                    </label>
                    <label htmlFor="name-desc">
                        Zz-Aa
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="name-desc"
                        />
                    </label>
                </fieldset>
            </div>
        );
    }
}

export default SortingPanel;
