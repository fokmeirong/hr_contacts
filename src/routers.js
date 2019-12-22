import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Details from './pages/Details';
import LogCall from './pages/LogCall';


const Routes = () => {
    return (
        <BrowserRouter>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:id" component={Details} />
                    <Route exact path="/log-call/:id" component={LogCall} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </BrowserRouter>
    );
};

export default Routes;