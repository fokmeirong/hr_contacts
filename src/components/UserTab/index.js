import React from 'react';
import { connect } from "react-redux";
import constant from './../../utils/const';
import action from "./../../redux/user/action";
import { ActionSheet } from 'antd-mobile';
import axios from './../../server';
import config from './../../utils/config';
import './userTab.scss';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

function UserTab(props) {
    const user = props.user;
    const userStatus = constant.status[user.status];

    function showLogCall() {
        props.dispatch(action.toggleLogCall(true));
    }

    const showActionSheet = () => {
        const BUTTONS = ['Mark as Hired', 'Follow Up', 'Cancel'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            maskClosable: true,
            wrapProps,
        },
        (buttonIndex) => {
            console.log(buttonIndex);
            if (buttonIndex === 0) {
                makeAsHired();
            }
        });
    }

    function makeAsHired() {
        axios({
            method: 'post',
            url: config.api.markAsHired,
            data: {
                id: props.user.id
            }
        }).then(() => {
            props.onRefresh();
        });;
    }

    return (
        <div className="user-tab">
            <div className="profile">
                <img src={require('@images/Ellipse 3@2x.png')} className="photo" alt="" />
                <div className="right-panel">
                    <p className={`name ${user.isNew ? 'new-user' : ''} `}>{user.name}</p>
                    <p onClick={showActionSheet} className={`status ${userStatus && userStatus.class}`}>{userStatus && userStatus.text}</p>
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