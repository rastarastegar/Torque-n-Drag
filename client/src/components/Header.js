import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';
import "./Header/Header.css";


export const Header = ({ startLogout }) => (
    <header>
			<div id="flex-header" className="container">
				<div className="col col-sm-6 col-4" id="logo"><Link to="/">
					<img src="./images/logo.png" /></Link>
				</div>

				<div className="col col-6" id="mobile-logo"><Link to="/">
					<img src="./images/logo-mobile.png" /></Link>
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



    // <header className="header">
    //     <div className="content-container">
    //         <div className="header__content">
    //             <Link className="header__title" to="/dashboard" >
    //                 <h1>Boilerplate</h1>
    //             </Link>
    //             <button className="button button--link" onClick={startLogout}>Logout</button>
    //         </div>
    //     </div>
    // </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);