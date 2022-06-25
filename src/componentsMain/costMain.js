import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableCost from './tableCost.js'
import InputBoxBudget from '../componentsCommon/inputBoxBudget.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {
    Link,
  } from "react-router-dom";
import Axios from 'axios'

class CostManagement extends React.Component{
    state={
        buttonStatus:'none',
        table:[],
        totalCost:"",
        arr:"",
    }
    
    getData=()=>{
        Axios.post('/getCost',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            this.setState({table:response.data});
        })
    }
    getBudget=()=>{
        Axios.post('/getBudget',{
            id:this.props.id,
        }).then((response)=>{
            //  console.log(response);
             if(response.data.length>0){
                this.setState({arr:response.data[response.data.length-1].budget});
            }else{
                this.setState({arr:""});
            }
        })
    }

    getTotalCost=()=>{
        Axios.post('/getTotalCost',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if(response.data.length>0){
                this.setState({totalCost:response.data[response.data.length-1].totalCost});
            }else{
                this.setState({totalCost:""});
            }
            
        })
    }
    
    render(){ 
       
        this.getBudget();
        this.getData();
        this.getTotalCost();
        
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBoxBudget id={this.props.id} arr={this.state.arr}/>
                <TableCost id={this.props.id} tableTitle={this.props.tableCostTitle} tableContent={this.state.table}  buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}} className='buttonMargin'>
                    <div style={{width:'auto', display:'inline-block', marginLeft:'5px'}}>
                        <span className="figures">Total cost: {this.state.totalCost}</span>
                    
                        <span className="figures">Amount of money remaining: {this.state.arr - this.state.totalCost}</span>
                        
                    </div>
                    
                    <Link to='expense' className='btn btnNew btn1'>Add New</Link>
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className="btn ">Delete</button>
                    
                </div>  
                
            </div>
        );
    }
}

export default CostManagement;