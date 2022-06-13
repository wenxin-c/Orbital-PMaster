import React from 'react'
import ReactDOM from 'react-dom'
import './body.css'

class BodyContent extends React.Component{
    render(){
        return(
            <div className='contentBody'>
                <div className='addNew'>
                    <div className='item'>
                        <label>{this.props.expenseState.info1}</label>
                        <textarea placeholder='Please input your response.' onChange={this.props.onValue1} defaultValue=""></textarea>
                    </div>
                    <div className='contentBodyBottom'>
                        <div className='date'>
                            <label>{this.props.expenseState.info2}</label>
                            <input type={this.props.expenseState.infoType} onChange={this.props.onValue2} defaultValue=""></input>
                        </div>
                        <div className='cost'>
                            <label>{this.props.expenseState.info3}</label>
                            <input onChange={this.props.onValue3} defaultValue=""></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyContent;
