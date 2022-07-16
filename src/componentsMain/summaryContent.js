import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/summaryMain.css'

/**
 * @file: summaryContent.js
 * @author: wenxin
 * 
 * This is the input part of the summary section. 
 * It is called and used several times in the summary section. 
 * It contains an input box and a box used to display the newest updated answer. 
 * 
 * @return: react-dom
 */

class SummaryContent extends React.Component{
    render(){
        return(
            <div className='question'>
                <label style={{marginTop:'5px', marginLeft:'5px'}} >{this.props.subtitle}</label>
                <textarea onChange={(event)=>{this.props.onSummaryInput(event)}} style={{marginBottom:'0px'}} rows='3' placeholder='Please tell us about your project' maxlength='500' id='summarytext'
                disabled={this.props.disabled}></textarea>
                <label className="records" >
                Your answer : 
                <br/>
                {this.props.value}</label>
            </div>
        );
    }
}

export default SummaryContent;