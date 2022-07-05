import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/tableMain.css'
import DeleteButton from '../componentsCommon/deleteButton.js'
import {TableCostDelete} from './../functions/tableDelete.js'
import Axios from 'axios'

class TableCost extends React.Component{

  getTotalCost=(event)=>{
    event.preventDefault();
    Axios.post('/getTotalCost',{
        id:this.props.id,
    }).then((response)=>{
        // console.log(response);
        if(response.data.length>0){
            this.props.setTotalCost(response.data[response.data.length-1].totalCost);
        }else{
            this.props.setTotalCost("");
        }
        
    })
  }
    render(){
        return(
          <div className="table">
            <table width='100%'>
                <thead>
                <tr >
                    {this.props.tableTitle.map(title=>(<th style={{width:'16.35%'}} key={title}>{title}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                      this.props.tableCostContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td>{content.itemtype}</td>
                            <td>{content.item}</td>
                            <td>{content.date}</td>
                            <td>{content.unitcost}</td>
                            <td>{content.units}</td>
                            <td>{content.totalcost}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>{
                             this.props.setTableCostContent(TableCostDelete(this.props.tableCostContent, event, content.itemtype, content.item, content.date, content.unitcost, content.units, content.totalcost, this.props.id));
                             this.getTotalCost(event)}}/></td>
                          </tr>
                        )
                      })
                    }  
                </tbody>
                
            </table>
            
      </div>
   );
  }
}

export default TableCost;