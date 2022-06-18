import React from 'react'
import ReactDOM from 'react-dom'
import Heading from '../componentsCommon/headingContent.js'
import ExpenseContent from '../componentsExpense/expenseContent.js'

class PersonContent extends React.Component{
    state={
        title:'New Person',
        info1:'Name',
        info2:'IC Number',
        info3:'Phone Number',
        info4:'Email Address',
        info5:'Department',
        info6:'Role',
        infoType:'text',
        content1:'',
        content2:'',
        content3:'',
        content4:'',
        content5:'',
        content6:'',
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
                    <Heading title={this.state.title} onClickSave={()=>{this.props.onIncrementPerson(
                        this.state.content1, 
                        this.state.content2, 
                        this.state.content3, 
                        this.state.content4, 
                        this.state.content5, 
                        this.state.content6)}}/>
                    <ExpenseContent 
                    onValue1={(event)=>{this.setState({content1:event.target.value})}} 
                    onValue2={(event)=>{this.setState({content2:event.target.value})}} 
                    onValue3={(event)=>{this.setState({content3:event.target.value})}} 
                    onValue4={(event)=>{this.setState({content4:event.target.value})}} 
                    onValue5={(event)=>{this.setState({content5:event.target.value})}} 
                    onValue6={(event)=>{this.setState({content6:event.target.value})}}
                    expenseState={this.state}/>
                </div>
            </div>
        );
    }
}

export default PersonContent;