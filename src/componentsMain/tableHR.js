import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/tableMain.css'
import DeleteButton from '../componentsCommon/deleteButton.js'
import {TableHRDelete} from './../functions/tableDelete.js'

/**
 * @file: tableHR.js
 * @author: wenxin
 * 
 * This is the human reousrce table. 
 * Users can add new personnel information into the table/delete existing information from the table. 
 * 
 * @return react-dom
 */

class TableHR extends React.Component{

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
                        this.props.tableHRContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td>{content.name}</td>
                            <td>{content.ic}</td>
                            <td>{content.phonenumber}</td>
                            <td>{content.email}</td>
                            <td>{content.department}</td>
                            <td>{content.role}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>this.props.setTableHRContent(TableHRDelete(this.props.tableHRContent, event, content.name, content.ic, content.phonenumber, content.email, content.department, content.role, this.props.id))}/></td>
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

export default TableHR;