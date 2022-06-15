import React from 'react'
import ReactDOM from 'react-dom'
import './table.css'
import DeleteButton from './deleteButton.js'

class TableCost extends React.Component{


  HandleClickDelete=(name)=>{
    this.props.onDeleteCost(name);
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
                            <td>{content.type}</td>
                            <td>{content.name}</td>
                            <td>{content.date}</td>
                            <td>{content.unitCost}</td>
                            <td>{content.units}</td>
                            <td>{content.totalCost}</td>
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

export default TableCost;