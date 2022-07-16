import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/deleteButton.css'

/**
 * @file: deleteButton.js
 * @author: wenxin
 * 
 * Delete icon. 
 * Appear upon clicking on Delete button. 
 * Disappear upon clicking on Delete button again. 
 * 
 * @return react-dom
 */

class DeleteButton extends React.Component{
    render(){
        return(
            <div style={{display:(this.props.buttonStatus)}} className='btnDelete' onClick={this.props.onClickDelete}>
                X
            </div>
        );
    }
}

export default DeleteButton;