import React, { Component } from "react";
import "./Sign.css";
import { auth } from '../../firebase';
import API from "../../utils/API";

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }

    handleSubmit = (event)=>{
        event.preventDefault();
        const {
            firstname,
            lastname,
            email,
            passwordOne,
          } = this.state;
      
          auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
              this.setState({ ...INITIAL_STATE });
                //alert('signed up and logged in... remember to delete this alert message')
              //add the returned whatever to 
              // alert(JSON.stringify(authUser.user.uid));
              API.saveUser({
                firstName:firstname,
                lastName:lastname,
                email:email,
                uid:authUser.user.uid,
              }).then(()=>{
                // alert('hold up it worked?')
                API.getUserAndWells({uid:authUser.user.uid}).then(response=>{sessionStorage.setItem("userData",JSON.stringify(response.data.userData));sessionStorage.setItem('wellData',JSON.stringify(response.data.wellData))})
              }).catch(error=>{alert(error)})
            })
            .catch(error => {
              this.setState(byPropKey('error', error));
              alert(error)
            });
        
        return false;
    }

    render(){ 
        const {
            firstname,
            lastname,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;
          const isInvalid =
          passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' || lastname === '' ||
          firstname === '';
        return(<div>


    <section className="container px2">
        <div className="mx-auto center">
            <h1 className="title">Create Your Account</h1>
            <br/> 
        
             <form onSubmit={this.handleSubmit} >
                
                <div className="first-name"><label className="h4" for="first-name">First Name</label><br/> 
                <input value={firstname} onChange={event => this.setState(byPropKey('firstname',event.target.value))} className="mb2" type="text"  placeholder="John" id="first-name" name="first-name" size="39" required autofocus />
                </div>
                <br/> 

                <div className="last-name"><label className="h4" for="last-name">Last Name</label><br/> 
                <input value={lastname} onChange={event => this.setState(byPropKey('lastname', event.target.value))} className="mb2" type="text"  placeholder="Dane" id="last-name" name="last-name" size="39" required />
                </div>
                <br/>

                 <div className="password"><label className="h4" for="password">Password</label><br/> 
                 <input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne',event.target.value))} className="mb2" type="password"  placeholder="Password" id="password" name="password" size="39" required />
                 </div>
                <br/>

                <div className="confirm-password"><label className="h4" for="confirm-password">Confirm Password</label><br/> 
                <input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} className="mb2" type="password"  placeholder="Verify Password" id="confirm-password" name="confirm-password" size="39" required />
                </div>
                <br/>

                <div className="email"><label className="h4" for="email">Email</label><br/> 
                <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text" className="mb2"  placeholder="Email" id="email" name="email" size="39" required />
                </div>
                 <br/> 

                 <div className="submit" className="col col-lg-3 col-md-6 pt-2"><input disabled={isInvalid} className="btn btn-primary btn-block" type="submit" /></div>  

                 { error && <p>{error.message}</p> }

                 
            </form>
            <br/> <br/> 
        </div>
    </section>


   
</div>
   );

        }
    }

export default Sign;
