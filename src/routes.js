import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';


const Routes = () => {
    return (
        <BrowserRouter>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  component={NotFound}/>
            </Switch>
          </HashRouter>
        </BrowserRouter>
      );
};

export default Routes;