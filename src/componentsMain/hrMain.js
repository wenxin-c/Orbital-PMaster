import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableHR from './tableHR.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {
    Link,
  } from "react-router-dom";


class HRManagement extends React.Component{
    state={
        buttonStatus:'none',
    }

    render(){
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <TableHR tableTitle={this.props.tableHRTitle} tableContent={this.props.tableHRContent} onDeletePerson={this.props.onDeletePerson} buttonStatus={this.state.buttonStatus}/> 
                <div className='buttonMargin'>
                    <Link to='person' className='btn btn1'>Add New</Link>
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className='btn '>Delete</button>
                </div>
            </div>
        );
    }
}

export default HRManagement;