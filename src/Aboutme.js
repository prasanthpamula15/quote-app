import React, { Component } from 'react'
import logo from './profile.jpg'
import './index.css'
import {AiFillInstagram }from 'react-icons/ai'

import {FaQuoteLeft} from 'react-icons/fa'

export default class aboutme extends Component {
    render() {
        return (
            <div id="container1">  <div id="developer">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet"></link>
              
              <div class="card">
                <img src={logo} alt="Keerthana" id="deve" />
                < p id="d-name">Keerthana_Suresh</p>
                <p class="title">a writer and a poet</p>
                <a href="https://www.instagram.com/keerthana__suresh_/"><AiFillInstagram/></a>
                </div>
              
          </div>
          <div id="bio" > <FaQuoteLeft id="quote"/> <p  id="bio-text">  I'm keerthana hailing from chittoor district, Andhra pradesh. Basically I'm an engineering student by profession and a writer by passion. I've co-authored  20+ poetry anthologies.  I love to weave poems with the feelings existing around me.You can reach me on instagram with the handle keerthana__suresh_</p></div>
          </div>
        )
    }
}
