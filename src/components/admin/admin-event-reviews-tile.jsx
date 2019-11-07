// Package Dependences
import React, { Component } from 'react';


class AdminEventReviewsTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Event reviews</h4>
                    <a href="/register-page">
                    <img className="admin-tile-image" src="./images/gallery/CafeImage.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Add, edit and delete event reviews</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminEventReviewsTile;