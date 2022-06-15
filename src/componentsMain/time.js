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
        buttonStatus:'none',
    }

    HandleInputValue=(event)=>{
        this.setState({userInput:event.target.value});
        
    }

    HandleClickControlDisplay=()=>{
        if(this.state.buttonStatus==='none'){
          this.setState({buttonStatus:'inline-block'});
        }else{
          this.setState({buttonStatus:'none'})
        }
    }


    render(){
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBox description={this.state.description} total={this.state.total} userInput={this.state.userInput} onInput={this.HandleInputValue} />
                <TableTime tableTitle={this.props.tableTimeTitle} tableContent={this.props.tableTimeContent} onDeleteTask={this.props.onDeleteTask} buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}} className="buttonMargin">
                    <div style={{width:'auto', display:'inline-block'}}>
                        <span>Amount of time remaining:</span>
                    </div>
                    
                    <Link to='task' className='btn btn1'>Add New</Link>  
                    <button onClick={this.HandleClickControlDisplay} className='btn '>Delete</button>
                </div>  
            </div>
        );
    }
}

export default TimeManagement;