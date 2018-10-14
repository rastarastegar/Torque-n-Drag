import React, {Component} from "react";
import { Link } from 'react-router-dom'
import "./MyWells.css"


//grab wells from session storage and display as buttons/links to a well component

let userData=JSON.parse(sessionStorage.getItem('userData'));

let wellData=JSON.parse(sessionStorage.getItem('wellData'));


class MyWells extends Component {


    render(){

        return (
            
            <div>
                <hr></hr>
                {
                    wellData.map(element => 
                    <div>

                        <button onClick={()=>{alert('stopping here. thinking of making these drop down options instead of buttons. when someone clicks, we will bring up the graphs/calculations/whatever on this page rather than redirecting.')}}>{element.wellName}</button> <br /><br />
                    
                    </div>
                    )
                }
            </div>
        )
    }

}

export default MyWells;