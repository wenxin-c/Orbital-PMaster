import React from 'react'
import ReactDOM from 'react-dom'
import './heading.css'
import {Link} from 'react-router-dom'

class Heading extends React.Component{
    HandleClick=(name)=>{
        this.props.onClickSave();
        alert(name+' Created Successfully')
    }
    render(){
        return(
            <div className='contentTop'>
                    <div><h1>{this.props.title}</h1></div>
                    <div>
                        <Link className='back button' to='/main'>Go Back</Link>
                        <Link className='save button' to='/main' onClick={()=>this.HandleClick(this.props.title)}>Save</Link>
                    </div>
            </div>
        );
    }
}

export default Heading;