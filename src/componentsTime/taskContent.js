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
                <div style={{marginBottom:'80px'}} className='contentWrapper'>
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
                                <input className='info' onChange={(event)=>{this.setState({content1:event.target.value})} }></input>
                                <label>Task Description</label>
                                <input className='info' onChange={(event)=>{this.setState({content2:event.target.value})}}></input>
                                <label>People Involved</label>
                                <textarea className='info' onChange={(event)=>{this.setState({content3:event.target.value})}}></textarea>
                                <label>Prerequisite Task</label>
                                <textarea className='info' onChange={(event)=>{this.setState({content4:event.target.value})}}></textarea>
                                <label>Duration(with Date)</label>
                                <input className='info' onChange={(event)=>{this.setState({content5:event.target.value})}}></input>
                                <label>Remarks</label>
                                <textarea className='info' onChange={(event)=>{this.setState({content6:event.target.value})}}></textarea>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
        
export default TaskContent;