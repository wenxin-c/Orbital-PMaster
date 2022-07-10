import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import TopNavBar from '../componentsCommon/topNavBar.js'
import MainContent from '../componentsMain/bodyMain.js'


class MainPage extends React.Component{
    
    
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
                />
            </div>
            
        );
    }
}

export default MainPage;