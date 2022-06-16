import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import TaskContent from './../componentsTime/taskContent.js'

class NewTask extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar />
                <TaskContent onIncrementTask={this.props.onIncrementTask}/>
            </div>
        );
    }
}

export default NewTask;