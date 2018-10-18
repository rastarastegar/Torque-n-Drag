import React, {Component} from "react";
import { Link } from 'react-router-dom'
import "./MyWells.css"
import Graph3D from "../Graph3D"
import Container from "../Container"
// const INITIAL_STATE={
//     currentWell:{},
//     userData:{},
//     wellData:{}
// }

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });


  //just placing this sample data here for reference while creating the parseData function
//   [{"Depth (ft)":"(ft)","Incl (Deg)":"Deg.",
//   "Azim (Deg)":"Deg."},{"Depth (ft)":"","Incl (Deg)":"","Azim (Deg)":""},
//   {"Depth (ft)":"0","Incl (Deg)":"0","Azim (Deg)":"0"},{"Depth (ft)":"150",
//   "Incl (Deg)":"0.3","Azim (Deg)":"189.6"},


// "_id":"5bc53106eeeddb48d0c7d941","latitude":"859285755","longitude":"283759285","wellName":"test well revisited",
// "wellUWI":"2037532","wellLocation":"australia","pipeData":{"Yield":"75000","ToolJointOd":"6.625","ToolJointId":"3.5",
// "TensionBody":"530144","TensionJoint":"1109920","TorsionBody":"52257","TorsionJoint":"44673","MakeupTorque":"27076"},"__v":0

const parseStringDataToInt = (wellData) => {
    let checkForNoData = false;
    if(wellData[0].wellName=='no data'){
        checkForNoData=true;
    }
    return checkForNoData ?  wellData : wellData.map(e=>{
            let parsedSurveyData = e.surveyData.map(element=>{
            let depth = parseFloat(element["Depth (ft)"])
            let incl = parseFloat(element["Incl (Deg)"])
            let azim = parseFloat(element["Azim (Deg)"])
            let proceedWithPlan = true;
            if(isNaN(depth)||isNaN(incl)||isNaN(azim)){
                proceedWithPlan = false;
            }
            if(proceedWithPlan)
            {
                return {"Depth (ft)":depth,"Incl (Deg)":incl,"Azim (Deg)":azim}
            }
            return {"Depth (ft)":0,"Incl (Deg)":0,"Azim (Deg)":0}
            
        })
        e.surveyData=parsedSurveyData;
        //parse pipedata
        for(let x in e.pipeData.labTestedData)
        {
            e.pipeData.labTestedData[x] = parseFloat(e.pipeData.labTestedData[x])
        }
        for(let x in e.pipeData.wellProperties)
        {   
            let a =  parseFloat(e.pipeData.wellProperties[x])
            if(!isNaN(a))
            e.pipeData.wellProperties[x] = a;
        }

        calculateTrajectory(parsedSurveyData);
        e["latitude"] = parseFloat(e.latitude);
        e["longitude"] = parseFloat(e.longitude);
        return e;
    })

    
        
    }

const calculateTrajectory = (survey)=> {
    //first determine sections
let arr = survey;
let sections = [];
let stop=arr.length-1;

//alert(JSON.stringify(survey))
for(let i=0;i<arr.length;i++)
{
    let bool=true;


    console.log(i)
    console.log(i<=stop-2)
    if(i<=stop-2)
    {

    

    //detect tangent
    if(arr[i]['Incl (Deg)']===arr[i+1]['Incl (Deg)'])
    {
        //find end of tangent
        let x=i;
        let end;
        if(arr[x]['Incl (Deg)']!=arr[x+1]['Incl (Deg)']){end=x;}else
        {   
            
            while(bool)
            {
                end=x;
                
                x++
                if(x>=stop)
                {
                    bool=false
                }else{
                    if(arr[x]['Incl (Deg)']!=arr[x+1]['Incl (Deg)'])
                    {bool=false}
                }
            }
        }
        sections.push({type:'tangent',start:i,end:end})
        i=x-1;
        
    }else{

    

    //detect arc
    if(arr[i]['Incl (Deg)']!=arr[i+1]['Incl (Deg)'])
    {
        let rate=arr[i+1]['Incl (Deg)']-arr[i]['Incl (Deg)'];
        let xrate=rate;
        let x = i;
        while(bool)
        {   
            if(x>=stop)
            {
                bool=false;
            }else{
                xrate = arr[x+1]['Incl (Deg)']-arr[x]['Incl (Deg)'];
                if(xrate!=rate)
                {bool=false}
            }
            
            x++;
        }
        sections.push({type:'arc',start:i,end:x-1})
        i=x-1;

        
    }

    }
    
    }
}


//do calculations on each section

let calculatedData = [];

let cos=Math.cos;
let sin=Math.sin;

console.log(sections)
for(let i=0;i<sections.length;i++)
{
    let start=sections[i].start;
    let end=sections[i].end;
    let md1 = arr[start]['Depth (ft)']
	let md2 = arr[end]['Depth (ft)']
	let haz1= arr[start]['Azim (Deg)']
	let haz2= arr[start]['Azim (Deg)']
	let wd1= arr[start]['Incl (Deg)']
    let wd2= arr[end]['Incl (Deg)']
    
	if (sections[i]['type'] == 'tangent'){
		 for(let x = start; x<=end; x++)
		 {//if haz1 to haz2==0 well is not moving in east/west direction use east and west data from previous
            //if wd1 to wd2==0 well is not moving up or down direction use east west from previous
			let north = ((md2-md1)*sin(wd2)*cos(haz2))
			let east = ((md2-md1)* sin(wd2)*sin(haz2))
			let tvd = ((md2-md1)* cos(wd2))
			
			calculatedData.push({north:north,east:east,tvd:tvd})
			
		 }
}
	
	if (sections[i]['type'] == 'arc'){
		for(let x = start; x<=end; x++)
        { //if haz1 to haz2==0 well is not moving in east/west direction use east and west data from previous
            //if wd1 to wd2==0 well is not moving up or down direction use east west from previous
			let north= ((md2-md1)*(cos(wd1)-cos(wd2))*(sin(haz2)-sin(haz1))/((wd2-wd1)*(haz2-haz1)))
			let east=((md2-md1)*(cos(wd1)-cos(wd2))*(cos(haz1)-cos(haz1)-cos(haz2))/((wd2-wd1)*(haz2-haz1)))
			let tvd = ((md2-md1)*(sin(wd2)-sin(wd1))/(wd2-wd1))
			
			calculatedData.push({north:north,east:east,tvd:tvd})
		
		}
}


}
console.log(calculatedData);
}


class MyWells extends Component {
    constructor(props) {
        super(props);
        this.state = {    
        graph3d:false,
         currentWell:{surveyData:''},
        userData:JSON.parse(sessionStorage.getItem('userData')),
        wellData:parseStringDataToInt(JSON.parse(sessionStorage.getItem('wellData'))),
      }}
    
      

    render(){

        return (
            
            <div>
                 
                <hr></hr>
                {
                    this.state.wellData.map(element => 
                    <div>

                        <button onClick={()=>{
                        this.setState(byPropKey('currentWell',element));this.setState(byPropKey('graph3d',true))}}>{element.wellName}</button> <br /><br />

                    </div>
                    )
                    
                }

                { JSON.stringify(this.state.currentWell)}
                { this.state.graph3d ? (<Graph3D surveyData={this.state.currentWell.surveyData} />):(<Container wellData={this.state.wellData}/>)}
                 {/* <Graph3D surveyData={this.state.currentWell.surveyData} /> */}
                    

            </div>
        )
    }

}

export default MyWells;
