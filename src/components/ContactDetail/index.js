import React from 'react';
import { connect } from "react-redux";
import action from "./../../redux/user/action";

// class ContactDetail extends React.Component {
function ContactDetail(props) {
    const user = props.user;

    function showLogCall() {
        props.dispatch(action.toggleLogCall(true));
    }

    return (
        <div className="contact-detail">
            <p className="pre">
                <label className="text">Contact Detail</label>
                <label className="right" onClick={showLogCall}>Edit</label>
            </p>
            <div className="content-tab detail-tab">
                <p>
                    <span className="title">Email</span>
                    <span className="content">{user.email}</span>
                </p>
                <p>
                    <span className="title">Phone</span>
                    <span className="content">{user.phone}</span>
                </p>
            </div>
        </div>
    )
}

export default connect()(ContactDetail);