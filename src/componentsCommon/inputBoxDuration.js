import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/inputBox.css'
import SaveEditButton from './save_edit'
import {ClickEdit, ClickSaveDuration} from '../functions/mouseAction.js'
import Axios from 'axios'
import {HandleInput} from './../functions/handleInput.js'

class InputBoxDuration extends React.Component{
    state={
        disabled:false,
        arr:"",
        description:"What's the duration of your project? (Please enter the number of days)",
        total:'Total duration: ',
        userInput:0,
        inputType:'text',
    }
  
    getData=()=>{
        Axios.post('/getDuration',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            if(response.data.length>0){
                this.setState({arr:response.data[response.data.length-1].duration});
            }else{
                this.setState({arr:""});
            }
            
        })
    }
 
    render(){
        this.getData(this.props.id);
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <input onChange={(event)=>{this.setState({userInput:HandleInput(event)});}} className='inputbox' type={this.state.inputType} onKeyDown="return event.keyCode !== 69" placeholder={this.state.description} disabled={this.state.disabled}></input>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'5px'}}>
                    <div>
                        <span className='initialTotal figures'>{this.state.total}</span>
                        <span className='initialTotal figures'>{this.state.arr}</span>
                    </div>
                    <SaveEditButton onSave={(event)=>{this.setState({disabled:true}); ClickSaveDuration(event, this.state.userInput, this.props.id);}} onEdit={()=>{this.setState({disabled:ClickEdit()})}}/>
                </div>
                
            </div>
            
        );
    }
}

export default InputBoxDuration;