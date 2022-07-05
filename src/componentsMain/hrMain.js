import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableHR from './tableHR.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {
    Link,
  } from "react-router-dom";
// import Axios from 'axios' ;
const Axios = require('axios').default;


class HRManagement extends React.Component{
    state={
        buttonStatus:'none',
        table:[],
    }

    getData=(event)=>{
        // event.preventDefault();
        Axios.post('/getHR',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if(response.data.length>0){
            this.props.setTableHRContent(response.data);
            }
        })
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <TableHR id={this.props.id} tableTitle={this.props.tableHRTitle} tableHRContent={this.props.tableHRContent} setTableHRContent={this.props.setTableHRContent} buttonStatus={this.state.buttonStatus}/> 
                <div className='buttonMargin'>
                    <Link to='person' className='btn btn1'>Add New</Link>
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className='btn '>Delete</button>
                </div>
            </div>
        );
    }
}

export default HRManagement;