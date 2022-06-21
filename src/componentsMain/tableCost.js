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
                            <td>{content.ItemType}</td>
                            <td>{content.Item}</td>
                            <td>{content.date}</td>
                            <td>{content.UnitCost}</td>
                            <td>{content.Units}</td>
                            <td>{content.TotalCost}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>TableCostDelete(event, content.ItemType, content.Item, content.date, content.UnitCost, content.Units, content.TotalCost)}/></td>
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