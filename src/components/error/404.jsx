// Package Dependences
import React, { Component } from 'react';

class PageNotFoundTile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="not-found-tile">
                    <h4 className="not-found-heading">404 Error</h4>
                    <h4 className="not-found-sub-heading">Ooops! page not found</h4>
                    <img className="not-found-image" src="./images/error/page-not-found.png" alt="spilled coffee" />
                    <p className="not-found-text">Sorry the page you are looking for does not currently exist.  Please contact your local web administrator asap to help us to resolve the issue</p>
                </div>
            </React.Fragment>
        )
    };
};

export default PageNotFoundTile;