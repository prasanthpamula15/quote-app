import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
        
        
        return (
            <div id="footer">
                <p id="foot-f">Follow Me On</p><br/>
                
                    <div className="follow"><a className="follow-butt" href="https://www.instagram.com/keerthana__suresh_/">Instagram</a><a className="follow-butt" href="https://www.yourquote.in/keerthana-8md0/quotes">Yourquote.in</a></div>
                
                <p className="foot" >Email:KeerKeerthana952@gmail.com</p>
            </div>
          
        )
    }
}
