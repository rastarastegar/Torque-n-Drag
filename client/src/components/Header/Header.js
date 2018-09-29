import React, {Component} from "react";
import "./Header.css";


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
			<div id="logo"><a href="index.html">
					<p>Torque n Drag</p></a>
			</div>
		    
			 <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
						 <span className="fa fa-bars">Menu</span>
			</a>
			<nav className="topnav" id="myTopnav">
				<ul> 
					 <li className="link-class"><a href="account.html">Sign Up</a></li>
					 <li className="link-class"><a href="login.html">Login</a></li>
				</ul>
			</nav>
	    </div>
 </header>
   )}
}


export default Header;