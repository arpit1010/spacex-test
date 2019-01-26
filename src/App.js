import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./components/Homepage.js"
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import NotFound from "./components/NotFound.js"


import './App.css';

class App extends Component {
  state= {}
  render() {
    return (
      <div className="App">
    <Navbar/>
      {/* ROUTES */}
      <Switch>
        <Route exact path="/" render={()=> <Homepage />}/>
        <Route component={NotFound}/>
    
      </Switch>

      <Footer/>
      </div>
    );
  }
}

export default App;
