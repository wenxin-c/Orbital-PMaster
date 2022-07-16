import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/inputBox.css'
import SaveEditButton from './saveEdit.js'
import {ClickEdit, ClickSaveBudget} from '../functions/mouseAction.js'
import {HandleInput} from './../functions/handleInput.js'

/**
 * @file: inputBoxBudget.js
 * @author: wenxin
 * 
 * Input section for total budget of the project. 
 * 
 * @return react-dom
 */

class InputBoxBudget extends React.Component{
    state={
        disabled:false,     
        description:'How much budget do you have? (Please enter numbers)',
        total:'Total amount of budget: $',
        userInput:'',
        inputType:'number',
    }

    render(){

        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <input onChange={(event)=>{this.setState({userInput:HandleInput(event)});}} className='inputbox' type={this.state.inputType} placeholder={this.state.description} disabled={this.state.disabled}></input>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'5px'}}>
                    <div>
                        <span className='initialTotal figures' >{this.state.total}</span>
                        <span className='initialTotal figures' >{this.props.budget}</span>
                    </div>
                    <SaveEditButton onSave={(event)=>{this.setState({disabled:true}); ClickSaveBudget(event, this.state.userInput, this.props.id); this.props.setBudget(this.state.userInput)}} onEdit={()=>{this.setState({disabled:ClickEdit()})}}/>
                </div>
                
            </div>
            
        );
    }
}

export default InputBoxBudget;