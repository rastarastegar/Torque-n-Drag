//i am fully aware that this was terrible execution... the entire time spent writing this code
//was spent thinking about how i could do the same thing soooo much more easily. however i had already
//committed and was too far in to let go.
//
//i have seen hell... it is made of repetitive & unnecessary code.
//dear reader... don't allow yourself get 50 lines deep into some stupid solution. just let go and press delete
//could have used jsx. why didn't i? i just had to go with the origional plan huh?
//my brain evolved well past this solution about 2 minutes into writing it yet i still continued. why?
//i just did the first thing that popped into my head.
//maybe just sit down for a second... why continue down this terrible path?
//COMITTED!!!1!1
//lesson to the reader: don't commit to something that you know deep down is truly terrible
//
//~yours truly -nitsuA~

import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./NewWellFull.css";
import data from "../../fullDataSetUnformatted.json";

const INITIAL_STATE = {
    description:'',
    normSize:'',
    pipeId:'',
    normWeight:'',
    adjustWeight:'',
    grade:'',
    upset:'',
    thread:'',
    normSizeDisabled:true,
    pipeIdDisabled:true,
    normWeightDisabled:true,
    adjustWeightDisabled:true,
    gradeDisabled:true,
    upsetDisabled:true,
    threadDisabled:true,
    canSubmit:true,
}

    const byPropKey = (propertyName, value) => () => ({
        [propertyName]: value,
    });



    const renderOptions = (state,name) => {
        
          let temp = "<option value=\"undecided\">choose a value</option>";
          switch(name)
          {
              case "description":
                  for(let x in data)
                  { 
                      temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                  }
                  
              break;
  
              case "normSize":
                  if(state["normSizeDisabled"]==false)
                  {   
                          
                      
                      for(let x in data[state.description])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }
                  
                
                  }
              break;
  
              case "pipeId":
                  if(state["pipeIdDisabled"]==false)
                  {   
                          
                      
                      for(let x in data[state.description][state.normSize])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }
                  
                
                  }
              break;
              case "normWeight":
                  if(state["normWeightDisabled"]==false)
                  {   
                          
                      
                      for(let x in data[state.description][state.normSize][state.pipeId])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }
                  
                
                  }
              break;
  
              case "adjustWeight":
                  if(state["adjustWeightDisabled"]==false)
                  {   
                          
                      
                      for(let x in data[state.description][state.normSize][state.pipeId][state.normWeight])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }
                  
                
                  }
              break;
  
              case "grade":
                  if(state["gradeDisabled"]==false)
                  {   
                          
                      
                      for(let x in data[state.description][state.normSize][state.pipeId][state.normWeight][state.adjustWeight])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }
                  
                
                  }
              break;
              case "upset":
                  if(state["upsetDisabled"]==false)
                  {   
                          
                      
                      for(let x in data[state.description][state.normSize][state.pipeId][state.normWeight][state.adjustWeight][state.grade])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }

                  }
                break;
  
              case "thread":
                  if(state["threadDisabled"]==false)
                  {
                      
                      for(let x in data[state.description][state.normSize][state.pipeId][state.normWeight][state.adjustWeight][state.grade][state.upset])
                      {
                          temp=temp+"<option value=\""+x+"\">"+x+"</option>";
                      }
  
                      
                  }
                break;
              default:
              alert("something went wrong: "+ name)
              break;
          }

          return{__html:temp};
  
    }



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
        console.log(JSON.stringify(state));
        alert(JSON.stringify(data[state.description][state.normSize][state.pipeId][state.normWeight][state.adjustWeight][state.grade][state.upset][state.thread],null,2))
    }


