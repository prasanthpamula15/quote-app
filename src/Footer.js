import React, { Component } from 'react'
import './index.css'
import {AiFillInstagram } from 'react-icons/ai'
export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="foot-nav"><span className="foot" href="#grid">Poems</span><span className="foot" href="">Quotes</span><span className="foot" href="">Microtales</span><span className="foot" href="">Bio</span></div>
                <div id="insta"><AiFillInstagram color="white"/>
                </div>
                <div id="email"><p className="foot" href>Email:keerkeerthana592@gmail.com</p></div>
            </div>
        )
    }
}
