import React from 'react';
import { connect } from "react-redux";


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
            id: props.match.params.id
        }

        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        console.log('mounted...........');
        this.getData();
    }

    onRefresh() {
        this.getData()
    }

    getData() {
        const fetchData = async () => {
            const data = {
                id: this.state.id
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

        fetchData();
    }

    render() {
        return (
            <div className='detail-page'>
                {!this.props.showLogCall && <Header>{this.state.title}</Header>}

                {
                    !this.props.showLogCall ? (
                        <div className="detail-area">
                            <UserTab user={this.state.user} onRefresh={this.onRefresh} />
                            <ContactDetail user={this.state.user} />
                            <ActivityLog user={this.state.user} />
                        </div>
                    ) : (
                            <LogCall user={this.state.user} onRefresh={this.onRefresh} />
                        )
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        showLogCall: state.userReducer.showLogCall
    };
};

export default connect(mapStateToProps)(Details);