class NewWellFull extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }


 


       handleChange = (state,event) => {


        let name = event.target.name;
        let value = event.target.value;
        switch(name)
        {
    
    
            case "description":
            if(value!="undecided")
            {
                
                this.setState({
                    description:value,
                    normSize:state.normSize,
                    pipeId:state.pipeId,
                    normWeight:state.normWeight,
                    adjustWeight:state.adjustWeight,
                    grade:state.grade,
                    upset:state.upset,
                    thread:state.thread,
                    normSizeDisabled:false,
                    pipeIdDisabled:true,
                    normWeightDisabled:true,
                    adjustWeightDisabled:true,
                    gradeDisabled:true,
                    upsetDisabled:true,
                    threadDisabled:true,
                    canSubmit:true,
                });
            }else{
                this.setState({
                    description:'',
                    normSize:'',
                    pipeId:'',
                    normWeight:'',
                    adjustWeight:'',
                    grade:'',
                    upset:'',
                    thread:'',
                    normSizeDisabled:true,
                    pipeIdDisabled:true,
                    normWeightDisabled:true,
                    adjustWeightDisabled:true,
                    gradeDisabled:true,
                    upsetDisabled:true,
                    threadDisabled:true,
                    canSubmit:true,
                })
            }
            break;
    
            case "normSize":
            if(value!="undecided")
            {
                
                this.setState({
                        description:state.description,
                        normSize:value,
                        pipeId:state.pipeId,
                        normWeight:state.normWeight,
                        adjustWeight:state.adjustWeight,
                        grade:state.grade,
                        upset:state.upset,
                        thread:state.thread,
                        normSizeDisabled:false,
                        pipeIdDisabled:false,
                        normWeightDisabled:true,
                        adjustWeightDisabled:true,
                        gradeDisabled:true,
                        upsetDisabled:true,
                        threadDisabled:true,
                        canSubmit:true,
                    });
            }else{
                this.setState({
                    description:state.description,
                    normSize:'',
                    pipeId:'',
                    normWeight:'',
                    adjustWeight:'',
                    grade:'',
                    upset:'',
                    thread:'',
                    normSizeDisabled:false,
                    pipeIdDisabled:true,
                    normWeightDisabled:true,
                    adjustWeightDisabled:true,
                    gradeDisabled:true,
                    upsetDisabled:true,
                    threadDisabled:true,
                    canSubmit:true,
                })
            }
            break;
    
            case "pipeId":
            if(value!="undecided")
            {
                
                this.setState({
                    description:state.description,
                    normSize:state.normSize,
                    pipeId:value,
                    normWeight:state.normWeight,
                    adjustWeight:state.adjustWeight,
                    grade:state.grade,
                    upset:state.upset,
                    thread:state.thread,
                    normSizeDisabled:false,
                    pipeIdDisabled:false,
                    normWeightDisabled:false,
                    adjustWeightDisabled:true,
                    gradeDisabled:true,
                    upsetDisabled:true,
                    threadDisabled:true,
                    canSubmit:true,
                })
            }else{
                this.setState({
                    description:state.description,
                    normSize:state.normSize,
                    pipeId:'',
                    normWeight:'',
                    adjustWeight:'',
                    grade:'',
                    upset:'',
                    thread:'',
                    normSizeDisabled:false,
                    pipeIdDisabled:false,
                    normWeightDisabled:true,
                    adjustWeightDisabled:true,
                    gradeDisabled:true,
                    upsetDisabled:true,
                    threadDisabled:true,
                    canSubmit:true,
                })
            }
            break;
    
            case "normWeight":
                if(value!="undecided")
        {
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:value,
                adjustWeight:state.adjustWeight,
                grade:state.grade,
                upset:state.upset,
                thread:state.thread,
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:true,
                upsetDisabled:true,
                threadDisabled:true,
                canSubmit:true,
            })
            
        }else{
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:'',
                adjustWeight:'',
                grade:'',
                upset:'',
                thread:'',
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:true,
                gradeDisabled:true,
                upsetDisabled:true,
                threadDisabled:true,
                canSubmit:true,
            })
        }
            break;
    
            case "adjustWeight":
                if(value!="undecided")
        {
            
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:value,
                grade:state.grade,
                upset:state.upset,
                thread:state.thread,
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:true,
                threadDisabled:true,
                canSubmit:true,
            });
        }else{
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:'',
                grade:'',
                upset:'',
                thread:'',
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:true,
                upsetDisabled:true,
                threadDisabled:true,
                canSubmit:true,
            })
        }
            break;
    
            case "grade":
                if(value!="undecided")
        {
            
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:state.adjustWeight,
                grade:value,
                upset:state.upset,
                thread:state.thread,
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:false,
                threadDisabled:true,
                canSubmit:true,
            })
        }else{
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:state.adjustWeight,
                grade:'',
                upset:'',
                thread:'',
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:true,
                threadDisabled:true,
                canSubmit:true,
            })
        }
            break;
    
            case "upset":
                if(value!="undecided")
        {
            
            this.setState({                    
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:state.adjustWeight,
                grade:state.grade,
                upset:value,
                thread:state.thread,
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:false,
                threadDisabled:false,
                canSubmit:true,});
        }else{
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:state.adjustWeight,
                grade:state.grade,
                upset:'',
                thread:'',
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:false,
                threadDisabled:true,
                canSubmit:true,
            })
        }
            break;
    
            case "thread":
                if(value!="undecided")
        {
            
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:state.adjustWeight,
                grade:state.grade,
                upset:state.upset,
                thread:value,
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:false,
                threadDisabled:false,
                canSubmit:false,
            });
        }else{
            this.setState({
                description:state.description,
                normSize:state.normSize,
                pipeId:state.pipeId,
                normWeight:state.normWeight,
                adjustWeight:state.adjustWeight,
                grade:state.grade,
                upset:state.upset,
                thread:'',
                normSizeDisabled:false,
                pipeIdDisabled:false,
                normWeightDisabled:false,
                adjustWeightDisabled:false,
                gradeDisabled:false,
                upsetDisabled:false,
                threadDisabled:false,
                canSubmit:true,
            })
        }
            break;
    
        default:
        alert('something went wrong in the on change function')
        break;
    
        }
    
        
        
        
    
      }

    render(){
        const {
            description,
            normSize,
            pipeId,
            normWeight,
            adjustWeight,
            grade,
            upset,
            thread,
            normSizeDisabled,
            pipeIdDisabled,
            normWeightDisabled,
            adjustWeightDisabled,
            gradeDisabled,
            upsetDisabled,
            threadDisabled,
            canSubmit,
        } = this.state;
        return (
            <div>
                
                <form onSubmit={(event)=>{handleSubmit(this.state,event)}}>
                    <table style={{"width":"100%"}}>
                        <thead>
                            <tr>
                            <th>Description</th>
                            <th>Norminal Size</th>
                            <th>Pipe Inner Diameter</th>
                            <th>Norminal Weight</th>
                            <th>Adjust Weight</th>
                            <th>Grade</th>
                            <th>Upset</th>
                            <th>Thread</th>
                            <th>Submit</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <select id="description" name="description" ref="description" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"description")} >

                                </select>
                            </td>
                            <td>
                                <select id="normSize" name="normSize" ref="normSize" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"normSize")} 
                                 disabled={normSizeDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                            <select id="pipeId" name="pipeId" ref="pipeId" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"pipeId")} 
                                 disabled={pipeIdDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                            <select id="normWeight" name="normWeight" ref="normWeight" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"normWeight")} 
                                 disabled={normWeightDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                            <select id="adjustWeight" name="adjustWeight" ref="adjustWeight" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"adjustWeight")} 
                                 disabled={adjustWeightDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                            <select id="grade" name="grade" ref="grade" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"grade")} 
                                 disabled={gradeDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                            <select id="upset" name="upset" ref="upset" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"upset")} 
                                 disabled={upsetDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                            <select id="thread" name="thread" ref="thread" onChange={(event)=>this.handleChange(this.state,event)}
                                 dangerouslySetInnerHTML={renderOptions(this.state,"thread")} 
                                 disabled={threadDisabled}>
                                 
                                 </select>
                            </td>
                            <td>
                                <input type="submit" value="submit" disabled={canSubmit} />
                            </td>
                        </tr>
                        </tbody>
                    </table>


                </form>
            </div>
        )
    }

}

export default NewWellFull;