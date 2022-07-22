import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import TopNavBar from '../componentsCommon/topNavBar.js'
import MainContent from '../componentsMain/bodyMain.js'
import Axios from 'axios'
/**
 * @file: main.js
 * @author: wenxin
 * 
 * This is the frame of the main content page. 
 * It contains two individual components, namely TopNavBar and MainContent. 
 * 
 * @return: react-dom
 */

class MainPage extends React.Component{

    
    componentDidMount(){
        
         const token = this.props.getToken();
         this.props.setID(token.id);
         this.props.setUsername(token.username);
         console.log("token")
         console.log(token)
         console.log("id")
         console.log(token.id);
         console.log("username")
         console.log(this.props.username)

         this.props.getData()
         const cost = this.props.getCost();
         this.props.setTableCostContent(cost||[]);

         this.props.getBudgetData()
         const budget = this.props.getBudget();
         this.props.setBudget(budget||"");

         this.props.getTotalCostData();
         const totalCost = this.props.getTotalCost();
         this.props.setTotalCost(totalCost||"");

         this.props.getTotalDurationData();
         const totalDuration = this.props.getTotalDuration();
         this.props.setTotalDuration(totalDuration||"");

         this.props.getTaskData();
        const task = this.props.getTask();
        this.props.setTableTimeContent(task||[]);
       
        this.props.getSummaryData();
        const summary = this.props.getSummary();
        if (summary){
            this.props.setIssue(summary.issue);
            this.props.setSolution(summary.solution);
            this.props.setStakeholder(summary.stakeholders)
            this.props.setOutcome(summary.outcome);
        }else{
            this.props.setIssue("");
            this.props.setSolution("");
            this.props.setStakeholder("")
            this.props.setOutcome("");
        }

        console.log(summary);

        this.props.getHRData();
        const hr = this.props.getHR();
        this.props.setTableHRContent(hr||[])


      
       
        
        
        
        
        
    }

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
                <MainContent 
                tableCostTitle={this.props.tableCostTitle} 
                tableCostContent={this.props.tableCostContent}
                setTableCostContent={this.props.setTableCostContent}
                tableTimeTitle={this.props.tableTimeTitle} 
                tableTimeContent={this.props.tableTimeContent}
                setTableTimeContent={this.props.setTableTimeContent}
                tableHRTitle={this.props.tableHRTitle} 
                tableHRContent={this.props.tableHRContent}
                setTableHRContent={this.props.setTableHRContent}
                id={this.props.id}
                totalCost={this.props.totalCost}
                setTotalCost={this.props.setTotalCost}
                budget={this.props.budget}
                setBudget={this.props.setBudget}
                totalDuration={this.props.totalDuration}
                setTotalDuration={this.props.setTotalDuration}
                issue={this.props.issue}
                setIssue={this.props.setIssue}
                solution={this.props.solution}
                setSolution={this.props.setSolution}
                stakeholder={this.props.stakeholder}
                setStakeholder={this.props.setStakeholder}
                outcome={this.props.outcome}
                setOutcome={this.props.setOutcome}
                getCost={this.props.getCost}
                />
            </div>
            
        );
    }
}

export default MainPage;