import React, { Component } from "react";
import "./CharacterItem.scss";

export class CharacterItem extends Component {
    render() {
        const { name, image, gender } = this.props.data;

        return (
            <div className="character-item">
                <div
                    className={`character-item__thumb ${
                        gender.toUpperCase() === "MALE"
                            ? "thumb-male"
                            : "thumb-female"
                    }`}
                >
                    <figure className="item-thumb-wrap">
                        <img
                            src={image}
                            alt={name}
                            className="item-thumb-image"
                        />
                    </figure>
                </div>
                <h2 className="character-item__title">{name}</h2>
            </div>
        );
    }
}

export default CharacterItem;
