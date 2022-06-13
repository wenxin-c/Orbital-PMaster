import React from 'react'
import ReactDOM from 'react-dom'
import './expenseContent.css'
import Heading from './heading.js'
import BodyContent from './body.js'

class ExpenseContent extends React.Component{
    state={
        title:'New Expense Item',
        info1:'Item',
        info2:'Need By Date',
        info3:'Cost',
        infoType:'date',
        content1:'',
        content2:'',
        content3:'',
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
    
    HandleClick=()=>{
        this.props.onIncrementCost(this.state.content1, this.state.content2, this.state.content3)
        // console.log(this.state.content1, this.state.content3)
        
    }

    render(){
        let styles={
            backgroundColor:'#f3f6f8', 
            width:'auto', 
            height:'calc(100% - 50px)',
            position:'absolute', 
            top:'50px',
            left:'0',
            zIndex:'-1'
           }
        return(
            <div style={styles}>
                <div className='contentWrapper'>
                    <Heading title={this.state.title} onClickSave={this.HandleClick}/>
                    <BodyContent onValue1={this.HandleInputValue1} onValue2={this.HandleInputValue2} onValue3={this.HandleInputValue3} expenseState={this.state}/>
                </div>
            </div>
        );
    }
}

export default ExpenseContent;