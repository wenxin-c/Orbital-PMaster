import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsCommon/topNavBar.js'
import PersonContent from './../componentsPerson/personContent.js'

class NewPerson extends React.Component{
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
                <PersonContent tableHRContent={this.props.tableHRContent} setTableHRContent={this.props.setTableHRContent} id={this.props.id}/>
            </div>
        );
    }
}

export default NewPerson;