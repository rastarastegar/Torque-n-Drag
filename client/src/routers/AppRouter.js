import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Sign from "../components/Sign";
import Login from "../components/Login";
import Account from "../components/Account";
import MyWells from "../components/MyWells";
import NewWell from "../components/NewWell";
import NewWellFull from "../components/NewWellFull";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Main} exact={true}/>
                <PublicRoute path="/login" component={Login} exact={true} />
                <PublicRoute path="/sign-up" component={Sign} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/new-well-simplified" component={NewWell}/>
                <PrivateRoute path="/my-wells" component={MyWells}/>
                <PrivateRoute path="/account" component={Account}/>
                <PrivateRoute path="/new-well" component={NewWellFull}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
        
    </Router>
);

export default AppRouter;