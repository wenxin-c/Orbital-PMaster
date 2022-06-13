import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from '../componentsMain/topNavBar.js'
import PersonContent from './../componentsPerson/personContent.js'

class NewPerson extends React.Component{
    render(){
        return(
            <div>
                <TopNavBar />
                <PersonContent onIncrementPerson={this.props.onIncrementPerson}/>
            </div>
        );
    }
}

export default NewPerson;