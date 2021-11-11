import React, { Component } from 'react'
import './index.css'
import {AiFillInstagram } from 'react-icons/ai'
export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="foot-nav"><a className="foot" href="#grid">Poems</a><a className="foot" href="">Quotes</a><a className="foot" href="">Microtales</a><a className="foot" href="">Bio</a></div>
                <div id="insta"><AiFillInstagram color="white"/>
                </div>
                <div id="email"><p className="foot" href>Email:keerkeerthana592@gmail.com</p></div>
            </div>
        )
    }
}
