import React, { Component } from 'react'
import './index.css'
import {AiFillInstagram } from 'react-icons/ai'
export default class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
        
        
        return (
            <div id="footer">
                <div id="foot-nav"><a className="foot" href="#bac" onClick={() => alert('click on poems to explore my poems')}>Poems</a><a className="foot"  href="#bac" onClick={() =>alert('click on quotes to explore my writings') }>Quotes</a><a className="foot"  href="#bac" onClick={() => alert('click on microtales to explore my writings')}>Microtales</a><a className="foot"  href="#bac" onClick={()=>alert('click on Bio to know about me')}>Bio</a></div>
                <div id="follow"><a href="https://www.instagram.com/keerthana__suresh_/"><AiFillInstagram color="white" size="20px"/></a><a  href="https://www.yourquote.in/keerthana-8md0/quotes" id="yourquote">yourquote.in</a>
                </div>
                <div id="email"><p className="foot" href>Email:keerkeerthana952@gmail.com</p></div>
            </div>
        )
    }
}
