import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import API from "../utils/API";
import data from "../fullDataSetUnformatted.json";
import { isNullOrUndefined } from 'util';
import { userInfo } from 'os';

if(localStorage.getItem('pipeJSON')===null || localStorage.getItem('pipeJSON')===undefined)
{   
    localStorage.setItem('pipeJSON',JSON.stringify(data));
}
//get user and well data from server and store in session storage
//grab user table aswell as wells associated for that user



class DashboardPage extends React.Component{
    


    render() {
 let uid=this.props.uid
API.getUserAndWells({uid:uid}).then(response=>{sessionStorage.setItem("userData",JSON.stringify(response.data.userData));sessionStorage.setItem('wellData',JSON.stringify(response.data.wellData))})
        return(
            
    <div >
        <hr />
        <ul>
            
            
            <Link className="link-class" to="/new-well"><button>new well</button></Link> <br /> <br />
            <Link className="link-class" to="/my-wells"><button>my wells</button></Link> <br /> <br />
            <Link className="link-class" to="/account"><button>account settings</button></Link> <br /> <br />
        </ul>
    </div>
        )
    }

}


const mapStateToProps = (state, props) => ({
    uid: state.auth.uid
});
export default connect(mapStateToProps, undefined) (DashboardPage);