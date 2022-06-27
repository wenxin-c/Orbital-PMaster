import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableTime from './tableTime.js'
import InputBoxDuration from '../componentsCommon/inputBoxDuration.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'

import {
    Link,
  } from "react-router-dom";
import Axios from 'axios' ;

class TimeManagement extends React.Component{
    state={
        
        buttonStatus:'none',
        table:[],
    }

    getData=()=>{
        Axios.post('/getTask',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if (response.data.length>0){
                this.setState({table:response.data});
            }
            
        })
    }

    render(){

        this.getData();
        
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBoxDuration id={this.props.id} />
                <TableTime id={this.props.id} tableTitle={this.props.tableTimeTitle} tableContent={this.state.table} buttonStatus={this.state.buttonStatus}/>
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