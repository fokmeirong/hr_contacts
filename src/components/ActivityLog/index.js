import React from 'react';
import constant from './../../utils/const';

// class ActivityLog extends React.Component {
function ActivityLog(props) {
    const user = props.user;
    const logs = user && user.log;

    logs && logs.sort((pre, next) => {
        return next.type - pre.type;
    });

    return (
        <div className="activity-log">
            <p className="pre">
                <label className="text">Activities</label>
            </p>
            <div className="content-tab">

                <div className="track-list">
                    <ul>
                        {
                            logs && logs.map((log, index) => {
                                const logType = constant.logType[log.type];

                                return (
                                    <li key={index}>
                                        <i className={`node-icon ${logType && logType.class}`}></i>
                                        <div>
                                            <span className="txt">{logType && logType.text}</span>
                                            <span className="time">{log.log_time}</span>
                                            <span className="note">{log.note}</span>
                                        </div>
                                    </li>
                                )
                                
                            })
                        }
                        {/* <li>
                            <i className="node-icon hired"></i>
                            <div>
                                <span className="txt">New contact created</span>
                                <span className="time">2016-03-10 18:07:15</span>
                                <span className="note">A quick win!</span>
                            </div>
                        </li>
                        <li>
                            <i className="node-icon call"></i>
                            <div>
                                <span className="txt">New contact created</span>
                                <span className="time">2016-03-10 18:07:15</span>
                                <span className="note">A quick win!</span>
                            </div>
                        </li>
                        <li>
                            <i className="node-icon new-contact"></i>
                            <div>   
                                <span className="txt">New contact created</span>
                                <span className="time">2016-03-10 18:07:15</span>
                                <span className="note">A quick win!</span>
                            </div>
                        </li>
                        <li>
                            <i className="node-icon fill-form"></i>
                            <div>
                                <span className="txt">New contact created</span>
                                <span className="time">2016-03-10 18:07:15</span>
                                <span className="note">A quick win!</span>
                            </div>

                        </li> */}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default ActivityLog;