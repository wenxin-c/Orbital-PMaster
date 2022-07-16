import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableTime from './tableTime.js'
import InputBoxDuration from '../componentsCommon/inputBoxDuration.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import TimeLine from './../componentsCommon/timeline.js'
import {SortDate} from './../functions/sortDate.js'
import { Timeline } from 'antd';
import './../styles/timeline.css'

import {
    Link,
  } from "react-router-dom";
// import Axios from 'axios' ;
import Axios from 'axios'

/**
 * @file: timeMain.js
 * @author: wenxin
 * 
 * This is the time management section. 
 * It contains three main parts: input section, task table and timeline. 
 * 
 * @return react-dom
 */

class TimeManagement extends React.Component{
    state={
        
        buttonStatus:'none',
        // table:[],
    }

    /**
     * This function is called when the web page mounts. 
     * A backend post request api with route /getTask is called. 
     * ID is passed to backend and all tasks that belong to this ID is sent to frontend to generate task table. 
     */

    getData=(event)=>{
        // event.preventDefault();
        Axios.post('/getTask',{
            id:this.props.id,
        }).then((response)=>{
            console.log(response);
            if(response.data.length>0){
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].duration=new Date(response.data[i].duration);
                // response.data[i].duration=response.data[i].duration.duration;
                // console.log(response.data[i].duration)
                response.data = SortDate(response.data);
            }
            for (let j=0; j<response.data.length; j++){
                let dateString = response.data[j].duration.toString();
                response.data[j].duration=dateString;
            }
            console.log(response.data);
            this.props.setTableTimeContent(response.data);
            }
        })
    }

    /**
     * This function is called when the web page mounts. 
     * A backend post request api with route /getDuration is called. 
     * ID is passed to backend and the total duration that belong to this ID is sent to frontend. 
     */

    getTotalDuration=(event)=>{
        // event.preventDefault();
        Axios.post('/getDuration',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if(response.data.length>0){
               
                this.props.setTotalDuration(response.data[response.data.length-1].duration);
               
            }else{
                this.props.setTotalDuration("");
            }
            
        })
    }

    componentDidMount(){
        this.getData();
        this.getTotalDuration();
    }

    render(){

        
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBoxDuration  id={this.props.id} totalDuration={this.props.totalDuration} setTotalDuration={this.props.setTotalDuration}/>
                <TableTime id={this.props.id} tableTitle={this.props.tableTimeTitle} tableTimeContent={this.props.tableTimeContent} setTableTimeContent={this.props.setTableTimeContent} buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}} className="buttonMargin">
                    <div style={{width:'auto', display:'inline-block', marginLeft:'5px'}}>
                        {/* <span>Amount of time remaining:</span> */}
                    </div>
                    
                    <Link to='task' className='btn btn1'>Add New</Link>  
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className='btn '>Delete</button>
                </div>  
                <div className='timeline'>
                    <Timeline>
                        <span className='title'>Time Line</span>
                        {this.props.tableTimeContent.map(timelineData=><TimeLine timelineData={timelineData}/>)}
                    </Timeline>
                </div>
                
            </div>
        );
    }
}

export default TimeManagement;