import React, {Component} from "react";
import {Link, withRouter, Route, Switch} from "react-router-dom";

class Navbar extends Component{
         state= {}
    
    render(){
        return (
            <nav className={this.props.location.pathname=== "/"? "navbar-home" : "navbar-website"}>
            {/* NAV BLOCK 1 */}
                <div className="navblock-1">
                    <div className="logo">
                        <img src="/images/spacex-logo.jpg" width="300px" height="160px" alt="logo"/>
                    </div>
                    <div className="nav-products-links">
                        <Link to="/Falcon9">Falcon 9</Link>
                        <Link to="/FalconHeavy">Falcon Heavy</Link>
                        <Link to="/Dragon">Dragon</Link>
                        <Link to="/Update">Updates</Link>
                    </div>
                </div>
            {/* NAV BLOCK 2 */}
                <div className="navblock-2">
                        <Link to="/About">About</Link>
                        <Link to="/Careers">Careers</Link>
                        <Link to="/Gallery">Gallery</Link>
                        <Link to="/Shop">Shop</Link>
                </div>


            
            </nav>

        )
    }
}

export default withRouter (Navbar)