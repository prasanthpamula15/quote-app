import React, { Component } from 'react'
import image from "./images"
import {FaDownload} from 'react-icons/fa'
import "./index.css"
import logo from "./img/profile.jpg";
 class Poems extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
       
         }
     }
      like = () =>{
       this.setState({
         val:"like",
        
       })
       
     }
     
     
    render() {
        return (
          

           
            <div> <div id="grid">
               
            <div className="grid_item">
                <div ><img className="card" src={image.logo1}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="font" href={image.logo2} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo2}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="font" href={image.logo3} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo3}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="font" href={image.logo4} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo4}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="font" href={image.logo5} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo5}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="font" href={image.logo7} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo7}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="font" href={image.logo7} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>

        </div>
    </div>

        )     
   
    }
}
export default Poems;