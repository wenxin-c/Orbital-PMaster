import React from 'react'
import ReactDOM from 'react-dom'
import './summary.css'
import SaveEditButton from './save_edit.js'

class Summary extends React.Component{
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
            <div class='summaryarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1 style={{fontSize:'28px',marginBottom:'0'}}>
                {this.props.section.props.children}</h1>
                <textarea style={{marginBottom:'0px'}} rows='3' placeholder='Please tell us about your project' maxlength='500' id='summarytext'
                disabled={this.state.disabled}></textarea>
                <SaveEditButton onEdit={this.HandleEditClick} onSave={this.HandleSaveClick}/>
            </div>
        );
    }
}

export default Summary;