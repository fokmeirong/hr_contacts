import React, { useState, useEffect } from 'react';
import './detail.scss';
import Header from '@/components/Header';
import UserTab from '@/components/UserTab';
import ContactDetail from '@/components/ContactDetail';
import ActivityLog from '@/components/ActivityLog';
import LogCall from '@/components/LogCall';
import config from '../../utils/config';
import axios from './../../server';
import { render } from '@testing-library/react';


class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user: {},
            logCallVisible: false,
        };

        const id = props.match.params.id;
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = {
            id: this.props.match.params.id
        };

        const result = await axios({
            url: config.api.getCandidateDetail,
            data: data
        });

        const response = result.data.response;
        this.setState({
            title: response.name,
            user: response
        });
    }

    render() {
        return (
            <div className='detail-page'>
                <Header>{this.state.title}</Header>
                <UserTab user={this.state.user} ></UserTab>
                <div className="detail-area">
                    {
                        !this.state.logCallVisible ?
                            (<div>
                                <ContactDetail user={this.state.user} />
                                <ActivityLog user={this.state.user} />
                            </div>)
                            :
                            (<LogCall user={this.state.user} />)

                    }
                </div>

            </div>
        );
    }
}

export default Details;