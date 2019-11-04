// Package Dependences
import React, { Component } from 'react';

class ContactBizHours extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-info">
                    <h4 className="contact-info-subheading">Opening Hours</h4>
                    <p className ="contact-info-text">Open 7 days</p>
                    <p className ="contact-info-text">Monday to Sunday </p>
                    <p className ="contact-info-text">8.00am - 9.00pm</p>
                    <p className ="contact-info-text-italic">excluding public holidays</p>
                </div>
            </React.Fragment>
        )
    };
};

export default ContactBizHours;