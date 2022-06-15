import React from 'react'
import ReactDOM from 'react-dom'
import './table.css'
import DeleteButton from './deleteButton.js'

class TableTime extends React.Component{
  HandleClickDelete=(index)=>{
    this.props.onDeleteTask(index);
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
                            <td  >{content.name}</td>
                            <td  >{content.description}</td>
                            <td  >{content.duration}</td>
                            <td  >{content.prerequisite}</td>
                            <td  >{content.members}</td>
                            <td  >{content.remark}</td>
                            <td><DeleteButton buttonStatus={this.props.buttonStatus} onClickDelete={(index)=>this.HandleClickDelete(index)}/></td>
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