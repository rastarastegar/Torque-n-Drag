import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./NewWell.css";
import data from "../../simplifiedDataSet.json";

const INITIAL_STATE = {
    normSize:'',
    normWeight:'',
    grade:'',
    normWeightDisabled:true,
    gradeDisabled:true,
}

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

const renderOptionsWeight = (state) => {
    if(state["normWeightDisabled"]==false)
    {   
        
        let temp = "<option value=\"undecided\">choose a value</option>";
        for(let x in data[state.normSize])
        {
            temp=temp+"<option value=\""+x+"\">"+x+"</option>";
        }

        return{__html:temp}
    }

    

}

const renderOptionsGrade = (state) => {
    if(state["gradeDisabled"]==false)
    {   
        
        let temp = "<option value=\"undecided\">choose a value</option>";
        for(let x in data[state.normSize][state.normWeight])
        {
            temp=temp+"<option value=\""+x+"\">"+x+"</option>";
        }

        return{__html:temp}
    }

    

}

const handleSubmit = (state,event) => {
    event.preventDefault();
    alert(JSON.stringify(data[state.normSize][state.normWeight][state.grade],null,2))
}


class NewWell extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }


    render(){
        const {
            normSize,
            normWeight,
            grade,
            normWeightDisabled,
            gradeDisabled,
        } = this.state;
        return (
            <div>
                
                <form onSubmit={(event)=>{handleSubmit(this.state,event)}}>

                    <label for="normSize">|.....Norm Size.....|</label> <label for="normWeight">|.....Norm Weight.....|</label> <label for="grade">|.....grade.....|</label> <br />
                    <select name="normSize" onChange={event => {this.setState(byPropKey('normSize',event.target.value));this.setState(byPropKey('normWeightDisabled',false));this.setState(byPropKey('gradeDisabled',true));}}>
                        <option value="undecided">choose a value</option>
                        <option value="4.5000">4.5000</option>
                        <option value="5.0000">5.0000</option>
                        <option value="5.5000">5.5000</option>
                    </select>
                    <select name="normWeight" onChange={event => {this.setState(byPropKey('normWeight',event.target.value));this.setState(byPropKey('gradeDisabled',false));}}dangerouslySetInnerHTML={renderOptionsWeight(this.state)} disabled={normWeightDisabled}>
                        
                    </select>

                    <select name="grade" onChange={event => {this.setState(byPropKey('grade',event.target.value));/*this.setState(byPropKey('normWeightDisabled',false));*/}} dangerouslySetInnerHTML={renderOptionsGrade(this.state)} disabled={gradeDisabled}>

                    </select>
                    <br />

                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }

}

export default NewWell;