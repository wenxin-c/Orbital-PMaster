import React from 'react'
import ReactDOM from 'react-dom'
import './table.css'
import DeleteButton from './deleteButton.js'

class TableHR extends React.Component{
  HandleClickDelete=(name)=>{
    this.props.onDeletePerson(name);
  }
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
                            <td>{content.phone}</td>
                            <td>{content.email}</td>
                            <td>{content.department}</td>
                            <td>{content.role}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={()=>this.HandleClickDelete(content.name)}/></td>
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