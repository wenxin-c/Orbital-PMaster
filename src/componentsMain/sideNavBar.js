import React from 'react'
import ReactDOM from 'react-dom'
import './sideNavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"



class SideNavBar extends React.Component{
   state={
        selected:null,
      }

HandleMouseDown(item){
    const selected = item;
    this.setState({
        selected:selected
    })
}

HandleMouseUp=()=>{
    const selected = null;
    this.setState({
        selected:selected})
}

render(){
  
    return (
       <nav class='sidenav navbar '>
         {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{display:'block', backgroundColor:'#ccc'}}>
           <span class="navbar-toggler-icon">hello</span>
         </button>  */}
         {/* <div className="collapse navbar-collapse" id="collapsibleNavbar">  */}
          <ul className="navbar-nav" >
                {this.props.sections.map(item => (<li className="nav-item" style={{'fontWeight':this.state.selected===item?'bold':'normal'}} onMouseDown={()=>this.HandleMouseDown(item)} onMouseUp={this.HandleMouseUp} key={item.props.children}>
                <a className="nav-link" href={'#'+item.props.id}>{item.props.children}</a>
                </li>))}
          </ul>
         {/* </div> */}

       </nav>
     );
  }
  
};

export default SideNavBar;