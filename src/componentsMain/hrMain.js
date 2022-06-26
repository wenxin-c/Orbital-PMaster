import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableHR from './tableHR.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {
    Link,
  } from "react-router-dom";
import Axios from 'axios' ;


class HRManagement extends React.Component{
    state={
        buttonStatus:'none',
        table:[],
    }

    getData=()=>{
        Axios.post('http://localhost:5005/getHR',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            this.setState({table:response.data});
        })
    }

    render(){

        this.getData();
        
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <TableHR id={this.props.id} tableTitle={this.props.tableHRTitle} tableContent={this.state.table} buttonStatus={this.state.buttonStatus}/> 
                <div className='buttonMargin'>
                    <Link to='person' className='btn btn1'>Add New</Link>
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className='btn '>Delete</button>
                </div>
            </div>
        );
    }
}

export default HRManagement;