import React, {Component} from "react";
import "./Header.css";
import { Link } from 'react-router-dom'


class Header extends Component {
     myFunction() {
         console.log("hello");
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
render(){ 
   return(<header>
	<div id="flex-header" className="container">
			<div class="col col-sm-6 col-4" id="logo"><Link to="/">
					<img src="./images/logo.png"/></Link>
			</div>

			<div class="col col-6" id="mobile-logo"><Link to="/">
					<img src="./images/logo-mobile.png"/></Link>
			</div>
		    
			 <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
						 <span className="fa fa-bars">Menu</span>
			</a>
			<nav className="topnav" id="myTopnav">
				<ul> 
                     <Link className="link-class" to="/sign-up"><li>Sign Up</li></Link>
					 <Link className="link-class" to="/login"><li>Login</li></Link>
				</ul>
			</nav>
	    </div>
 </header>
   )}
}


export default Header;