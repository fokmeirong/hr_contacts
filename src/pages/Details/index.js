import React from 'react';
import './detail.scss';
import Header from '@/components/Header';
import UserTab from '@/components/UserTab';
import ContactDetail from '@/components/ContactDetail';
import ActivityLog from '@/components/ActivityLog';


class Details extends React.Component {
    render() {

        return (
            <div className='detail-page'>
                <Header>John Chan</Header>
                <UserTab></UserTab>
                <div className="detail-area">
                    <ContactDetail/>
                    <ActivityLog/>
                </div>
            </div>
        );
    }
}

export default Details;