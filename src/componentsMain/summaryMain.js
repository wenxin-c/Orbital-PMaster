import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/summaryMain.css'
import SummaryContent from './summaryContent.js'
import SaveEditButton from '../componentsCommon/save_edit.js'
import {ClickEdit, ClickSave} from './../functions/mouseAction.js'
import {HandleSummaryInput} from './../functions/summary.js'
import Axios from 'axios'

class Summary extends React.Component{
    state={
        disabled:false,
        subtitle1:'What is the identified issue you wish to tackle?',
        subtitle2:'How you wish to tackle this issue?',
        subtitle3:'Who are the stakeholders involved?',
        subtitle4:'What is your expected outcome from the project?',
        content1:"",
        content2:"",
        content3:"",
        content4:"",

        content5:"",
        content6:"",
        content7:"",
        content8:""
    }

    getData=()=>{
        Axios.post('/getSummary',{
            id:this.props.id,
        }).then((response)=>{
            // console.log(response);
            const arr = response.data;
            this.setState({content5:arr[arr.length-1].issue});
            this.setState({content6:arr[arr.length-1].solution});
            this.setState({content7:arr[arr.length-1].stakeholders});
            this.setState({content8:arr[arr.length-1].outcome});
        })
    }
    render(){

        this.getData();

        return(
            <div class='summaryarea'>
                <div className='anchor' id={this.props.section.props.id}></div>
                <h1 style={{fontSize:'28px',marginBottom:'0'}}>
                {this.props.section.props.children}</h1>
                <SummaryContent value={this.state.content5} onSummaryInput={(event)=>{this.setState({content1:HandleSummaryInput(event)})}} disabled={this.state.disabled} subtitle={this.state.subtitle1}/>
                <SummaryContent value={this.state.content6} onSummaryInput={(event)=>{this.setState({content2:HandleSummaryInput(event)})}} disabled={this.state.disabled} subtitle={this.state.subtitle2}/>
                <SummaryContent value={this.state.content7} onSummaryInput={(event)=>{this.setState({content3:HandleSummaryInput(event)})}} disabled={this.state.disabled} subtitle={this.state.subtitle3}/>
                <SummaryContent value={this.state.content8} onSummaryInput={(event)=>{this.setState({content4:HandleSummaryInput(event)})}} disabled={this.state.disabled} subtitle={this.state.subtitle4}/>
                <SaveEditButton onSave={(event)=>{this.setState({disabled:true});ClickSave(
                    event,
                    this.state.content1,
                    this.state.content2,
                    this.state.content3,
                    this.state.content4,
                    this.props.id )}} onEdit={()=>{this.setState({disabled:ClickEdit()})}}/>
            </div>
        );
    }
}

export default Summary;