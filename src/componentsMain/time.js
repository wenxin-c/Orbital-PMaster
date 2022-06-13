import React from 'react'
import ReactDOM from 'react-dom'
import './input.css'
import TableTime from './tableTime.js'
import InputBox from './inputBox.js'
import {
    Link,
  } from "react-router-dom";

class TimeManagement extends React.Component{
    state={
        description:"What's the duration of your project? (Please enter the number of days)",
        total:'Total duration: ',
        userInput:0,
    }

    HandleInputValue=(event)=>{
        this.setState({userInput:event.target.value});
        
    }

    render(){
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBox description={this.state.description} total={this.state.total} userInput={this.state.userInput} onInput={this.HandleInputValue}/>
                <TableTime tableTitle={this.props.tableTimeTitle} tableContent={this.props.tableTimeContent}/>
                <div style={{width:'100%'}}>
                    <div style={{width:'auto', display:'inline-block'}}>
                        <span>Amount of time remaining:</span>
                    </div>
                    <Link to='task' className='btn'>Add New</Link> 
                </div>  
                
            </div>
        );
    }
}

export default TimeManagement;