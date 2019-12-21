import React from 'react';
import { NavLink } from 'react-router-dom';

class SearchBarInput extends React.Component {
    render() {
        return (
            <div className="contact-list">
                <ul>
                    <li>
                        <NavLink to="/detail">
                            <div className="left-panel">
                                <p className="name new-user">John Chan</p>
                                <p className="email">john@gmail.com</p>
                            </div>
                            <div className="right-panel">
                                <span className="phone">
                                    <img src={require('@images/phone.svg')} alt="tupan" />
                                </span>
                                <span className="email">
                                    <img src={require('@images/mail.svg')} alt="tupan" />
                                </span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/detail">
                            <div className="left-panel">
                                <p className="name new-user">John Chan</p>
                                <p className="email">john@gmail.com</p>
                            </div>
                            <div className="right-panel">
                                <span className="phone">
                                    <img src={require('@images/phone.svg')} alt="tupan" />
                                </span>
                                <span className="email">
                                    <img src={require('@images/mail.svg')} alt="tupan" />
                                </span>
                            </div>
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to="/detail">
                            <div className="left-panel">
                                <p className="name new-user">John Chan</p>
                                <p className="email">john@gmail.com</p>
                            </div>
                            <div className="right-panel">
                                <span className="phone">
                                    <img src={require('@images/phone.svg')} alt="tupan" />
                                </span>
                                <span className="email">
                                    <img src={require('@images/mail.svg')} alt="tupan" />
                                </span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SearchBarInput;