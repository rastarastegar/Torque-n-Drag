import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//This component is on the block to be deleted
import LoginPage from '../components/LoginPage';
//This component is on the block to be deleted
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
import csvParse from "../components/UploadCSV";
import Graph3D from "../components/Graph3D";
import Dashboard from "../components/Dashboard";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={Main} exact={true}/>
                <PublicRoute path="/login" component={Login} exact={true} />
                <PublicRoute path="/sign-up" component={Sign} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/new-well-simplified" component={NewWell}/>
                <PrivateRoute path="/my-wells" component={MyWells}/>
                <PrivateRoute path="/account" component={Account}/>
                <PrivateRoute path="/new-well" component={NewWellFull}/>
                <PrivateRoute path="/uploadcsv" component={csvParse}/>
                <PrivateRoute path="/3dgraph" component={Graph3D} />
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>
        
    </Router>
);

export default AppRouter;