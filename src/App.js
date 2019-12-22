import React from 'react';
import Routers from './routers';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './style/app.scss';
import './mock';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Routers />
            </div>
        </Provider>
    );
}

export default App;
