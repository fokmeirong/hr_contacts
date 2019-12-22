import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Details from './pages/Details';


const Routes = () => {
    return (
        <BrowserRouter>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:id" component={Details} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </BrowserRouter>
    );
};

export default Routes;