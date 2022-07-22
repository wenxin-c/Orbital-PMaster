import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import ExpenseBody from './../componentsExpense/expenseBody.js'

/**
 * @file:newExpense.js
 * @author: wenxin
 * 
 * This is a new page in which users can add new cost items. 
 * It contains two individual components, namely TopNavBar and ExpenseBody. 
 * 
 * @return: react-dom
 */
class NewExpense extends React.Component{
    componentDidMount(){
        const token = this.props.getToken();
         this.props.setID(token.id);
         this.props.setUsername(token.username)
   }

    render(){
        return(
            <div>
                <TopNavBar username={this.props.username}
                setID={this.props.setID}
                setUsername={this.props.setUsername}
                setPassword={this.props.setPassword}
                setDisplayStatus={this.props.setDisplayStatus}
                setLoginStatus={this.props.setLoginStatus}
                />
                <ExpenseBody totalCost={this.props.totalCost} setTotalCost={this.props.setTotalCost} tableCostContent={this.props.tableCostContent} setTableCostContent={this.props.setTableCostContent} id={this.props.id}/>
            </div>
            
        );
    }
}

export default NewExpense;