import React, { Component } from 'react';
import "./index.css";
import Writings from "./Writings";
import Aboutme from "./Aboutme";


class content extends Component {
       constructor(props) {
         super(props)
       
         this.state = {
            count: <Writings/>,
            style: "link",
            next: "active",
          
          
         }
       }
       
  
       render(){
      
        return (
        <div id="bac">
               <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7608495330013701"
     crossorigin="anonymous"></script>

         <ul >
            <li id="first_item" onClick={() => this.handleclick1()}><a className={this.state.next} href="#none">My writings</a>
            </li>
            <li onClick={() => this.handleclick()}><a href="#none" className={this.state.style}>Bio</a></li>
         </ul>
         <div id="writing">
           {this.state.count}
         </div>
         
        
       </div>
        )
        }
        handleclick()
        {
        this.setState({
          count: <Aboutme/>,
          style: "active",
          next: "link"
        })
      
        }
        handleclick1()
        {
        this.setState({
          count: <Writings/>,
          style: "link",
          next: "active"
         })
      
        }
      
}
export default content;



