import React from 'react'
import ReactDOM from 'react-dom'
import './deleteButton.css'

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