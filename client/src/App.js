
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

export default App;
