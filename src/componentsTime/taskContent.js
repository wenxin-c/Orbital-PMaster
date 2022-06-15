import React from 'react'
import ReactDOM from 'react-dom'
import './taskContent.css'
import Heading from '../componentsExpense/heading.js'

class TaskContent extends React.Component{
    state={
        title:'New Task'
    }

    HandleInputValue1=(event)=>{
        this.setState({content1:event.target.value}, ()=>{console.log(this.state.content1)})
    }
    HandleInputValue2=(event)=>{
        this.setState({content2:event.target.value}, ()=>{console.log(this.state.content2)})
        // console.log(this.state.content2)
    }
    HandleInputValue3=(event)=>{
        this.setState({content3:event.target.value}, ()=>{console.log(this.state.content3)})
        // console.log(this.state.content3)
    }
    HandleInputValue4=(event)=>{
        this.setState({content4:event.target.value}, ()=>{console.log(this.state.content4)})
        // console.log(this.state.content3)
    }
    HandleInputValue5=(event)=>{
        this.setState({content5:event.target.value}, ()=>{console.log(this.state.content5)})
        // console.log(this.state.content3)
    }
    HandleInputValue6=(event)=>{
        this.setState({content6:event.target.value}, ()=>{console.log(this.state.content6)})
        // console.log(this.state.content3)
    }
    HandleClick=()=>{
        this.props.onIncrementTask(this.state.content1, this.state.content2, this.state.content3, this.state.content4, this.state.content5, this.state.content6)
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
            content1:'',
            content2:'',
            content3:'',
            content4:'',
            content5:'',
            content6:'',
           }

        return(
            <div style={styles}>
                <div style={{marginBottom:'80px'}} className='contentWrapper'>
                    <Heading title={this.state.title} onClickSave={this.HandleClick}/>
                    <div className='contentBody'>
                        <form>
                            <fieldset>
                                <label>Task Name</label>
                                <input className='info' onChange={this.HandleInputValue1}></input>
                                <label>Task Description</label>
                                <input className='info' onChange={this.HandleInputValue2}></input>
                                <label>People Involved</label>
                                <textarea className='info' onChange={this.HandleInputValue3}></textarea>
                                <label>Prerequisite Task</label>
                                <textarea className='info' onChange={this.HandleInputValue4}></textarea>
                                <label>Duration(with Date)</label>
                                <input className='info' onChange={this.HandleInputValue5}></input>
                                <label>Remarks</label>
                                <textarea className='info' onChange={this.HandleInputValue6}></textarea>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskContent;