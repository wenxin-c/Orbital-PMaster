import React from 'react'
import ReactDOM from 'react-dom'
import TopNavBar from '../componentsCommon/topNavBar.js'
import SummaryContent from './../componentsSummary/summaryContent.js'

class SummaryInput extends React.Component{


    render(){

        return(
            <div className='newContainer'>
                <TopNavBar username={this.props.username}
                setID={this.props.setID}
                setUsername={this.props.setUsername}
                setPassword={this.props.setPassword}
                setDisplayStatus={this.props.setDisplayStatus}
                setLoginStatus={this.props.setLoginStatus}
                />
                <SummaryContent 
                id={this.props.id}
                issue={this.props.issue}
                solution={this.props.solution}
                stakeholder={this.props.stakeholder}
                outcome={this.props.outcome}
                />
            </div>
        )
    }
}

export default SummaryInput;