import React, {Component} from "react";
import "./Login.css";
import { auth } from '../../firebase';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }

      handleSubmit = (event)=>{
        event.preventDefault();
        const {
            email,
            password,
          } = this.state;
      
          auth.doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
              this.setState({ ...INITIAL_STATE });
                
                // alert('logged in... remember to delete this message')
              
            })
            .catch(error => {
              this.setState(byPropKey('error', error));
              alert('there was an error when trying to sign in')
            });
        
        return false;
    }

    render(){ 
        const {
            email,
            password,
            error,
          } = this.state;
          const isInvalid =
          password === '' ||
          email === '';
        return(<div>


    <section className="container px2">
        <div className="mx-auto center">
            <h1 className="title">Login Your Account</h1>
            <br/> 
        
             <form onSubmit={this.handleSubmit}>
                
                <label className="h4" for="email">Email</label><br/> 
                <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text" className="mb2"  placeholder="Email" id="email" name="email" size="39" required />
                 <br/> <br/> 

                 <label className="h4" for="password">Password</label><br/> 
                 <input value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} className="mb2" type="password"  placeholder="Password" id="password" name="password" size="39" required />
                 <br/> <br/>      

                 <input disabled={isInvalid} className="btn btn-primary" type="submit" />
                 { error && <p>{error.message}</p> }
            </form>
            <br/> <br/> 
        </div>
    </section>


   
</div>
   );

        }
    }

export default Login;