// Package Dependences
import React, { Component } from 'react';

class ContactLocation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-info">
                    <h4 className="contact-info-subheading">Location</h4>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Queens Gardens</span></p>
                    <p className ="contact-info-text">208 Bridge Street</p>
                    <p className ="contact-info-text">8.00am - 9.00pm</p>
                    <p className ="contact-info-text">New Zealand</p>
                </div>
            </React.Fragment>
        )
    };
};

export default ContactLocation;