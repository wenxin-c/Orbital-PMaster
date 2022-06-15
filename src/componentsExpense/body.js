import React from 'react'
import ReactDOM from 'react-dom'
import './body.css'

class BodyContent extends React.Component{
    render(){
        return(
            <div className='contentBody'>
                <div className='addNew'>
                    
                        <div className='itemType'>
                            <label>{this.props.expenseState.info1}</label>
                            <textarea placeholder='Please input your response.' onChange={this.props.onValue1} defaultValue=""></textarea>
                        </div>
                        <div className='item'>
                            <label>{this.props.expenseState.info2}</label>
                            <textarea placeholder='Please input your response.' onChange={this.props.onValue2} defaultValue=""></textarea>
                        </div>
                        <div className='date'>
                            <label>{this.props.expenseState.info3}</label>
                            <input type={this.props.expenseState.infoType} onChange={this.props.onValue3} defaultValue=""></input>
                        </div>
                        {/* <div className='contentBodyBottom'> */}
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
                                <textarea placeholder='Please input your response.' onChange={this.props.onValue6} defaultValue=""></textarea>
                            </div>
                        {/* </div> */}
                        
                    
                </div>
            </div>
        );
    }
}

export default BodyContent;
