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
  }
}

export default App;
