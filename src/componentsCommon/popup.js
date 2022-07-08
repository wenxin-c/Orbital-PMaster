import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/popup.css'
import Axios from 'axios'

class Popup extends React.Component{
    state={
        userInput:'',
        tableTitle:['item type', 'item name', 'unit cost'],
        tableContent:[]
    }
    
    getUnitCost=(event)=>{
        event.preventDefault()
        console.log(this.state.userInput);
        Axios.post('/getDetail',{
            // method:"post",
            userInput:this.state.userInput
            // headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }).then((response)=>{
            console.log(response);
            console.log(response.data)
            if(response.data.length>0){
                this.setState({tableContent:response.data});
            }
            
        })
    }

    render(){
        return(
            <div className='popup-box' style={{display:this.props.trigger}}>
                <div className='box'>
                    <button className='btn-close' onClick={this.props.closePopup}></button>
                    <h1 className='popup-title'>Search for the information you need:</h1>
                    <div className='popup-content'>
                        <div className='search'>
                            <input type='test' placeholder='please enter the item type or item name' onChange={(event)=>{this.setState({userInput:event.target.value})}}></input>
                            <button className='btn' onClick={(event)=>{this.getUnitCost(event)}}>Submit</button>
                        </div>
                        <div className="table">
                            <table width='100%'>
                                <thead>
                                <tr >
                                    {this.state.tableTitle.map(title=>(<th style={{width:'16.35%'}} key={title}>{title}</th>))}
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                    this.state.tableContent.map(content => {
                                        return (
                                        <tr className='content' key={content.itemname}>
                                            <td>{content.itemtype}</td>
                                            <td>{content.itemname}</td>
                                            <td>{content.unitcost}</td>
                                        </tr>
                                        )
                                      })
                                    }  
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Popup;