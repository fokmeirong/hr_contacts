import React from 'react';

class SearchBarInput extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search Contact"/>
            </div>
        );
    }
}

export default SearchBarInput;