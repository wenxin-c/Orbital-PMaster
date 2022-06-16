import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import ExpenseBody from './../componentsExpense/expenseBody.js'

class NewExpense extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar />
                <ExpenseBody onIncrementCost={this.props.onIncrementCost}/>
                
            </div>
            
        );
    }
}

export default NewExpense;