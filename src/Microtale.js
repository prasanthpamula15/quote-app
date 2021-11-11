import React, { Component } from 'react'
import {BsHeart} from 'react-icons/bs'
import {FaShareAlt} from 'react-icons/fa'
import {FaDownload} from 'react-icons/fa'

export default class Microtale extends Component {
    render() {
        return (
          <div id="m-grid"> 
                <div id="grid">
               
                  <div className="grid_item">
                   <div ><img className="card" ></img></div>
                      <div className="details">
                      <span class="font"> <BsHeart size="25px" /></span>
                      <span class="font"> <FaShareAlt size="25px" /></span>
                      <span class="font"> <FaDownload size="25px" /></span>
                      
                   
                      </div>
               </div>
               <div class="grid_item">2</div>
               <div class="grid_item">3</div>
            </div>
            </div>
        )
    }
}
