import React from 'react';
import constant from './../../utils/const';
import moment from 'moment'; 

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
                                const logTime = moment(log.log_time).format('MM/DD/YYYY hh:mm:ss a');

                                return (
                                    <li key={index}>
                                        <i className={`node-icon ${logType && logType.class}`}></i>
                                        <div>
                                            <span className="txt">{logType && logType.text}</span>
                                            <span className="time">{logTime}</span>
                                            <span className="note">{log.note}</span>
                                        </div>
                                    </li>
                                )
                                
                            })
                        }
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default ActivityLog;