import React from 'react';

class ContactDetail extends React.Component {
    render() {
        return (
            <div className="contact-detail">
                <p className="pre">
                    <label className="text">Contact Detail</label>
                    <label className="edit">Edit</label>
                </p>
                <div className="content-tab detail-tab">
                    <p>
                        <span className="title">Email</span>
                        <span className="content">john@gmail.com</span>
                    </p>
                    <p>
                        <span className="title">Phone</span>
                        <span className="content">09969712111</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default ContactDetail;