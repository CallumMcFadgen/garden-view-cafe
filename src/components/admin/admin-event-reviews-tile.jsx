// Package Dependences
import React, { Component } from 'react';


// UI tile for the admin page (event reviews)
class AdminEventReviewsTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Event reviews</h4>
                    <a href="/register-page">
                    <img className="admin-tile-image" src="./images/gallery-thumbnails/EventReviewThumbnail.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Edit event reviews</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminEventReviewsTile;