import React from 'react'
import ReactDOM from 'react-dom'
import './table.css'

class TableTime extends React.Component{
    render(){
        return(
          <div className="table">
            <table width='100%'>
                <thead>
                <tr>
                    {this.props.tableTitle.map(title=>(<th style={{width:'16.6%'}} key={title}>{title}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.tableContent.map(content => {
                        return (
                          <tr key={content.name}>
                            <td  >{content.name}</td>
                            <td  >{content.description}</td>
                            <td  >{content.duration}</td>
                            <td  >{content.prerequisite}</td>
                            <td  >{content.members}</td>
                            <td  >{content.remark}</td>
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