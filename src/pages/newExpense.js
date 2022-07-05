import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import ExpenseBody from './../componentsExpense/expenseBody.js'

class NewExpense extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar username={this.props.username}/>
                <ExpenseBody totalCost={this.props.totalCost} setTotalCost={this.props.setTotalCost} tableCostContent={this.props.tableCostContent} setTableCostContent={this.props.setTableCostContent} id={this.props.id}/>
            </div>
            
        );
    }
}

export default NewExpense;