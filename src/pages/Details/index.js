import React, { useState, useEffect } from 'react';
import './detail.scss';
import Header from '@/components/Header';
import UserTab from '@/components/UserTab';
import ContactDetail from '@/components/ContactDetail';
import ActivityLog from '@/components/ActivityLog';
import config from '../../utils/config';
import axios from './../../server';


function Details(props) {
    const [title, setTile] = useState('');
    const [user, setUser] = useState({});
    const id = props.match.params.id;

    useEffect(() => {
        async function fetchData() {
            const data = {
                id: id
            };
            const result = await axios({
                url: config.api.getCandidateDetail,
                data: data
            });

            const response = result.data.response;
            setTile(response.name);
            setUser(response);
        }

        fetchData();
    }, []);

    return (
        <div className='detail-page'>
            <Header>{title}</Header>
            <UserTab user={user}></UserTab>
            <div className="detail-area">
                <ContactDetail user={user}/>
                <ActivityLog user={user}/>
            </div>
        </div>
    );
}

export default Details;