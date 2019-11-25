// Package Dependences
import React, { Component } from 'react';


// UI tile for the admin page (menu items)
class AdminMenuTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Menu</h4>
                    <a href="/admin-menu-page">
                        <img className="admin-tile-image" src="./images/gallery-thumbnails/MenuThumbnail.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Edit menu items</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminMenuTile;