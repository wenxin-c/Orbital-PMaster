import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/inputBox.css'
import SaveEditButton from './save_edit'
import {ClickEdit, ClickSave} from './../functions/mouseAction.js'

class InputBox extends React.Component{
    state={
        disabled:false
    }
 
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <input onChange={this.props.onInput} className='inputbox' type={this.props.inputType} onKeyDown="return event.keyCode !== 69" placeholder={this.props.description} disabled={this.state.disabled}></input>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'5px'}}>
                    <div>
                        <span className='initialTotal'>{this.props.total}</span>
                        <span className='initialTotal'>{this.props.userInput}</span>
                    </div>
                    <SaveEditButton onSave={()=>{this.setState({disabled:ClickSave()})}} onEdit={()=>{this.setState({disabled:ClickEdit()})}}/>
                </div>
                
            </div>
            
        );
    }
}

export default InputBox;