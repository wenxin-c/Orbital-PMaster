import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/summaryMain.css'
import {ClickEdit, ClickSave} from './../functions/mouseAction.js'
import {HandleSummaryInput} from './../functions/summary.js'
import {
    Link,
  } from "react-router-dom";
const Axios = require('axios').default;

/**
 * @file: summaryMain.js
 * @author: wenxin
 * 
 * This is the summary section of the main page. 
 * It contains four input sections with a few props for users to answer. 
 * There are two buttons for users to edit and save their answers. 
 * 
 * @return: react-dom
 */

class Summary extends React.Component{

    /**
     * This function is called once when the web page first mount. 
     * A backend post request api with route /getSummary is called. 
     * ID is passed to backend and summary content belong to this ID is passed to frontend and newest updated one is displayed. 
     */

    getData=(event)=>{
        // event.preventDefault();
        Axios.post('/getSummary',{
            id:this.props.id,
        }).then((response)=>{
            console.log(response);
            const arr = response.data;
            if(arr.length>0){
            this.props.setIssue(arr[arr.length-1].issue);
            this.props.setSolution(arr[arr.length-1].solution);
            this.props.setStakeholder(arr[arr.length-1].stakeholders)
            this.props.setOutcome(arr[arr.length-1].outcome);
            }
        })
    }

    componentDidMount(){
        this.getData();
    }

    render(){

        return(
            <div class='summaryarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1 style={{fontSize:'28px',marginBottom:'0'}}>
                {this.props.section.props.children}</h1>

                <div className="summaryTop">
                    <div className='question'>
                        <label className="records" >Identified Issue:</label>
                        <span>{this.props.issue}</span>
                    </div>
                    <div className='question'>
                        <label className="records" >Proposed Solution:</label>
                        <span>{this.props.solution}</span>
                     </div>
                </div>
                <div className="summaryBottom">
                    <div className='question'>
                        <label className="records" >Stakeholders Involved:</label>
                        <span>{this.props.stakeholder}</span>
                    </div>
                    <div className='question'>
                        <label className="records" >Expected Outcome:</label>
                        <span>{this.props.outcome}</span>
                    </div>
                </div>
               <Link to='summary' className='btn editSummary' 
               >Click to edit summary</Link>
            </div>
        );
    }
}

export default Summary;