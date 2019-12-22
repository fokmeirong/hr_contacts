import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from './../../server';
import config from '../../utils/config';
import './../../mock/index';

function SearchBarInput () {
    const [list, setList] = useState([]);
    console.log(config.api.getContactList);

    useEffect(() => {
        async function fetchData() {
            const result = await axios({
                url: config.api.getContactList
            });
            console.log(result);
            setList(result.data.list);
        }

        fetchData();
    }, []);
    
    return (
        <div className="contact-list">
            <ul>
                {
                    list && list.map(item => (
                        <li key={item.id}>
                            <NavLink to={`/detail/${item.id}`}>
                                <div className="left-panel">
                                    <p className={`name ${item.log.length <= 2 ? 'new-user' : ''} `}>{item.name}</p>
                                    <p className="email">{item.email}</p>
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
                    ))
                }
            </ul>
        </div>
    );
}

export default SearchBarInput;