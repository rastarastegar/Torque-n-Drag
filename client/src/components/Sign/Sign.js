import React, {Component} from "react";
import "./Sign.css";

class Sign extends Component {
    render(){ 
        return(<div>


    <section className="container mt-5">
        <div className="mx-auto">
            <h1 className="h1-log-sign">Create Your Account</h1>
            <br/> 
        
             <form action="">
                
                <label className="h4" for="first-name">First Name</label><br/> 
                <input className="mb2" type="text"  placeholder="John" id="first-name" name="first-name" size="39" required autofocus />
                <br/> <br/> 

                <label className="h4" for="last-name">Last Name</label><br/> 
                <input className="mb2" type="text"  placeholder="Dane" id="last-name" name="last-name" size="39" required />
                <br/> <br/>

                 <label className="h4" for="password">Password</label><br/> 
                 <input className="mb2" type="password"  placeholder="Password" id="password" name="password" size="39" required />
                <br/> <br/>

                <label className="h4" for="confirm-password">Confirm Password</label><br/> 
                <input className="mb2" type="text"  placeholder="Verify Password" id="confirm-password" name="confirm-password" size="39" required />
                <br/> <br/>

                <label className="h4" for="email">Email</label><br/> 
                <input type="text" className="mb2"  placeholder="Email" id="email" name="email" size="39" required />
                 <br/> <br/> 

                 <input className="btn btn-sign" type="submit" />
                 
            </form>
            <br/> <br/> 
        </div>
    </section>


   
</div>
   );

        }
    }

export default Sign;