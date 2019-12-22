import React from 'react';
import { NavLink } from 'react-router-dom';
import constant from './../../utils/const';

// class UserTab extends React.Component {
function UserTab(props) {
    const user = props.user;
    const userStatus = constant.status[user.status];

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
                <NavLink to={`/log-call/${user.id}`}>
                    <img src={require('@images/phone.svg')} className="icon" alt="" />
                </NavLink>
                <img src={require('@images/mail.svg')} className="icon" alt="email" />
                <img src={require('@images/message.svg')} className="icon" alt="message" />
                <img src={require('@images/canlendar.svg')} className="icon" alt="canlendar" />
                <img src={require('@images/add-file.svg')} className="icon" alt="add-file" />
            </div>
        </div>
    )
}

export default UserTab;