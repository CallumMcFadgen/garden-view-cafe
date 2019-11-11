// Package Dependences
import React, { Component } from 'react';


class AdminPlaceholderTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Title</h4>
                    <a href="">
                        <img className="admin-tile-image" src="./images/gallery-thumbnails/placeholderThumbnail.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Desc</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminPlaceholderTile;