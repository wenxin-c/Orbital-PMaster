import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/taskContent.css'
import Heading from '../componentsCommon/headingContent.js'
import { TableTaskIncrement} from './../functions/tableIncrement.js'

class TaskContent extends React.Component{
    state={
        title:'New Task',
        content1:'',
        content2:'',
        content3:'',
        content4:'',
        content5:'',
        content6:'',
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
                    <Heading title={this.state.title} onClickSave={(event)=>this.props.setTableTimeContent(TableTaskIncrement(
                        this.props.tableTimeContent, 
                        event,
                        this.state.content1, 
                        this.state.content2, 
                        this.state.content3, 
                        this.state.content4, 
                        this.state.content5, 
                        this.state.content6,
                        this.props.id))}/>
                    <div className='contentBody'>
                        <form>
                            <fieldset>
                                <label>Task Name</label>
                                <input className='info' placeholder='Please enter task name.' onChange={(event)=>{this.setState({content1:event.target.value})} }></input>
                                <label>Task Description</label>
                                <textarea className='info' placeholder='Please enter task description.' onChange={(event)=>{this.setState({content2:event.target.value})}}></textarea>
                                <label>People Involved</label>
                                <input className='info' placeholder='Please enter people involved in the task.' onChange={(event)=>{this.setState({content3:event.target.value})}}></input>
                                <label>Prerequisite Task</label>
                                <input className='info' placeholder='Please enter the prerequisite task (if any).' onChange={(event)=>{this.setState({content4:event.target.value})}}></input>
                                <label>Date</label>
                                <input className='info' type='date' placeholder='Please enter the date of the task.' onChange={(event)=>{this.setState({content5:event.target.value})}}></input>
                                <label>Remarks</label>
                                <textarea className='info' placeholder='Please enter remarks (if any).' onChange={(event)=>{this.setState({content6:event.target.value})}}></textarea>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
        
export default TaskContent;