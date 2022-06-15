import React from 'react'
import ReactDOM from 'react-dom'
import './inputBox.css'
import SaveEditButton from './save_edit'

class InputBox extends React.Component{
    state={
        disabled:false
    }
    HandleEditClick=()=>{

        this.setState({disabled:false})
    }
    HandleSaveClick=()=>{

        this.setState({disabled:true})
        
    }
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <input onChange={this.props.onInput} className='inputbox' type={this.props.inputType} onkeydown="return event.keyCode !== 69" placeholder={this.props.description} disabled={this.state.disabled}></input>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'5px'}}>
                    <div>
                        <span className='initialTotal'>{this.props.total}</span>
                        <span className='initialTotal'>{this.props.userInput}</span>
                    </div>
                    <SaveEditButton onSave={this.HandleSaveClick} onEdit={this.HandleEditClick}/>
                </div>
                
            </div>
            
        );
    }
}

export default InputBox;