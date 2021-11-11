import React, { Component } from 'react'
import Quotesmore from './Quotesmore';
import {FaDownload} from 'react-icons/fa'
import quotes from './q-images'
import logo from "./img/profile.jpg";

export default class Microtale extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        show:""
        

        }
    }
   like (){
       this.setState({
           show:<Quotesmore/>
       })
   }
   like1 (){
       this.setState({
           show:" "
       })
   }
    render() {
        return (
            <div> <div id="grid">
               
            <div className="grid_item">
                <div ><img className="card" alt="logo" src={quotes.logo1}></img></div>
                <div className="details">
                <img src={logo} alt="logo" className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <div class="download_button"> <a className="font" href={quotes.logo2} download> <FaDownload size="30px" color="black"/></a></div>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" alt="logo" src={quotes.logo2}></img></div>
                <div className="details">
                <img src={logo} alt="logo" className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo3} download> <FaDownload size="30px" color="black" /></a>
                </div>
               
            
            </div>
            <div className="grid_item">
                <div ><img className="card" alt="logo" src={quotes.logo3}></img></div>
                <div className="details">
                <img src={logo} logo="none" alt="logo" className="card-acc" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo4} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card"  alt="none" src={quotes.logo4}></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo5} alt="logo" download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo5} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo" /><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo7} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo7} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo7} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo8} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo8} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo9} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo9} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo10} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo10} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo11} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo11} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo12} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo12} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo13} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo13} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo14} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo14} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo15} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo15} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo16} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo16} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            
                <div className="grid_item">
                <div ><img className="card" src={quotes.logo17} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo17} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo18} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo18} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo19} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo19} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div><div className="grid_item">
                <div ><img className="card" src={quotes.logo20} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo20} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo21} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo21} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            <div className="grid_item">
                <div ><img className="card" src={quotes.logo22} alt="logo"></img></div>
                <div className="details">
                <img src={logo} className="card-acc" alt="logo"/><p className="acc-name">Keerthana_Suresh</p>
                <a class="download_button" href={quotes.logo22} download> <FaDownload size="30px" color="black" className="download"/></a>
                </div>
            
            </div>
            


            
             
            </div>
             <div className="more">
             <button className="show" onClick=
             {() => this.like()}>Show More</button> <button className="show" onClick=
             {() => this.like1()}>Show Less</button>
              
         </div>
         <div >
         {this.state.show}
         </div>
         </div>
            
            
            
        )
    }
}
