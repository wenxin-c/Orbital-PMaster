import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/headingContent.css'
import {Link} from 'react-router-dom'

/**
 * @file: headingContent.js
 * @author: wenxin
 * 
 * Heading for new pages with Save and Go back button. 
 * Click on save to save new input into database. 
 * Click on go back to return to main page. 
 * 
 * @return react-dom
 */

class Heading extends React.Component{
    
    render(){
        return(
            <div className='contentTop'>
                    <div><h1>{this.props.title}</h1></div>
                    <div>
                        <Link className='back button' to='/main'>Go Back</Link>
                        <Link className='save button' to='/main' onClick={(event)=>{
                            alert(this.props.title+' Created Successfully!');
                            this.props.onClickSave(event);
                        }}>Save</Link>
                    </div>
            </div>
        );
    }
}

export default Heading;