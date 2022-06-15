import React from 'react'
import ReactDOM from 'react-dom'
import './../componentsExpense/expenseContent.css'
import Heading from '../componentsExpense/heading.js'
import BodyContent from '../componentsExpense/body.js'

class PersonContent extends React.Component{
    state={
        title:'New Person',
        info1:'Name',
        info2:'IC Number',
        info3:'Phone Number',
        info4:'Email Address',
        info5:'Department',
        info6:'Remark',
        infoType:'text',
        content1:'',
        content2:'',
        content3:'',
        content4:'',
        content5:'',
        content6:'',
    }

    HandleInputValue1=(event)=>{
        this.setState({content1:event.target.value}, ()=>{console.log(this.state.content1)})
    }
    HandleInputValue2=(event)=>{
        this.setState({content2:event.target.value}, ()=>{console.log(this.state.content2)})
        // console.log(this.state.content2)
    }
    HandleInputValue3=(event)=>{
        this.setState({content3:event.target.value}, ()=>{console.log(this.state.content3)})
        // console.log(this.state.content3)
    }
    HandleInputValue4=(event)=>{
        this.setState({content4:event.target.value}, ()=>{console.log(this.state.content4)})
        // console.log(this.state.content3)
    }
    HandleInputValue5=(event)=>{
        this.setState({content5:event.target.value}, ()=>{console.log(this.state.content5)})
        // console.log(this.state.content3)
    }
    HandleInputValue6=(event)=>{
        this.setState({content6:event.target.value}, ()=>{console.log(this.state.content6)})
        // console.log(this.state.content3)
    }
    HandleClick=()=>{
        this.props.onIncrementPerson(this.state.content1, this.state.content2, this.state.content3, this.state.content4, this.state.content5, this.state.content6)
    }

    render(){
        let styles={
            backgroundColor:'#f3f6f8', 
            width:'100%', 
            height:'auto',
            position:'absolute', 
            top:'50px',
            left:'0',
            zIndex:'-1'
           }
        return(
            <div style={styles}>
                <div style={{marginBottom:'80px'}} className='contentWrapper'>
                    <Heading title={this.state.title} onClickSave={this.HandleClick}/>
                    <BodyContent onValue1={this.HandleInputValue1} onValue2={this.HandleInputValue2} onValue3={this.HandleInputValue3} onValue4={this.HandleInputValue4} onValue5={this.HandleInputValue5} onValue6={this.HandleInputValue6} expenseState={this.state}/>
                </div>
            </div>
        );
    }
}

export default PersonContent;