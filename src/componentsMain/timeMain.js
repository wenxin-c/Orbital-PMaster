import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableTime from './tableTime.js'
import InputBox from '../componentsCommon/inputBox.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {HandleInput} from './../functions/handleInput.js'
import {
    Link,
  } from "react-router-dom";
import Axios from 'axios' ;

class TimeManagement extends React.Component{
    state={
        description:"What's the duration of your project? (Please enter the number of days)",
        total:'Total duration: ',
        userInput:0,
        buttonStatus:'none',
        inputType:'text',
        table:[],
    }

    getData=()=>{
        Axios.get('/getTask').then((response)=>{
            this.setState({table:response.data});
        })
    }

    render(){
        this.getData();
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBox description={this.state.description} total={this.state.total} userInput={this.state.userInput} onInput={(event)=>{this.setState({userInput:HandleInput(event)});}} inputType={this.state.inputType}/>
                <TableTime tableTitle={this.props.tableTimeTitle} tableContent={this.state.table}  buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}} className="buttonMargin">
                    <div style={{width:'auto', display:'inline-block', marginLeft:'5px'}}>
                        <span>Amount of time remaining:</span>
                    </div>
                    
                    <Link to='task' className='btn btn1'>Add New</Link>  
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className='btn '>Delete</button>
                </div>  
            </div>
        );
    }
}

export default TimeManagement;