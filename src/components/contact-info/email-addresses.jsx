// Package Dependences
import React, { Component } from 'react';

class ContactEmails extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-info">
                    <h4 className="contact-info-subheading">Email Addresses</h4>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Cafe</span>&nbsp;-&nbsp;cafe@gvc.co.nz</p>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Kitchen</span>&nbsp;-&nbsp;kitchen@gvc.co.nz</p>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Manager</span>&nbsp;-&nbsp;manager@gvc.co.nz</p>
                </div>
            </React.Fragment>
        )
    };
};

export default ContactEmails;