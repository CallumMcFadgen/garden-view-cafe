// Package Dependences
import React, { Component } from 'react';


// UI tile for the admin page (blank placeholder image)
class AdminPlaceholderTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="admin-tile">
                    <h4 className="admin-tile-heading">Title</h4>
                    {/* <a> */}
                        <img className="admin-tile-image" src="./images/gallery-thumbnails/placeholderThumbnail.png" alt="placeholder" />
                    {/* </a> */}
                    <p className="admin-tile-text">Desc</p>
                </div>
            </React.Fragment>
        )
    };
};


export default AdminPlaceholderTile;