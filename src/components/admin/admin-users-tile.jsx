// Package Dependences
import React, { Component } from 'react';


class AdminUserTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Users</h4>
                    <a href="/admin-menu-page">
                        <img className="admin-tile-image" src="./images/gallery-thumbnails/UsersThumbnail.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Edit users</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminUserTile;