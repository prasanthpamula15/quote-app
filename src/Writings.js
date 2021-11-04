import React, { Component } from 'react';
import "./index.css";
import Poems from './Poems';
import Quotes from './Quotes';
import Microtale from './Quotes';

export default class Writings extends Component {
    constructor(props){
        super(props)
      this.state={
          val:<Poems/>,
          click: "out",
          click2: "butt",
          click3: "butt"
      } 
      
        
    }
   
         render(){
           return (
            <div id="con">
                <p id="sel">select category to explore my writings</p>
                <div id="cat-select">
                 <a href="#here" onClick={() => this.catsel()} className={this.state.click}>Poems</a>
                 <a  href="#here" onClick={() => this.catsel1()} className={this.state.click2}>Quotes</a>              
                 <a href="#here" onClick={() => this.catsel2()} className={this.state.click3}>Microtale</a>
                 </div > <div id="here">
              {this.state.val}
                 </div>
            </div>
        )
    }
    catsel(){
        this.setState({
            val: <Poems/>,
            click:"out",
            click2:"butt",
            click3:"butt"
        })
    }
    catsel1(){
        this.setState({
            val: <Quotes/>,
            click:"butt",  
             click2:"out",
            click3:"butt"
    
        })
    }
    catsel2(){
        this.setState({
            val: <Microtale/>,
            click:"butt", 
            click2:"butt",
            click3:"out"
        })
    }
   
}

