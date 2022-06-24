import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/tableMain.css'
import DeleteButton from '../componentsCommon/deleteButton.js'
import {TableCostDelete} from './../functions/tableDelete.js'

class TableCost extends React.Component{

    render(){
        return(
          <div className="table">
            <table width='100%'>
                <thead>
                <tr>
                    {this.props.tableTitle.map(title=>(<th style={{width:'16.35%'}} key={title}>{title}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                      this.props.tableContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td>{content.itemtype}</td>
                            <td>{content.item}</td>
                            <td>{content.date}</td>
                            <td>{content.unitcost}</td>
                            <td>{content.units}</td>
                            <td>{content.totalcost}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>TableCostDelete(event, content.ItemType, content.Item, content.date, content.UnitCost, content.Units, content.TotalCost, this.props.id)}/></td>
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