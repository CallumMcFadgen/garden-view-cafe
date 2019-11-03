// Package Dependences
import React, { Component } from 'react';

class GalleryTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="gallery-tile">
                    <h4 className="gallery-heading">Image</h4>
                    <img className="gallery-tile-image" src="./images/gallery/CafeImage.png" alt="placeholder" />
                    <p className="gallery-tile-text">Engari, ko te whakautu o ona tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore he wahi mau kei te waka nei, na reira me noho tau ki tatahi ke”.</p>
                </div>
            </React.Fragment>
        )
    };
};

export default GalleryTile;