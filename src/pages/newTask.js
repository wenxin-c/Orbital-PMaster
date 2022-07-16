import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import TaskContent from './../componentsTime/taskContent.js'

/**
 * @file:newTask.js
 * @author: wenxin
 * 
 * This is a new page in which users can add new tasks/activities. 
 * It contains two individual components, namely TopNavBar and TaskContent. 
 * 
 * @return: react-dom
 */
class NewTask extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar username={this.props.username}
                setID={this.props.setID}
                setUsername={this.props.setUsername}
                setPassword={this.props.setPassword}
                setDisplayStatus={this.props.setDisplayStatus}
                setLoginStatus={this.props.setLoginStatus}
                />
                <TaskContent tableTimeContent={this.props.tableTimeContent} setTableTimeContent={this.props.setTableTimeContent} tableHRContent={this.props.tableHRContent} id={this.props.id}/>
            </div>
        );
    }
}

export default NewTask;