import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import TaskContent from './../componentsTime/taskContent.js'

class NewTask extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar username={this.props.username}/>
                <TaskContent tableTimeContent={this.props.tableTimeContent} setTableTimeContent={this.props.setTableTimeContent} id={this.props.id}/>
            </div>
        );
    }
}

export default NewTask;