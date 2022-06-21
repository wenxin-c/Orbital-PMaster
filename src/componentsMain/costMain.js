import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableCost from './tableCost.js'
import InputBox from '../componentsCommon/inputBox.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {HandleInput} from './../functions/handleInput.js'
import {
    Link,
  } from "react-router-dom";
import Axios from 'axios'

class CostManagement extends React.Component{
    state={
       description:'How much budget do you have? (Please enter numbers)',
       total:'Total amount of budget: $',
       userInput:'0',
       buttonStatus:'none',
       inputType:'number',
       table:[],
    }
    
    getData=()=>{
        Axios.get('/getCost').then((response)=>{
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
                <TableCost tableTitle={this.props.tableCostTitle} tableContent={this.state.table}  buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}} className='buttonMargin'>
                    <div style={{width:'auto', display:'inline-block', marginLeft:'5px'}}>
                        <span >Total cost:</span>
                        <span>Amount of money remaining:</span>
                    </div>
                    
                    <Link to='expense' className='btn btnNew btn1'>Add New</Link>
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className="btn ">Delete</button>
                    
                </div>  
                
            </div>
        );
    }
}

export default CostManagement;