// Package Dependences
import React, { Component } from 'react';

class ContactPhone extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-info">
                    <h4 className="contact-info-subheading">Phone</h4>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Cafe</span>&nbsp;-&nbsp;(03)5739784</p>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Kitchen</span>&nbsp;-&nbsp;(03)5739786</p>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Manager</span>&nbsp;-&nbsp;027 384757768</p>
                    <p className ="contact-info-text"><span className="contact-info-bold-text">Fax</span>&nbsp;-&nbsp;(03)5739790</p>
                </div>
            </React.Fragment>
        )
    };
};

export default ContactPhone;