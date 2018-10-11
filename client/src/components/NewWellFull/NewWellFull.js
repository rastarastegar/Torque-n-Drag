//i have seen hell... it is made of unnecessarily repetitive code.
//
//this code is a tragedy... the entire time spent writing this
//was spent thinking about how i could do the same thing with significantly less code. however i had already
//committed and was too far in to let go.
//arrays and loops are your friend.
//
//i have seen hell... it is made of unnecessarily repetitive code.
//
//dear reader... please learn from my mistake. just let go and press delete. just do it. you have the concept, just make the loops and do the thing. ez.
//i could have used jsx. why didn't i? i just had to go with the origional plan huh?
//
//my brain evolved well past this solution about 2 minutes into writing it yet i still continued. why?
//i just did the first thing that popped into my head. and then couldn't stop myself.
//why continue down this terrible path?
//COMITTED!!!1!1
//i have seen hell... it is made of unnecessarily repetitive code.
//lesson to the reader: don't commit to something that you know deep down is truly terrible
//
//~yours truly -nitsuA~
//p.s. i've been up for a solid 24 hours.
//p.p.s. my mind feels numb... i have to express this tragedy. thank you for witnessing my meltdown
//p.p.p.s
// let satan = "i have seen hell... it is made of unnecessarily repetitive code.";
// let angel = satan.split('')
// for(let i=0;i<angel.length;i++){
// console.log(angel.join(''))
// let x = angel.shift();
// angel.push(x);
// }
//or
// i have seen hell... it is made of unnecessarily repetitive code.
//  have seen hell... it is made of unnecessarily repetitive code.i
// have seen hell... it is made of unnecessarily repetitive code.i
// ave seen hell... it is made of unnecessarily repetitive code.i h
// ve seen hell... it is made of unnecessarily repetitive code.i ha
// e seen hell... it is made of unnecessarily repetitive code.i hav
//  seen hell... it is made of unnecessarily repetitive code.i have
// seen hell... it is made of unnecessarily repetitive code.i have
// een hell... it is made of unnecessarily repetitive code.i have s
// en hell... it is made of unnecessarily repetitive code.i have se
// n hell... it is made of unnecessarily repetitive code.i have see
//  hell... it is made of unnecessarily repetitive code.i have seen
// hell... it is made of unnecessarily repetitive code.i have seen
// ell... it is made of unnecessarily repetitive code.i have seen h
// ll... it is made of unnecessarily repetitive code.i have seen he
// l... it is made of unnecessarily repetitive code.i have seen hel
// ... it is made of unnecessarily repetitive code.i have seen hell
// .. it is made of unnecessarily repetitive code.i have seen hell.
// . it is made of unnecessarily repetitive code.i have seen hell..
//  it is made of unnecessarily repetitive code.i have seen hell...
// it is made of unnecessarily repetitive code.i have seen hell...
// t is made of unnecessarily repetitive code.i have seen hell... i
//  is made of unnecessarily repetitive code.i have seen hell... it
// is made of unnecessarily repetitive code.i have seen hell... it
// s made of unnecessarily repetitive code.i have seen hell... it i
//  made of unnecessarily repetitive code.i have seen hell... it is
// made of unnecessarily repetitive code.i have seen hell... it is
// ade of unnecessarily repetitive code.i have seen hell... it is m
// de of unnecessarily repetitive code.i have seen hell... it is ma
// e of unnecessarily repetitive code.i have seen hell... it is mad
//  of unnecessarily repetitive code.i have seen hell... it is made
// of unnecessarily repetitive code.i have seen hell... it is made
// f unnecessarily repetitive code.i have seen hell... it is made o
//  unnecessarily repetitive code.i have seen hell... it is made of
// unnecessarily repetitive code.i have seen hell... it is made of
// nnecessarily repetitive code.i have seen hell... it is made of u
// necessarily repetitive code.i have seen hell... it is made of un
// ecessarily repetitive code.i have seen hell... it is made of unn
// cessarily repetitive code.i have seen hell... it is made of unne
// essarily repetitive code.i have seen hell... it is made of unnec
// ssarily repetitive code.i have seen hell... it is made of unnece
// sarily repetitive code.i have seen hell... it is made of unneces
// arily repetitive code.i have seen hell... it is made of unnecess
// rily repetitive code.i have seen hell... it is made of unnecessa
// ily repetitive code.i have seen hell... it is made of unnecessar
// ly repetitive code.i have seen hell... it is made of unnecessari
// y repetitive code.i have seen hell... it is made of unnecessaril
//  repetitive code.i have seen hell... it is made of unnecessarily
// repetitive code.i have seen hell... it is made of unnecessarily
// epetitive code.i have seen hell... it is made of unnecessarily r
// petitive code.i have seen hell... it is made of unnecessarily re
// etitive code.i have seen hell... it is made of unnecessarily rep
// titive code.i have seen hell... it is made of unnecessarily repe
// itive code.i have seen hell... it is made of unnecessarily repet
// tive code.i have seen hell... it is made of unnecessarily repeti
// ive code.i have seen hell... it is made of unnecessarily repetit
// ve code.i have seen hell... it is made of unnecessarily repetiti
// e code.i have seen hell... it is made of unnecessarily repetitiv
//  code.i have seen hell... it is made of unnecessarily repetitive
// code.i have seen hell... it is made of unnecessarily repetitive
// ode.i have seen hell... it is made of unnecessarily repetitive c
// de.i have seen hell... it is made of unnecessarily repetitive co
// e.i have seen hell... it is made of unnecessarily repetitive cod
// .i have seen hell... it is made of unnecessarily repetitive code
//
//pppppppps... that felt good. i just needed to express that. 
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
        {/*have a concept of how to do all this with a for loop*/}
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
                            <tr>{/*literally could have done all this with a for loop*/}
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
                        <tr>{/*literally could have done all this with a for loop*/}
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