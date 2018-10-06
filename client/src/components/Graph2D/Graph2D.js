import React, {Component} from "react";
import "./Graph2D.css";
import { Link } from 'react-router-dom'


class Graph2D extends Component {
    render(){ 
        return(<div>
        <section class="banner">
        <div id="tagline-block" className="container pt-5">
			<div className="col col-lg-6 col-md-8 pt-5">	
				 <h1>Access your wells data. Anywhere. Anytime.
				 </h1>
	
                 <Link to="/login"><button type="button" className="btn btn-log">Log In</button></Link>
                 <Link to="/sign-up"><button type="button" className="btn btn-sign">Sign Up</button></Link>
         </div>
		</div>
        </section>

        <section className="mobile-tagline container mb-2">
            <h1 className="text-center">Access your wells data. Anywhere. Anytime.
            </h1>
              
       </section>
       

    <section className="container mb-5">
        <div className="mxn2">
            <div className="mx-auto px-3 text-center">
                <h2>Want to have better handle of your casing string?</h2>
            
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <div id="mobile-buttons">
                <Link to="/login"><button type="button" className="btn  btn-log">Log In</button></Link>
                <Link to="/sign-up"><button type="button" className="btn btn-sign">Sign Up</button></Link>
            </div>
            </div>
        </div>
    </section>
   </div>
   );

        }
    }

export default Graph2D;