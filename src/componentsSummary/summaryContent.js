import React from 'react'
import ReactDOM from 'react-dom'
import Heading from '../componentsCommon/headingContent.js'
import {ClickSave} from './../functions/mouseAction.js'
import './../styles/summaryContent.css'

class SummaryContent extends React.Component{
    state={
        title:'Project Summary',
        content1:'',
        content2:'',
        content3:'',
        content4:'',

        display1:'none',
        display2:'none',
        display3:'none',
        display4:'none',
    }

    toggleDisplay1=(event)=>{
        event.preventDefault();
        if(this.state.display1==='none'){
            
            this.setState({display1:'block'})
        }else{
            this.setState({display1:'none'})
        }
    }
    toggleDisplay2=(event)=>{
        event.preventDefault();
        if(this.state.display2==='none'){
            this.setState({display2:'block'})
        }else{
            this.setState({display2:'none'})
        }
    }
    toggleDisplay3=(event)=>{
        event.preventDefault();
        if(this.state.display3==='none'){
            this.setState({display3:'block'})
        }else{
            this.setState({display3:'none'})
        }
    }
    toggleDisplay4=(event)=>{
        event.preventDefault();
        if(this.state.display4==='none'){
            this.setState({display4:'block'})
        }else{
            this.setState({display4:'none'})
        }
    }


    render(){
        let styles={
            backgroundColor:'#f3f6f8', 
            width:'100%', 
            height:'auto',
            position:'absolute', 
            top:'50px',
            left:'0',
            zIndex:'-1',
           }
        return(
            <div style={styles}>
                <div style={{marginBottom:'80px', marginTop:'20px', marginLeft:'75px', marginRight:'75px', width:'calc(100vw - 150px)'}} className='contentWrapper'>
                    <Heading title={this.state.title} onClickSave={(event)=>{
                        ClickSave(
                        event,
                        this.state.content1,
                        this.state.content2,
                        this.state.content3,
                        this.state.content4,
                        this.props.id );
                    }}/>
                    <div className='contentBody'>
                        <form>
                            <fieldset>
                                <div className="summary">
                                    <div className="summaryTitle">
                                        <label>What is the identified issue you wish to tackle?</label>
                                        <button className="answerBtn" onClick={(event)=>this.toggleDisplay1(event)}>Click to display/hide previous answer</button>
                                    </div>
                                    <span className="preAnswer" style={{display:this.state.display1}}>{this.props.issue}</span>
                                    <textarea className='info' placeholder='Please enter your response.' onChange={(event)=>{this.setState({content1:event.target.value})} }></textarea>
                                </div>
                                <div className="summary">
                                    <div className="summaryTitle">
                                        <label>How you wish to tackle this issue?</label>
                                        <button className="answerBtn" onClick={(event)=>this.toggleDisplay2(event)}>Click to display/hide previous answer</button>
                                    </div>
                                    <span className="preAnswer" style={{display:this.state.display2}}>{this.props.solution}</span>
                                    <textarea className='info' placeholder='Please enter your response.' onChange={(event)=>{this.setState({content2:event.target.value})}}></textarea>
                                </div>
                                <div className="summary">
                                    <div className="summaryTitle">
                                        <label>Who are the stakeholders involved?</label>
                                        <button className="answerBtn" onClick={(event)=>this.toggleDisplay3(event)}>Click to display/hide previous answer</button>
                                    </div>
                                    <span className="preAnswer"  style={{display:this.state.display3}}>{this.props.stakeholder}</span>
                                    <textarea className='info' placeholder='Please enter your response.' onChange={(event)=>{this.setState({content3:event.target.value})}}></textarea>
                                </div>
                                <div className="summary">
                                    <div className="summaryTitle">
                                        <label>What is your expected outcome from the project?</label>
                                        <button className="answerBtn" onClick={(event)=>this.toggleDisplay4(event)}>Click to display/hide previous answer</button>
                                    </div>
                                    <span className="preAnswer"  style={{display:this.state.display4}}>{this.props.outcome}</span>
                                    <textarea className='info' placeholder='Please enter your response.' onChange={(event)=>{this.setState({content4:event.target.value})}}></textarea>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryContent;