import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Kozpenzkonvertalo from "./container/Kozpenzkonvertalo"

class App extends Component{
  render(){
    return(
      <div className="App">        
        <Kozpenzkonvertalo />
      </div>
    );
  }
}

export default hot(module)(App);