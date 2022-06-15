import React from 'react'
import ReactDOM from 'react-dom'
import './input.css'
import TableHR from './tableHR.js'
import InputBox from './inputBox.js'
import {
    Link,
  } from "react-router-dom";


class HRManagement extends React.Component{
    state={
        buttonStatus:'none',
    }

    HandleInputValue=(event)=>{
        const value = event.target.value;
        console.log(value);
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
                <TableHR tableTitle={this.props.tableHRTitle} tableContent={this.props.tableHRContent} onDeletePerson={this.props.onDeletePerson} buttonStatus={this.state.buttonStatus}/> 
                <div className='buttonMargin'>
                    <Link to='person' className='btn btn1'>Add New</Link>
                    <button onClick={this.HandleClickControlDisplay} className='btn '>Delete</button>
                    
                </div>
                 
                
            </div>
        );
    }
}

export default HRManagement;