import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';
import "./Header/Header.css";


export const Header = ({ startLogout }) => (
    <header>
			<div id="flex-header" className="container">
				<div className="col col-sm-6 col-4" id="logo"><Link to="/">
					<img src="./images/logo.png" alt = "site logo"/></Link>
				</div>

				<div className="col col-6" id="mobile-logo"><Link to="/">
					<img src="./images/logo-mobile.png" alt = "mobile site logo"/></Link>
				</div>

				<a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
					<span className="fa fa-bars">Menu</span>
				</a>
				<nav className="topnav" id="myTopnav">
					<ul>
                        <button className="button button--link" onClick={startLogout}>Logout</button>
					</ul>
				</nav>
			</div>
		</header>



);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);