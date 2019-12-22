import React from 'react';
import './logCall.scss';
import Header from '@/components/Header';


// class LogCall extends React.Component {
function  LogCall(props) {
    return (
        <div className='log-call-page'>
            <Header>John Chan</Header>
            <div className="content-tab content-head">
                <span className="icon"></span>
                <span className="txt">Log Call</span>
            </div>
            <p className="pre">
                <label className="text">Call Detail</label>
                <label className="right">12/12/2019 10:50:30am</label>
            </p>

            <div className="content-tab edit-area">
                <textarea>
                </textarea>

                <button className="btn-log active">Log</button>
            </div>
        </div>
    );
}

export default LogCall;