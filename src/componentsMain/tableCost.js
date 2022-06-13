import React from 'react'
import ReactDOM from 'react-dom'
import './table.css'

class TableCost extends React.Component{
    render(){
        return(
          <div className="table">
            <table width='100%'>
                <thead>
                <tr>
                    {this.props.tableTitle.map(title=>(<th style={{width:'50%'}} key={title}>{title}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.tableContent.map(content => {
                        return (
                          <tr key={content.name}>
                            <td>{content.name}</td>
                            <td>{content.cost}</td>
                            <td>{content.deadline}</td>
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