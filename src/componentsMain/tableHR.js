import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/tableMain.css'
import DeleteButton from '../componentsCommon/deleteButton.js'
import {TableHRDelete} from './../functions/tableDelete.js'

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
                        this.props.tableContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td>{content.Name}</td>
                            <td>{content.ic}</td>
                            <td>{content.PhoneNumber}</td>
                            <td>{content.Email}</td>
                            <td>{content.Department}</td>
                            <td>{content.Role}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>TableHRDelete(event, content.Name, content.ic, content.PhoneNumber, content.Email, content.Department, content.Role)}/></td>
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