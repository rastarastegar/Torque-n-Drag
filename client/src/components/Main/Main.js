import React, { Component } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Main extends Component {
  handleOnClick = event => {
    event.preventDefault();
    console.log("button pushed");
    API.saveUser({
      firstName: "R",
      lastName: "S",
      password: "T",
      email: "U"
    })
      .then(res => console.log(res, "saved data"))
      .catch(err => console.log(err));

    //   API.getUsers()
    //   .then(res =>
    //     console.log(res)
    //   )
    //   .catch(err => console.log(err));
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>ON CLICK TEST</button>
        <section className="banner">
          <div id="tagline-block" className="container pt-5">
            <div className="col col-lg-6 col-md-8 pt-5">
              <h1>Access your wells data. Anywhere. Anytime.</h1>

              <Link to="/login">
                <button type="button" className="btn btn-log">
                  Log In
                </button>
              </Link>
              <Link to="/sign-up">
                <button type="button" className="btn btn-sign">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mobile-tagline container mb-2">
          <h1 className="text-center">
            Access your wells data. Anywhere. Anytime.
          </h1>
        </section>

        <section className="container mb-5">
          <div className="mxn2">
            <div className="mx-auto px-3 text-center">
              <h2>Want to have better handle of your casing string?</h2>

              <p>
                Tork.n.drag is a platform to store all your well information. It
                allows you to locate your wells on map, click on each and see
                the well trajectory, construction, run a torque and drag
                analysis and conclude how likely is for your casing string
                design to make it to the bottom of the well. You can print a
                report on the fly and take it to your meetings or implement
                graphs in your next presentation.
              </p>

              <div id="mobile-buttons">
                <Link to="/login">
                  <button type="button" className="btn  btn-log">
                    Log In
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button type="button" className="btn btn-sign">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
