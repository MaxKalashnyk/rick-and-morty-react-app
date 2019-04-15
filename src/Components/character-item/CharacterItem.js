import React, { Component } from "react";

export class CharacterItem extends Component {
    render() {
        const {
            id,
            name,
            species,
            image,
            gender,
            origin,
            status
        } = this.props.data;

        return (
            <div className="character-item">
                <h2 className="character-item__title">{name}</h2>
                <img src={image} alt={name} />
            </div>
        );
    }
}

export default CharacterItem;
