import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableCost from './tableCost.js'
import InputBoxBudget from '../componentsCommon/inputBoxBudget.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {
    Link,
  } from "react-router-dom";
// import Axios from 'axios'
const Axios = require('axios').default;

class CostManagement extends React.Component{
    state={
        buttonStatus:'none',
        // table:[],
        // totalCost:"",
        // arr:"",
    }
    
    getData=(event)=>{
        // event.preventDefault();
        Axios.post('/getCost',{
            id:this.props.id,
        }).then((response)=>{
            console.log(response);
            if(response.data.length>0){
            // this.setState({table:response.data});
            this.props.setTableCostContent(response.data)
            }
        })
    }
    
    getBudget=(event)=>{
        // event.preventDefault();
        Axios.post('/getBudget',{
            id:this.props.id,
        }).then((response)=>{
            //  console.log(response);
             if(response.data.length>0){
                this.props.setBudget(response.data[response.data.length-1].budget);
            }else{
                this.props.setBudget("");
            }
        })
    }

    getTotalCost=(event)=>{
        // event.preventDefault();
        Axios.post('/getTotalCost',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if(response.data.length>0){
                this.props.setTotalCost(response.data[response.data.length-1].totalCost);
            }else{
                this.props.setTotalCost("");
            }
            
        })
    }
    
    componentDidMount(){
        this.getData();
        this.getBudget();
        this.getTotalCost();
    }
    
    render(){ 
        
        return(
            <div className='costarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1>{this.props.section.props.children}</h1>
                <InputBoxBudget id={this.props.id} budget={this.props.budget} setBudget={this.props.setBudget} />
                <TableCost 
                id={this.props.id} 
                tableTitle={this.props.tableCostTitle} 
                tableCostContent={this.props.tableCostContent}  
                setTableCostContent={this.props.setTableCostContent} 
                totalCost={this.props.totalCost}
                setTotalCost={this.props.setTotalCost}
                buttonStatus={this.state.buttonStatus}/>
                <div style={{width:'100%'}} className='buttonMargin'>
                    <div style={{width:'auto', display:'inline-block', marginLeft:'5px'}}>
                        <span className="figures" >Total cost $: {this.props.totalCost}</span>
                    
                        <span className="figures">Amount of money remaining $: {this.props.budget - this.props.totalCost}</span>
                        
                    </div>
                    
                    <Link to='expense' className='btn btnNew btn1'>Add New</Link>
                    <button onClick={()=>{this.setState({buttonStatus:HandleClickControlDisplay(this.state.buttonStatus)});}} className="btn ">Delete</button>
                    
                </div>  
                
            </div>
        );
    }
}

export default CostManagement;