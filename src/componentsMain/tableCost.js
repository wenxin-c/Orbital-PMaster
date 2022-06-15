import React from 'react'
import ReactDOM from 'react-dom'
import './table.css'
import DeleteButton from './deleteButton.js'

class TableCost extends React.Component{


  HandleClickDelete=(index)=>{
    this.props.onDeleteCost(index);
  }
    render(){
        return(
          <div className="table">
            <table width='100%'>
                <thead>
                <tr>
                    {this.props.tableTitle.map(title=>(<th style={{width:'32.7%'}} key={title}>{title}</th>))}
                </tr>
                </thead>
                <tbody>
                    {
                      this.props.tableContent.map(content => {
                        return (
                          <tr className='content' key={content.name}>
                            <td>{content.name}</td>
                            <td>{content.cost}</td>
                            <td>{content.deadline}</td>
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

export default TableCost;