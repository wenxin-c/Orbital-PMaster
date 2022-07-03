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
                <tr onClick={(event)=>{this.props.getData(event)}}>
                    {this.props.tableTitle.map(title=>(<th style={{width:'16.35%'}} key={title}>{title}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.tableContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td  >{content.taskname}</td>
                            <td  >{content.taskdescription}</td>
                            <td  >{content.peopleinvolved}</td>
                            <td  >{content.prerequisitetask}</td>
                            <td  >{content.duration}</td>
                            <td  >{content.remark}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>TableTaskDelete(event, content.TaskName, content.TaskDescription, content.PeopleInvolved, content.PrerequisiteTask, content.Duration, content.Remark, this.props.id)}/></td>
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