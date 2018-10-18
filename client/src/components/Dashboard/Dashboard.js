import React, { Component } from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import API from "../../utils/API";
import data from "../../fullDataSetUnformatted.json";


if(localStorage.getItem('pipeJSON')===null || localStorage.getItem('pipeJSON')===undefined)
{   
    localStorage.setItem('pipeJSON',JSON.stringify(data));
}
//get user and well data from server and store in session storage
//grab user table aswell as wells associated for that user



class Dashboard extends Component{


    render() {
 let uid=this.props.uid
API.getUserAndWells({uid:uid}).then(response=>{sessionStorage.setItem("userData",JSON.stringify(response.data.userData));sessionStorage.setItem('wellData',JSON.stringify(response.data.wellData))})
        return(
    <div>
    {/* <section className="dashboard" id="myDashboard"> */}
    <div className="control-panel">
        <hr/> 
        <ul>
            
            <Link className="link-class" to="/new-well"><button className="btn btn-new">New Well</button></Link> <br /> <br />
            <Link className="link-class" to="/my-wells"><button className="btn btn-my-well">My Wells</button></Link> <br /> <br />
            <Link className="link-class" to="/account"><button className="btn btn-account">Account Settings</button></Link> <br /> <br />
       
        </ul>
    </div>
    {/* </section> */}
    </div>
        )
    }

}

const mapStateToProps = (state, props) => ({
    uid: state.auth.uid
});

export default connect(mapStateToProps, undefined) (Dashboard);
