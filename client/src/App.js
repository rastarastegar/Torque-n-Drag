
import React, {Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Login from "./components/Login";
import "./App.css";


class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    ); 
=======

      <div>
        <BrowserRouter>
         <div>
           <Header/>
           
               <Route exact path="/" component={Main} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/sign-up" component={Sign} />
             
            <Footer/>

           </div> 
         </BrowserRouter>
     </div>

    );
>>>>>>> aebc51ea6f51abf26913cef1a3c7aaf0907db3e5
  }
}

export default App;
