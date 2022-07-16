import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/infoContent.css'

/**
 * @file: infoContent.js
 * @author: wenxin
 * 
 * This is the main content of the adding new cost items. 
 * There are a few prompts and input boxes to allow users to input their answers. 
 * These user inputs will be collected and saved into database. 
 * 
 * @return: react-dom
 */

class ExpenseContent extends React.Component{
    state={
        buttonPopup:'none',
    }

    render(){
    
        return(
            <div className='contentBody'>
                <div className='addNew'>
                    
                        <div className='personnel'>
                            <label>{this.props.expenseState.info1}</label>
                            <input placeholder='Please enter the name.' onChange={this.props.onValue1} defaultValue=""></input>
                        </div>
                        <div className='ic'>
                            <label>{this.props.expenseState.info2}</label>
                            <input placeholder='Please enter the ic number.' onChange={this.props.onValue2} defaultValue=""></input>
                        </div>
                        <div className='phone'>
                            <label>{this.props.expenseState.info3}</label>
                            <input type={this.props.expenseState.infoType} placeholder='Please enter the phone number.' onChange={this.props.onValue3} defaultValue=""></input>
                        </div>
                        <div className='email'>
                            <label>{this.props.expenseState.info4}</label>
                            <input placeholder='Please enter the email.' onChange={this.props.onValue4} defaultValue=""></input>
                        </div>
                        <div className='department'>
                            <label>{this.props.expenseState.info5}</label>
                            <input placeholder='Please enter the department.' onChange={this.props.onValue5} defaultValue=""></input>
                        </div> 
                        <div className='role'>
                            <label>{this.props.expenseState.info6}</label>
                            <textarea placeholder='Please enter the role.' onChange={this.props.onValue6} defaultValue=""></textarea>
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default ExpenseContent;
