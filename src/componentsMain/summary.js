import React from 'react'
import ReactDOM from 'react-dom'
import './summary.css'
import SummaryContent from './summaryContent.js'
import SaveEditButton from './save_edit.js'

class Summary extends React.Component{
    state={
        disabled:false,
        subtitle1:'What is the identified issue you wish to tackle?',
        subtitle2:'How you wish to tackle this issue',
        subtitle3:'Who are the stakeholders involved?',
        subtitle4:'What is your expected outcome from the project?',
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
                <SummaryContent disabled={this.state.disabled} subtitle={this.state.subtitle1}/>
                <SummaryContent disabled={this.state.disabled} subtitle={this.state.subtitle2}/>
                <SummaryContent disabled={this.state.disabled} subtitle={this.state.subtitle3}/>
                <SummaryContent disabled={this.state.disabled} subtitle={this.state.subtitle4}/>
                <SaveEditButton onEdit={this.HandleEditClick} onSave={this.HandleSaveClick}/>
            </div>
        );
    }
}

export default Summary;