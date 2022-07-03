import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/inputBox.css'
import SaveEditButton from './save_edit'
import {ClickEdit, ClickSaveBudget} from '../functions/mouseAction.js'
import {HandleInput} from './../functions/handleInput.js'

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
                <input onChange={(event)=>{this.setState({userInput:HandleInput(event)});}} className='inputbox' type={this.state.inputType} onKeyDown="return event.keyCode !== 69" placeholder={this.state.description} disabled={this.state.disabled}></input>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'5px'}}>
                    <div>
                        <span className='initialTotal figures' onClick={(event)=>{this.props.clickGetBudget(event)}}>{this.state.total}</span>
                        <span className='initialTotal figures' >{this.props.arr}</span>
                    </div>
                    <SaveEditButton onSave={(event)=>{this.setState({disabled:true}); ClickSaveBudget(event, this.state.userInput, this.props.id);}} onEdit={()=>{this.setState({disabled:ClickEdit()})}}/>
                </div>
                
            </div>
            
        );
    }
}

export default InputBoxBudget;