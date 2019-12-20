import React from 'react';

class UserTab extends React.Component {
    render() {
        return (
            <div className="user-tab">
                <div className="profile">
                    <img src={require('@images/Ellipse 3@2x.png')} className="photo" alt="photo" />
                    <div className="right-panel">
                        <p className="name new-user">John Chan</p>
                        <p className="status">Open</p>
                    </div>
                </div>
                <div className="user-operation">
                    <img src={require('@images/phone.svg')} className="icon" alt="photo" />
                    <img src={require('@images/mail.svg')} className="icon" alt="email" />
                    <img src={require('@images/message.svg')} className="icon" alt="message" />
                    <img src={require('@images/canlendar.svg')} className="icon" alt="canlendar" />
                    <img src={require('@images/add-file.svg')} className="icon" alt="add-file" />
                </div>
            </div>
        )
    }
}

export default UserTab;