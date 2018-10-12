import React from "react";
import "./Footer.css";

const Footer = (props) => (
 <footer className = "footer">
	<div className="container">
			<div className=" center">
				<div className="col col-6">
					<ul className="list-reset">
						<li>
							<p className="h5 m0">
							   Contact
							</p>
						</li>
						<li>
							<a href="#" className="h6 block">something@something.com </a>
						</li>
						<li>
							<a href="#" className=" h6 block">(555) 555-555 </a>
						</li>
					</ul>
				</div>
		  
			</div>
		</div>
 </footer>
);

export default Footer;