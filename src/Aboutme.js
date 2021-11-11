import React, { Component } from 'react'
import logo from './profile.jpg'
import './index.css'
import {AiFillInstagram }from 'react-icons/ai'
import { AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
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
                <img src={logo} alt="prasanth" id="deve" />
                < p id="d-name">Keerthana_Suresh</p>
                <p class="title">a writer and a poet</p>
                <a href="https://www.instagram.com/prasanthpamula15/"><AiFillInstagram/></a><a href="https://www.linkedin.com/in/prasanth-kumar-642468201/"><AiFillLinkedin/></a><a href="https://twitter.com/prasant60586692">< AiFillTwitterCircle /></a>
                </div>
              
          </div>
          <div id="bio" > <p  id="bio-text"><FaQuoteLeft id="quote"/>  I'm keerthana hailing from chittoor district, Andhra pradesh. <br/>Basically I'm an engineering student by profession and a writer by passion. I've co-authored <br/> 20+ poetry anthologies.  I love to weave poems with the feelings existing around me.<br/> You can reach me on instagram with the handle keerthana__suresh_</p></div>
          </div>
        )
    }
}
