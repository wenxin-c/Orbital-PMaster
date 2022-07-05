import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableTime from './tableTime.js'
import InputBoxDuration from '../componentsCommon/inputBoxDuration.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'

import {
    Link,
  } from "react-router-dom";
// import Axios from 'axios' ;
import Axios from 'axios'

class TimeManagement extends React.Component{
    state={
        
        buttonStatus:'none',
        // table:[],
    }

    getData=(event)=>{
        // event.preventDefault();
        Axios.post('/getTask',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if(response.data.length>0){
           this.props.setTableTimeContent(response.data);
            }
        })
    }

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
            </div>
        );
    }
}

export default TimeManagement;