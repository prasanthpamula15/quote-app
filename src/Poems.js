import React, { Component } from 'react'
import image from "./images"
import {FaDownload} from 'react-icons/fa'
import "./index.css"
import logo from "./img/profile.jpg";
import Showmore from './Showmore.js';
 class Poems extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
         show:""
         

         }
     }
    like (){
        this.setState({
            show:<Showmore/>
        })
    }
     
     
    render() {
        return (
          

           
            <div> <div id="grid">
               
            <div className="grid_item">
                <div ><img className="card" alt="logo" src={image.logo1}></img></div>
                <div className="details">
                <img src={logo} alt="logo" className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <div class="download_button"> <a className="font" href={image.logo2} download> <FaDownload size="30px" color="black"/></a></div>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" alt="logo" src={image.logo2}></img></div>
                <div className="details">
                <img src={logo} alt="logo" className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo3} download> <FaDownload size="30px" color="black" /></a>
                </div>
               
            
            </div>
            <div className="grid_item">
                <div ><img className="card" alt="logo" src={image.logo3}></img></div>
                <div className="details">
                <img src={logo} logo="none" alt="logo" className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo4} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card"  alt="none" src={image.logo4}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo5} alt="logo" download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo5} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo7} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo7} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo7} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo8} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo8} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo9} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo9} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo10} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo10} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={image.logo11} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo11} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={image.logo12} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo12} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={image.logo13} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo13} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={image.logo14} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo14} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={image.logo15} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={image.logo15} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
         
            </div>
            <div className="more">
                <button className="show" onClick=
                {() => this.like()}>Showmore</button>
                 
            </div>
            <div >
            {this.state.show}
            </div>
    </div>

        )     
   
    }
}
export default Poems;