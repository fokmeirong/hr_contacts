import React from 'react';
import { connect } from "react-redux";
import constant from './../../utils/const';
import action from "./../../redux/user/action";


function UserTab(props) {
    const user = props.user;
    const userStatus = constant.status[user.status];

    function showLogCall() {
        props.dispatch(action.toggleLogCall(true));
    }

    return (
        <div className="user-tab">
            <div className="profile">
                <img src={require('@images/Ellipse 3@2x.png')} className="photo" alt="" />
                <div className="right-panel">
                    <p className={`name ${user.isNew ? 'new-user' : ''} `}>{user.name}</p>
                    <p className={`status ${userStatus && userStatus.class}`}>{userStatus && userStatus.text}</p>
                </div>
            </div>
            <div className="user-operation">
                <img src={require('@images/phone.svg')} className="icon" alt=""  onClick={showLogCall}/>
                <img src={require('@images/mail.svg')} className="icon" alt="email" />
                <img src={require('@images/message.svg')} className="icon" alt="message" />
                <img src={require('@images/canlendar.svg')} className="icon" alt="canlendar" />
                <img src={require('@images/add-file.svg')} className="icon" alt="add-file" />
            </div>
        </div>
    )
}

export default connect()(UserTab);