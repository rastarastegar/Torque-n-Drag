import React, {Component} from "react";
import { Link } from 'react-router-dom'
import "./MyWells.css"

// const INITIAL_STATE={
//     currentWell:{},
//     userData:{},
//     wellData:{}
// }

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });







// let userData=JSON.parse(sessionStorage.getItem('userData'));

// let wellData=JSON.parse(sessionStorage.getItem('wellData'));
//temporary fix
// if(sessionStorage.getItem('wellData')===null || sessionStorage.getItem('wellData')===undefined)
// {
//      wellData=[{wellName:'you dont have any wells'},{wellName:'you dont have any wells'}]
// }

class MyWells extends Component {
    constructor(props) {
        super(props);
        this.state = {    
         currentWell:{},
        userData:JSON.parse(sessionStorage.getItem('userData')),
        wellData:JSON.parse(sessionStorage.getItem('wellData')),
      }}

    render(){

        return (
            
            <div>
                <hr></hr>
                {
                    this.state.wellData.map(element => 
                    <div>

                        <button onClick={()=>{alert('stopping here. thinking of making these drop down options instead of buttons. when someone clicks, we will bring up the graphs/calculations/whatever on this page rather than redirecting.');
                        this.setState(byPropKey('currentWell',element))}}>{element.wellName}</button> <br /><br />

                    </div>
                    )
                    
                }
                {JSON.stringify(this.state.currentWell)}
            </div>
        )
    }

}

export default MyWells;