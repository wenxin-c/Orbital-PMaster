import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/tableMain.css'
import DeleteButton from '../componentsCommon/deleteButton.js'
import {TableTaskDelete} from './../functions/tableDelete.js'

class TableTime extends React.Component{

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
                            <td  >{content.TaskName}</td>
                            <td  >{content.TaskDescription}</td>
                            <td  >{content.PeopleInvolved}</td>
                            <td  >{content.PrerequisiteTask}</td>
                            <td  >{content.Duration}</td>
                            <td  >{content.Remark}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>TableTaskDelete(event, content.TaskName, content.TaskDescription, content.PeopleInvolved, content.PrerequisiteTask, content.Duration, content.Remark)}/></td>
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

export default TableTime;