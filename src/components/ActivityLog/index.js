import React from 'react';

class ActivityLog extends React.Component {
    render() {
        return (
            <div className="activity-log">
                <p className="pre">
                    <label className="text">Activities</label>
                </p>
                <div className="content-tab">

                    <div className="track-list">
                        <ul>
                            <li>
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

                            </li>
                        </ul>
                    </div>





                </div>
            </div>
        )
    }
}

export default ActivityLog;