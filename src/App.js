
import Content from './Content.js';
import "./index.css";
import logo from "./img/profile.jpg";
import {IoIosArrowDropupCircle} from 'react-icons/io'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import React, { Component } from 'react'
import Developer from './developer.js';
import Footer from './footer.js';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       top:"",
       down:""
    }
  }
  
  render() {
    return (
      
        <div className="App">
    <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>keerthana's page</title>
    <link rel="stylesheet" href="index.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&display=swap" rel="stylesheet"/>
    </head>
<body>
    <div id="header">
    <img src={logo} alt="logo" id="img" />
     <p id="name">Keerthana Suresh</p>
      <p id="info">-A writer and a poet</p>
    </div>
    <a class="top-down" href="#bac"> <IoIosArrowDropupCircle class="top-down"  /> </a><br/><br/>
    <a class="top-down" href="#bac"> <IoIosArrowDropdownCircle class="top-down"/> </a>
   <div id="category">
     <Content/>
     <Developer/>
     <Footer/>
     </div>   
     
   
           
</body>
</div>
 

    )
  }
}
