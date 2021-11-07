import React, { Component } from 'react'
import dev from './img/developer.jpg'
import './index.css'
import {AiFillInstagram }from 'react-icons/ai'
import { AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'



 class Developer extends Component {
    render() {
        return (
            
            <div id="container">  <p id="dev-h">Developer</p><div id="developer">
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"></link>
                
                <div class="card">
                  <img src={dev} alt="prasanth" id="deve" />
                  < p id="d-name">P.Prasanth Kumar</p>
                  <p class="title">front-end developer</p>
                  <a><AiFillInstagram/></a><a><AiFillLinkedin/></a><a>< AiFillTwitterCircle /></a>
                  
                  </div>
                
            </div></div>
           
        )
    }
}
export default Developer;
