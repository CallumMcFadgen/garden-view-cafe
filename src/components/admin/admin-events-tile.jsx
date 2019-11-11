// Package Dependences
import React, { Component } from 'react';


class AdminEventsTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Events</h4>
                    <a href="/register-page">
                        <img className="admin-tile-image" src="./images/gallery-thumbnails/EventThumbnail.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Edit events</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminEventsTile;