import React from 'react'
import ReactDOM from 'react-dom'
import './input.css'
import TableCost from './tableCost.js'
import InputBox from './inputBox.js'
import {
    Link,
  } from "react-router-dom";

class CostManagement extends React.Component{
    state={
       description:'How much budget do you have? (Please enter numbers)',
       total:'Total amount of budget: ',
       userInput:'0',
       buttonStatus:'none',
    }
    
    HandleClickControlDisplay=()=>{
        if(this.state.buttonStatus==='none'){
          this.setState({buttonStatus:'inline-block'});
        }else{
          this.setState({buttonStatus:'none'})
        }
    }

    HandleInputValue=(event)=>{
        this.setState({userInput:event.target.value});
        
    }


    render(){ 
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBox description={this.state.description} total={this.state.total} userInput={this.state.userInput} onInput={this.HandleInputValue} />
                <TableCost tableTitle={this.props.tableCostTitle} tableContent={this.props.tableCostContent} onDeleteCost={this.props.onDeleteCost} buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}}>
                    <div style={{width:'auto', display:'inline-block'}}>
                        <span >Total cost:</span>
                        <span>Amount of money remaining:</span>
                    </div>
                    <button onClick={this.HandleClickControlDisplay} className="btn btn1">Delete</button>
                    <Link to='expense' className='btn'>Add New</Link>
                    
                </div>  
                
            </div>
        );
    }
}

export default CostManagement;