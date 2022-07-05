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
                        this.props.tableTimeContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td  >{content.taskname}</td>
                            <td  >{content.taskdescription}</td>
                            <td  >{content.peopleinvolved}</td>
                            <td  >{content.prerequisitetask}</td>
                            <td  >{content.duration}</td>
                            <td  >{content.remark}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(event)=>this.props.setTableTimeContent(TableTaskDelete(this.props.tableTimeContent, event, content.taskname, content.taskdescription, content.peopleinvolved, content.prerequisitetask, content.duration, content.remark, this.props.id))}/></td>
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