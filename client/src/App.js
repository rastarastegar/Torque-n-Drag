
import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Graph2D from  "./components/Graph2D";
import WellMap from  "./components/WellMap"; 
import "./App.css";
{/*import Graph3D from  "./components/Graph3D";*/} 

// import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from "./components/LoadingPage.js";


class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter>
         <div>
           <Header/>
           
               <Route exact path="/" component={Main} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/sign-up" component={Sign} />
               <Route exact path="/graph-2D" component={Graph2D} />
               {/*<Route exact path="/graph-3D" component={Graph3D} />*/}
               <Route exact path="/well-map" component={WellMap} />

          <Footer/>

           </div> 
         </BrowserRouter>
     </div>

    );
  }
}

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById("root"));
        hasRendered = true;
    }
};

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        renderApp();
        if(history.location.pathname === "/"){
            history.push('/dashboard'); 
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});

export default App;

