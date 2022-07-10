import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/expenseContent.css'
import Popup from './../componentsCommon/popup.js'

class ExpenseContent extends React.Component{
    state={
        buttonPopup:'none',
    }


    render(){
    
        return(
            <div className='contentBody'>
                <div className='addNew'>
                    
                        <div className='itemType'>
                            <label>{this.props.expenseState.info1}</label>
                            <input placeholder='Please input your response.' onChange={this.props.onValue1} defaultValue=""></input>
                        </div>
                        <div className='item'>
                            <label>{this.props.expenseState.info2}</label>
                            <textarea placeholder='Please input your response.' onChange={this.props.onValue2} defaultValue=""></textarea>
                        </div>
                        <div className='date'>
                            <label>{this.props.expenseState.info3}</label>
                            <input type={this.props.expenseState.infoType} onChange={this.props.onValue3} defaultValue=""></input>
                        </div>
                        <div className='unitCost'>
                            <label>{this.props.expenseState.info4}</label>
                            <input placeholder='Please input your response.' onChange={this.props.onValue4} defaultValue=""></input>
                        </div>
                        <div className='unit'>
                            <label>{this.props.expenseState.info5}</label>
                            <input placeholder='Please input your response.' onChange={this.props.onValue5} defaultValue=""></input>
                        </div> 
                        <div className='totalCost'>
                            <label>{this.props.expenseState.info6}</label>
                            <textarea placeholder='Please input your response.' onClick={()=>{this.props.calculateTotalCost()}} value={this.props.content6} defaultValue=""></textarea>
                        </div>
                    
                </div>
                <div className='costData'>
                    <h1>
                        Not sure about the unit cost? 
                        <br/>
                        <br/>
                        Click the button to find more information. 
                    </h1>
                    <button className='btn' onClick={()=>{this.setState({buttonPopup:'block'})}}>Button</button>
                </div>
                <Popup trigger={this.state.buttonPopup} 
                closePopup={()=>{this.setState({buttonPopup:'none'})}}/>
            </div>
        );
    }
}

export default ExpenseContent;
