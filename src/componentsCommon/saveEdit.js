import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/input.css'

/**
 * @file: saveEdit.js
 * @author: wenxin
 * 
 * Two buttons
 * Save: save user input into database and disable input for input boxes after saving. 
 * Edit: enable input for input boxes
 * 
 * @return react-dom
 */

class SaveEditButton extends React.Component{
    render(){
        return(
            <div className='buttons'>
                    <button className='btn btn1' onClick={(event)=>{this.props.onSave(event)}}>Save</button> 
                    <button className='btn btn2' onClick={this.props.onEdit}>Edit</button>
            </div>
        );
    }
}

export default SaveEditButton;