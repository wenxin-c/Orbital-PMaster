import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/sideNavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {MouseUp, MouseDown} from './../functions/mouseAction.js'
import {HandleFontWeight} from './../functions/handleStyle.js'

class SideNavBar extends React.Component{
   state={
        selected:null,
      }

      
render(){
    return (
       <nav class='sidenav navbar '>
          <ul className="navbar-nav" >
                {this.props.sections.map(item => (<li className="nav-item" style={{fontWeight:HandleFontWeight(this.state.selected, item)}} onMouseDown={()=>{this.setState({selected:MouseDown(item)})}} onMouseUp={()=>{this.setState({selected:MouseUp()})}} key={item.props.children}>
                <a className="nav-link" href={'#'+item.props.id}>{item.props.children}</a>
                </li>))}
          </ul>
       </nav>
     );
  }
  
};

export default SideNavBar;