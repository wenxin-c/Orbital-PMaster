import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'

class SaveEditButton extends React.Component{
    render(){
        return(
            <div className='buttons'>
                    <button className='btn btn1' onClick={this.props.onSave}>Save</button> 
                    <button className='btn btn2' onClick={this.props.onEdit}>Edit</button>
            </div>
        );
    }
}

export default SaveEditButton;