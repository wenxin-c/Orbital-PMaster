import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import TopNavBar from '../componentsCommon/topNavBar.js'
import MainContent from '../componentsMain/bodyMain.js'


class MainPage extends React.Component{
    
    render(){
        return(
            <div>
                <TopNavBar />
                <MainContent 
                tableCostTitle={this.props.tableCostTitle} tableCostContent={this.props.tableCostContent}
                tableTimeTitle={this.props.tableTimeTitle} tableTimeContent={this.props.tableTimeContent}
                tableHRTitle={this.props.tableHRTitle} tableHRContent={this.props.tableHRContent}
                onDeleteCost={this.props.onDeleteCost}
                onDeleteTask={this.props.onDeleteTask}
                onDeletePerson={this.props.onDeletePerson}
                />
            </div>
            
        );
    }
}

export default MainPage;