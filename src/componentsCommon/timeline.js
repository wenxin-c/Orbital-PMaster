import React from 'react'
import ReactDOM from 'react-dom'
import { Timeline } from 'antd';
import './../styles/timeline.css'

class TimeLine extends React.Component{
    render(){
        return(
            
                <Timeline.Item>
                    <span className='taskname'>{this.props.timelineData.taskname}</span>
                    <span className='taskdescription'>{this.props.timelineData.taskdescription}</span>
                    <time className='time'>{this.props.timelineData.duration}</time>
                </Timeline.Item>
            

        );
    };
}

export default TimeLine;