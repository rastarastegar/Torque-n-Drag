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

        e.graphCalculations=calculateTrajectory(parsedSurveyData);
        e["latitude"] = parseFloat(e.latitude);
        e["longitude"] = parseFloat(e.longitude);
        return e;
    })

    
        
    }




const calculateTrajectory = (survey)=> {
   
    // console.log(this.props.surveyData);
    let sections=[];
    let graph2D =[];
    const graphData = (north, east, tvd, hd, dogleg, ratioFactor) => {
      return graph2D.push({ north, east, tvd, hd, dogleg, ratioFactor});
    };
    sections=[];
    //check for arc or tangent
    for(let i=0;i<survey.length;i++)
    {   let bool=true;
        let stop=survey.length-1;
            //detect tangent
            if(i<stop)
            {
            
            if(survey[i]['Incl (Deg)']===survey[i+1]['Incl (Deg)'])
            {
                //find end of tangent
                let x=i;
                let end;
                
                // if(arr[x]['Incl (Deg)']!=arr[x+1]['Incl (Deg)']){end=x;}else
                // {   

                
                    
                    while(bool)
                    {
                        end=x;
                        
                        x++;
                        
                        if(x>=stop)
                        {
                            bool=false
                        }else{
                            if(survey[x]['Incl (Deg)']!=survey[x+1]['Incl (Deg)'])
                            {bool=false}
                        }
                    }
                // }
                sections.push({type:'tangent',start:i,end:end})
                i=x-1;
                
            }
            //detect arc
            if(survey[i]['Incl (Deg)']!=survey[i+1]['Incl (Deg)'])
            {
                let rate=survey[i+1]['Incl (Deg)']-survey[i]['Incl (Deg)'];
                let xrate=rate;
                let x = i;
                while(bool)
                {   
                    if(x>=stop)
                    {
                        bool=false;
                    }else{
                        xrate = survey[x+1]['Incl (Deg)']-survey[x]['Incl (Deg)'];
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
    //push to a sections array.
    //if arc do fromula here
    console.log(sections)
    sections.forEach((element)=>{
    let start=element.start;
    let end=element.end;
    let type=element.type;


        //if arc
    if(type=='arc')
    {   let BHD;
        let BVD;
        if(graph2D.length-1 == 0 ) BVD=0
        else BVD = graph2D[graph2D.length-1].tvd
        let BR = survey[start]['Incl (Deg)']-survey[start+1]['Incl (Deg)'];
        let BI;
        if(start==0) BI=survey[0]['Incl (Deg)']
        else BI=survey[start-1]['Incl (Deg)']
        if(start==0) BHD = 0;
        else BHD = graph2D[graph2D.length-1]['hd']
        let Cos= Math.cos;
        let Sin=Math.sin;
        let Tan=Math.tan;
        let Arccos= Math.acos;


    for (let i = start; i < end; i++) {
        
        
        //       let MD2 = survey[i+1]['Depth (ft)']
        // let MD1 = survey[start]['Depth (ft)']
        // let HAZ1= survey[start]['Azim (Deg)']
        // let HAZ2= survey[i+1]['Azim (Deg)']
        // let WD1= survey[start]['Incl (Deg)']
        // let WD2= survey[i+1]['Incl (Deg)']
        // let Cos= Math.cos;
        // let Sin=Math.sin;
        // let Tan=Math.tan;
        // let Arccos= Math.acos;
        
        //  let DL = Arccos (Cos (WD2 - WD1) - Sin (WD1) * Sin (WD2) * (1 - Cos (HAZ2 - HAZ1)))
        //  let CF = 2 / DL * (Tan (DL / 2)) * 0.017453
        //  let North = ((MD2 - MD1)*((Sin(WD1) * Cos(HAZ1) + Sin(WD2) * Cos(HAZ2)) / 2) * CF)
        //  let East = ((MD2 - MD1) * ((Sin(WD1) * Sin(HAZ1) + Sin(WD2) * Sin(HAZ2)) / 2) * CF)
        //  let TVD = (((MD2 - MD1) * (Cos(WD2) + Cos(WD1)) / 2) * CF)
        //  graphData(North, East, DL, CF, TVD);
        let CAB;
        let CI = survey[i]['Incl (Deg)'];
        let CA = survey[i]['Azim (Deg)'];
        if(start==0) CAB = survey[start-1]['Azim (Deg)'];
        else CAB = survey[start-1]['Azim (Deg)'];


        let VD = BVD+5730/BR*(Sin(CI/57.3)-Sin(BI/57.3));
        let HD = BHD+5730/BR*(Cos(BI/57.3)-Cos(CI/57.3));
        let E = HD * Sin(CA/57.3);
        let N = HD * Cos(CA/57.3);

        graphData(N,E,VD,HD,0,0,0);



        
        }
    }
        //or

        // let DL=0;
        // let CF=0;
        // let North = (MD2 - MD1) * (Cos(WD1) - Cos(WD2)) * (Sin(HAZ2) - Sin(HAZ1)) / ((WD2 - WD1) * (HAZ2 - HAZ1));
        // let East =  (MD2 - MD1) * (Cos(WD1) - Cos(WD2)) * (Cos(HAZ1) - Cos(HAZ2))/ ((WD2 - WD1) * (HAZ2 - HAZ1));
        // let TVD =  (MD2 - MD1) * (Sin(WD2) - Sin(WD1)) / (WD2 - WD1);

    //   //dogleg
    //   let dogleg =
    //     Math.acos(Math.cos(survey[i + 1]["Incl (Deg)"] - survey[i]["Incl (Deg)"]) -
    //     Math.sin(survey[i]["Incl (Deg)"]) *
    //       Math.sin(survey[i + 1]["Incl (Deg)"]) *
    //       (1 -
    //         (Math.cos(survey[i + 1]["Azim (Deg)"]) -
    //           Math.cos(survey[i]["Azim (Deg)"]))));
    //   //curvature factor
    //   let ratioFactor = (2 / dogleg) * Math.tan(dogleg / 2);
    //   //north
    //   let north =
    //     (survey[i]["Depth (ft)"] / 2) *
    //     (Math.sin(survey[i]["Incl (Deg)"]) * Math.cos(survey[i]["Azim (Deg)"]) +
    //       Math.sin(survey[i + 1]["Incl (Deg)"]) *
    //         Math.cos(survey[i + 1]["Azim (Deg)"])) *
    //     ratioFactor;
    //   //east
    //   let east =
    //     (survey[i]["Depth (ft)"] / 2) *
    //     (Math.sin(survey[i]["Incl (Deg)"]) * Math.sin(survey[i]["Azim (Deg)"]) +
    //       Math.sin(survey[i + 1]["Incl (Deg)"]) *
    //         Math.sin(survey[i + 1]["Azim (Deg)"])) *
    //     ratioFactor;
    //   //tvd
    //   let tvd =
    //     (survey[i]["Depth (ft)"] / 2) *
    //     (Math.cos(survey[i]["Incl (Deg)"]) *
    //       Math.cos(survey[i + 1]["Azim (Deg)"])) *
    //     ratioFactor;
    //   console.log(north, east, dogleg, ratioFactor, tvd);
    
    //do tangent formula if type is tangent
    if(type='tangent')
    {
        let BVD;
        let HBD;
        if(graph2D.length == 0 ) BVD=0
        else BVD = graph2D[graph2D.length-1].tvd    
        if(graph2D.length==0) HBD=0
        else HBD = graph2D[graph2D.length-1].hd
        
                let Cos= Math.cos;
                let Sin=Math.sin;
                let Tan=Math.tan;
                let Arccos= Math.acos;
            for(let i=start;i<end;i++)
            {
            //     let MD2 = survey[i+1]['Depth (ft)']
            //     let MD1 = survey[start]['Depth (ft)']
            //     let HAZ1= survey[start]['Azim (Deg)']
            //     let HAZ2= survey[i+1]['Azim (Deg)']
            //     let WD1= survey[start]['Incl (Deg)']
            //     let WD2= survey[i+1]['Incl (Deg)']

            // let CF=0;
            // let DL=0;
            // let North = ((MD2 - MD1) * Sin(WD2) * Cos(HAZ2))
            // let East = ((MD2 - MD1) * Sin(WD2) * Sin(HAZ2))
            // let TVD = ((MD2 - MD1) * Cos (WD2))
            // graphData(North, East, DL, CF, TVD);
            let BMD;
            let CAB;
            let CMD = survey[i]['Depth (ft)']
            if(start==0) BMD=survey[start]['Depth (ft)']
            else BMD = survey[start-1]['Depth (ft)']
            let CI = survey[i]['Incl (Deg)']
            let CA = survey[i]['Azim (Deg)']
            if(start==0) CAB = survey[start]['Azim (Deg)']
            else CAB = survey[start-1]['Azim (Deg)']

            let VD = BVD + (CMD-BMD)*Cos(CI/57.3);
            let HD = HBD + (CMD-BMD)*Sin(CI/57.3);
            let E = HD * Sin(CA/57.3)
            let N = HD * Cos(CA/57.3)

            graphData(N,E,VD,HD,0,0,0)

            }
    }




      

    })
    // const survey = this.props.surveyData;

    
    console.log(graph2D);
    return graph2D




//     //first determine sections
// let arr = survey;
// let sections = [];
// let stop=arr.length-1;

// //alert(JSON.stringify(survey))
// for(let i=0;i<arr.length;i++)
// {
//     let bool=true;


//     console.log(i)
//     console.log(i<=stop-2)
//     if(i<=stop-1)
//     {

    

//     //detect tangent
//     if(arr[i]['Incl (Deg)']===arr[i+1]['Incl (Deg)'])
//     {
//         //find end of tangent
//         let x=i;
//         let end;
//         // if(arr[x]['Incl (Deg)']!=arr[x+1]['Incl (Deg)']){end=x;}else
//         // {   
            
//             while(bool)
//             {
//                 end=x;
                
//                 x++
//                 if(x>=stop)
//                 {
//                     bool=false
//                 }else{
//                     if(arr[x]['Incl (Deg)']!=arr[x+1]['Incl (Deg)'])
//                     {bool=false}
//                 }
//             }
//         // }
//         sections.push({type:'tangent',start:i,end:end})
//         i=x-1;
        
//     }else{

    

    // //detect arc
    // if(arr[i]['Incl (Deg)']!=arr[i+1]['Incl (Deg)'])
    // {
    //     let rate=arr[i+1]['Incl (Deg)']-arr[i]['Incl (Deg)'];
    //     let xrate=rate;
    //     let x = i;
    //     while(bool)
    //     {   
    //         if(x>=stop)
    //         {
    //             bool=false;
    //         }else{
    //             xrate = arr[x+1]['Incl (Deg)']-arr[x]['Incl (Deg)'];
    //             if(xrate!=rate)
    //             {bool=false}
    //         }
            
    //         x++;
    //     }
    //     sections.push({type:'arc',start:i,end:x-1})
    //     i=x-1;

        
    // }

//     }
    
//     }
// }


// //do calculations on each section

// let calculatedData = [];

// let cos=Math.cos;
// let sin=Math.sin;

// console.log(sections)
// for(let i=0;i<sections.length;i++)
// {
//     let start=sections[i].start;
//     let end=sections[i].end;
//     let md1 = arr[start]['Depth (ft)']
// 	let md2 = arr[end]['Depth (ft)']
// 	let haz1= arr[start]['Azim (Deg)']
// 	let haz2= arr[start]['Azim (Deg)']
// 	let wd1= arr[start]['Incl (Deg)']
//     let wd2= arr[end]['Incl (Deg)']
//     if(haz1)
    
// 	if (sections[i]['type'] == 'tangent'){
// //if haz1 && haz2==0 well is not moving in east/west direction use east and west data from previous
//             //if wd1 && wd2==0 well is not moving up or down direction use east west from previous
// 			let north = ((md2-md1)*sin(wd2)*cos(haz2))
// 			let east = ((md2-md1)* sin(wd2)*sin(haz2))
// 			let tvd = ((md2-md1)* cos(wd2))
			
// 			calculatedData.push({north:north,east:east,tvd:tvd})
			
		 
// }
	
// 	if (sections[i]['type'] == 'arc'){
//  //if haz1&&haz2==0 well is not moving in east/west direction use east and west data from previous
//             //if wd1 && wd2==0 well is not moving up or down direction use east west from previous
// 			let north= ((md2-md1)*(cos(wd1)-cos(wd2))*(sin(haz2)-sin(haz1))/((wd2-wd1)*(haz2-haz1)))
// 			let east=((md2-md1)*(cos(wd1)-cos(wd2))*(cos(haz1)-cos(haz1)-cos(haz2))/((wd2-wd1)*(haz2-haz1)))
// 			let tvd = ((md2-md1)*(sin(wd2)-sin(wd1))/(wd2-wd1))
			
// 			calculatedData.push({north:north,east:east,tvd:tvd})
		
		
// }


// }
// console.log(calculatedData);
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

                {/* { JSON.stringify(this.state.currentWell)} */}
                { this.state.graph3d ? (<Graph3D surveyData={this.state.currentWell.graphCalculations} />):(<Container wellData={this.state.wellData}/>)}
                 {/* <Graph3D surveyData={this.state.currentWell.surveyData} /> */}
                    

            </div>
        )
    }

}

export default MyWells;
