import React, { Component } from "react";
import "./SortingPanel.scss";

export class SortingPanel extends Component {
    render() {
        return (
            <div className="sorting-panel-wrap">
                <fieldset className="sorting-fieldset">
                    <legend className="sorting-legend">Filter by gender</legend>
                    <label htmlFor="gender-all-sort" className="sorting-label">
                        <input
                            type="radio"
                            name="gender"
                            className="filter-input"
                            id="gender-all-sort"
                        />
                        <span className="sorting-label-text" />
                        All
                    </label>
                    <label htmlFor="gender-male-sort" className="sorting-label">
                        <input
                            type="radio"
                            name="gender"
                            className="filter-input"
                            id="gender-male-sort"
                        />
                        <span className="sorting-label-text" />
                        Male
                    </label>
                    <label
                        htmlFor="gender-female-sort"
                        className="sorting-label"
                    >
                        <input
                            type="radio"
                            name="gender"
                            className="filter-input"
                            id="gender-female-sort"
                        />
                        <span className="sorting-label-text" />
                        Female
                    </label>
                    <label
                        htmlFor="gender-unknown-sort"
                        className="sorting-label"
                    >
                        <input
                            type="radio"
                            name="gender"
                            className="filter-input"
                            id="gender-unknown-sort"
                        />
                        <span className="sorting-label-text" />
                        Unknown
                    </label>
                </fieldset>
                <fieldset className="sorting-fieldset">
                    <legend className="sorting-legend">Filter by name</legend>
                    <label htmlFor="name-asc" className="sorting-label">
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="name-asc"
                        />
                        <span className="sorting-label-text" />
                        Aa-Zz
                    </label>
                    <label htmlFor="name-desc" className="sorting-label">
                        <input
                            type="radio"
                            name="sorting"
                            className="filter-input"
                            id="name-desc"
                        />
                        <span className="sorting-label-text" />
                        Zz-Aa
                    </label>
                </fieldset>
                <button
                    className="reset-filter-button"
                    type="button"
                    onClick={this.props.resetHandler}
                >
                    Reset filter
                </button>
            </div>
        );
    }
}

export default SortingPanel;
