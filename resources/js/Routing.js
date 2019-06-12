import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { HomeMain } from './components/home';
import history from './history';
import store from './store';

const Routing = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomeMain} />
                    <Redirect to="/" from="*" />
                </Switch>
            </Router>
        </Provider>
    );
};

export default Routing;
