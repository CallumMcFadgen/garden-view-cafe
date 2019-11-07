// Package Dependences
import React, { Component } from 'react';


class AdminItemReviewsTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Menu reviews</h4>
                    <a href="/register-page">
                        <img className="admin-tile-image" src="./images/gallery/CafeImage.png" alt="placeholder" />
                    </a>
                    <p className="admin-tile-text">Add, edit and delete menu item reviews</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminItemReviewsTile;