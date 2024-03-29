import React from 'react';


class GoBackArrow extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            history: require("history").createHashHistory,
        };
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        typeof this.props.goBackEvent === 'function' ? this.props.goBackEvent() : this.state.history().goBack();
    }

    render() {
        return (
            <span className="go-back" onClick={this.goBack}></span>
        )
    }
}

export default GoBackArrow;