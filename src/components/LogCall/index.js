import React from 'react';
import Header from '@/components/Header';
import { connect } from "react-redux";
import action from "./../../redux/user/action";
import axios from './../../server';
import config from './../../utils/config';
import moment from 'moment';



class LogCall extends React.Component {
    constructor(props) {
        super(props);
        this.goBackEvent = this.goBackEvent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submitData = this.submitData.bind(this);

        this.state = {
            activeLogBtn: false,
            note: this.getCurrentCallLog(),
            type: 3,
            id: props.user.id
        }
        
    }

    getCurrentCallLog() {
        const logs = this.props.user.log;
        const callLog = logs.filter((item) => {
            return item.type === 3
        });

        if (callLog.length > 0 ) {
            return callLog.note;
        } else {
            return '';
        }
    }

    componentDidMount() {
        this.textarea.focus();

        document.getElementsByClassName('edit-area')[0].addEventListener('click', () => {
            this.textarea.focus();
        })
    }
    
    goBackEvent = () => {
        this.props.dispatch(action.toggleLogCall(false));
    }

    onChange(e) {
        this.setState({
            activeLogBtn: e.target.value,
            note: e.target.value
        });
    }

    submitData() {
        if(!this.state.note) {
            return;
        }
        axios({
            method: 'post',
            url: config.api.addLog,
            data: {
                type: this.state.type,
                time: moment().format('YYYY-MM-DD HH:mm:ss'),
                note: this.state.note,
                id: this.state.id
            }
        }).then((res) => {
            this.closeLayer();
        });;
    }

    closeLayer() {
        this.props.dispatch(action.toggleLogCall(false));
        this.props.onRefresh();
    }

    render() {
        return (
            <div className='log-call-page'>
                <Header goBackEvent={this.goBackEvent}>{this.props.user.name}</Header>
                <div className="content-tab content-head">
                    <span className="icon"></span>
                    <span className="txt">Log Call</span>
                </div>
                <p className="pre">
                    <label className="text">Call Detail</label>
                    <label className="right">{moment().format('YYYY-MM-DD HH:mm:ss')}</label>
                </p>

                <div className="content-tab edit-area">
                    <textarea onChange={this.onChange} value={this.state.note} ref={(n) => {
                        this.textarea = n
                    }}
                    />

                    <button className={`btn-log ${this.state.activeLogBtn ? 'active' : ''}`} onClick={this.submitData}>Log</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showLogCall: state.userReducer.showLogCall
    };
};

export default connect(mapStateToProps)(LogCall);
