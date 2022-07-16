import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/inputBox.css'
import SaveEditButton from './saveEdit.js'
import {ClickEdit, ClickSaveDuration} from '../functions/mouseAction.js'
import {HandleInput} from './../functions/handleInput.js'

/**
 * @file: inputBoxDuration.js
 * @author: wenxin
 * 
 * Input section for total duration of the project. 
 * 
 * @return react-dom
 */
class InputBoxDuration extends React.Component{
    state={
        disabled:false,
        description:"What's the duration of your project? (Please enter the number of days)",
        total:'Total duration: ',
        userInput:'',
        inputType:'text',
    }

    render(){
       
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <input onChange={(event)=>{this.setState({userInput:HandleInput(event)});}} className='inputbox' type={this.state.inputType} placeholder={this.state.description} disabled={this.state.disabled}></input>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'5px'}}>
                    <div>
                        <span className='initialTotal figures'>{this.state.total}</span>
                        <span className='initialTotal figures'>{this.props.totalDuration}</span>
                    </div>
                    <SaveEditButton onSave={(event)=>{this.setState({disabled:true}); ClickSaveDuration(event, this.state.userInput, this.props.id); this.props.setTotalDuration(this.state.userInput)}} onEdit={()=>{this.setState({disabled:ClickEdit()})}}/>
                </div>
                
            </div>
            
        );
    }
}

export default InputBoxDuration;