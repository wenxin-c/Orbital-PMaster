import React from 'react'
import ReactDOM from 'react-dom'
import SideNavBar from '../componentsCommon/sideNavBar.js'
import Summary from './summaryMain.js'
import CostManagement from './costMain.js'
import TimeManagement from './timeMain.js'
import HRManagement from './hrMain.js'

/**
 * @file: bodyMain.js
 * @author: wenxin
 * 
 * The main body of the main page. 
 * It contains a side navigation bar to allow users to navigate to different parts of the page. 
 * The main content has four sections: summary, cost management, task management and human resource management. 
 * Each of the section is a component. 
 * 
 * @return: react-dom
 */

class MainContent extends React.Component{
    state={
        sections:[
            <h1 id='summary'>Project Summary</h1>,
            <h1 id='cost'>Cost Management</h1>,
            <h1 id='time'>Time Management</h1>,
            <h1 id='hr'>Human Resource Management</h1>]
    }
    render(){
        let styles={
            backgroundColor:'#f3f6f8', 
            width:'auto', 
            position:'absolute', 
            top:'50px',
            left:'0',
            zIndex:'-1'
           }
        return(
            <div style={styles}>
            <div className='contentwrapper'>
                <SideNavBar sections={this.state.sections}/>
                <div style={{width:'calc(100% - 260px)', marginTop:'35px', marginLeft:'260px'}}>
                    <Summary id={this.props.id} section={this.state.sections[0]}
                    issue={this.props.issue}
                    setIssue={this.props.setIssue}
                    solution={this.props.solution}
                    setSolution={this.props.setSolution}
                    stakeholder={this.props.stakeholder}
                    setStakeholder={this.props.setStakeholder}
                    outcome={this.props.outcome}
                    setOutcome={this.props.setOutcome}
                    />
                    <CostManagement 
                    getCost={this.props.getCost}
                    id={this.props.id} 
                    section={this.state.sections[1]} 
                    tableCostContent={this.props.tableCostContent} 
                    setTableCostContent={this.props.setTableCostContent} 
                    tableCostTitle={this.props.tableCostTitle}
                    totalCost={this.props.totalCost}
                    setTotalCost={this.props.setTotalCost}
                    budget={this.props.budget}
                    setBudget={this.props.setBudget}  />
                    <TimeManagement 
                    id={this.props.id} 
                    section={this.state.sections[2]} 
                    tableTimeTitle={this.props.tableTimeTitle} 
                    tableTimeContent={this.props.tableTimeContent}
                    setTableTimeContent={this.props.setTableTimeContent}
                    totalDuration={this.props.totalDuration}
                    setTotalDuration={this.props.setTotalDuration} />
                    <HRManagement 
                    id={this.props.id} 
                    section={this.state.sections[3]} 
                    tableHRTitle={this.props.tableHRTitle} 
                    tableHRContent={this.props.tableHRContent}
                    setTableHRContent={this.props.setTableHRContent} />
                </div>   
            </div>   
            </div>
        );
    }
}

export default MainContent;