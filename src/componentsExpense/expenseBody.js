import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/expenseBody.css'
import Heading from '../componentsCommon/headingContent.js'
import ExpenseContent from './expenseContent.js'
import {TableCostIncrement} from './../functions/tableIncrement.js'
import Axios from 'axios'
import { TotalCost } from '../functions/totalCost'

/**
 * @file: expenseBody.js
 * @author: wenxin
 * 
 * This is the main body of the new expense page. 
 * It contains two parts: Heading and ExpenseBody. 
 * 
 * @return react-dom
 */

class ExpenseBody extends React.Component{
    state={
        title:'New Expense Item',
        info1:'Item Type',
        info2:'Item',
        info3:'Date',
        info4:'Unit Cost',
        info5:'Units',
        info6:'Total Cost',
        infoType:'date',
        content1:'',
        content2:'',
        content3:'',
        content4:'',
        content5:'',
        content6:'',

    }

    /**
     * Total cost = unit cost * units
     */
    calculateTotalCost = () =>{
        this.setState({content6:TotalCost(this.state.content4, this.state.content5)});
        console.log('hello'+this.state.content6);
    }

    /**
     * This function is called when a new item is added into the table. 
     * A backend post request api with route /getTotalCost is called. 
     * ID is passed to backend and total cost of all items that belong to this ID is calculated and passed to frontend. 
     */

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

    render(){
        let styles={
            backgroundColor:'#f3f6f8', 
            width:'100%', 
            height:'auto',
            position:'absolute', 
            top:'50px',
            left:'0',
            zIndex:'-1'
           }

        return(
            <div style={styles}>
                <div style={{marginBottom:'80px', marginTop:'20px', marginLeft:'75px', marginRight:'75px', width:'calc(100vw - 150px)'}} className='contentWrapper'>
                    <Heading title={this.state.title} onClickSave={(event)=>{this.props.setTableCostContent(TableCostIncrement(
                        this.props.tableCostContent, 
                        event,
                        this.state.content1, 
                        this.state.content2, 
                        this.state.content3, 
                        this.state.content4, 
                        this.state.content5, 
                        this.state.content6,
                        this.props.id));
                        this.getTotalCost(event)}}/>
                    <ExpenseContent 
                    onValue1={(event)=>{this.setState({content1:event.target.value})}} 
                    onValue2={(event)=>{this.setState({content2:event.target.value})}} 
                    onValue3={(event)=>{this.setState({content3:event.target.value})}} 
                    onValue4={(event)=>{this.setState({content4:event.target.value})}} 
                    onValue5={(event)=>{this.setState({content5:event.target.value})}} 
                    // onValue6={(event)=>{this.setState({content6:event.target.value})}}
                    // unitCost={this.state.unitCost}
                    // units={this.state.content4}
                    content6={this.state.content6}
                    calculateTotalCost={this.calculateTotalCost}
                    expenseState={this.state}
                    />
                </div>
            </div>
        );
    }
}

export default ExpenseBody;