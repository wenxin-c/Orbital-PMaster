import React from 'react'
import ReactDOM from 'react-dom'
import SideNavBar from '../componentsCommon/sideNavBar.js'
import Summary from './summaryMain.js'
import CostManagement from './costMain.js'
import TimeManagement from './timeMain.js'
import HRManagement from './hrMain.js'


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
                    <Summary section={this.state.sections[0]}/>
                    <CostManagement id={this.props.id} section={this.state.sections[1]} tableCostTitle={this.props.tableCostTitle} tableCostContent={this.props.tableCostContent} />
                    <TimeManagement id={this.props.id} section={this.state.sections[2]} tableTimeTitle={this.props.tableTimeTitle} tableTimeContent={this.props.tableTimeContent} />
                    <HRManagement id={this.props.id} section={this.state.sections[3]} tableHRTitle={this.props.tableHRTitle} tableHRContent={this.props.tableHRContent} />
                </div>   
            </div>   
            </div>
        );
    }
}

export default MainContent;