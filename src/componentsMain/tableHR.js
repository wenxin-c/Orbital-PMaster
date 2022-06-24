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
                            <td>{content.name}</td>
                            <td>{content.ic}</td>
                            <td>{content.phonenumber}</td>
                            <td>{content.email}</td>
                            <td>{content.department}</td>
                            <td>{content.role}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>TableHRDelete(event, content.Name, content.ic, content.PhoneNumber, content.Email, content.Department, content.Role, this.props.id)}/></td>
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