import React from 'react'
import ReactDOM from 'react-dom'
import './save_edit.css'

class SaveEditButton extends React.Component{
    render(){
        return(
            <div className='buttons'>
                    <button className='btnsummary btnsave' onClick={this.props.onSave}>Save</button> 
                    <button className='btnsummary btnedit' onClick={this.props.onEdit}>Edit</button>
            </div>
        );
    }
}

export default SaveEditButton;