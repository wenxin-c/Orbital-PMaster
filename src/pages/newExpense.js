import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsMain/topNavBar.js'
import ExpenseContent from './../componentsExpense/expenseContent.js'

class NewExpense extends React.Component{
    render(){
        
        return(
            <div>
                <TopNavBar />
                <ExpenseContent onIncrementCost={this.props.onIncrementCost}/>
            </div>
            
        );
    }
}

export default NewExpense;