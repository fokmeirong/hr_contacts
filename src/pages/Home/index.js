import React from 'react';
import { Button } from 'antd-mobile';

class Home extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <header>
                    John Chan
                    <Button type="primary">primary</Button>
                </header>
            </div>
        );
    }
}

export default Home;