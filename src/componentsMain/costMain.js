import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'
import TableCost from './tableCost.js'
import InputBoxBudget from '../componentsCommon/inputBoxBudget.js'
import {HandleClickControlDisplay} from './../functions/handleStyle.js'
import {
    Link,
  } from "react-router-dom";
const Axios = require('axios').default;

/**
 * @file: costMain.js
 * @author: wenxin
 * 
 * This is the cost management section. 
 * It contains two main parts: an input section and a cost table.
 * 
 * @return react-dom
 */

class CostManagement extends React.Component{
    state={
        buttonStatus:'none',
        // table:[],
        // totalCost:"",
        // arr:"",
    }
    
    /**
     * This function is called once when the web page mounts. 
     * A backend post request api with route /getCost is called. 
     * ID is passed to backend and all cost items belong to this ID is sent back to frontend and is used to generate the cost table. 
     * 
     */

//     getData=(event)=>{
//         // event.preventDefault();
//         Axios.post('/getCost',{
//             id:this.props.id,
//         }).then((response)=>{
//             console.log(response);
//             if(response.data.length>0){
//             // this.setState({table:response.data});
//             sessionStorage.setItem('costTable', JSON.stringify(response.data));
//             // this.props.setTableCostContent(response.data)
//             this.props.setTableCostContent(this.getCost())
//             }
//         })
//     }

//    getCost = () =>{
//         const tokenString = sessionStorage.getItem('costTable');
//         const userToken = JSON.parse(tokenString);
//         return userToken;
//         // return userToken?.token
//     }
    
    /**
     * This function is called once when the web page mounts. 
     * A backend post request api with route /getBudget is called. 
     * ID is passed to backend and budgets belong to this ID is sent back to frontend and the newest budget is displayed. 
     *  
     */

    // getBudget=(event)=>{
    //     // event.preventDefault();
    //     Axios.post('/getBudget',{
    //         id:this.props.id,
    //     }).then((response)=>{
    //         //  console.log(response);
    //          if(response.data.length>0){
    //             this.props.setBudget(response.data[response.data.length-1].budget);
    //         }else{
    //             this.props.setBudget("");
    //         }
    //     })
    // }

      /**
     * This function is called once when the web page mounts. 
     * A backend post request api with route /getTotalCost is called. 
     * ID is passed to backend and the total cost of all items that belong to this ID is calculated and sent back to frontend for display. 
     * 
     */

    // getTotalCost=(event)=>{
    //     // event.preventDefault();
    //     Axios.post('/getTotalCost',{
    //         id:this.props.id,
    //     }).then((response)=>{
    //         // console.log(response);
    //         if(response.data.length>0){
    //             this.props.setTotalCost(response.data[response.data.length-1].totalCost);
    //         }else{
    //             this.props.setTotalCost("");
    //         }
            
    //     })
    // }
    
    componentDidMount(){
        // this.getData();
        // this.getBudget();
        // this.getTotalCost();

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