import React, {Component} from "react";
import {Link} from "react-router-dom";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class NavbarMobile extends Component {
    render(){
        return(
            <div className="NavbarMobile">
            <Slide right>
                   <div>
                       <Fade right cascade>
                        <div className="navlink-mobile">
                        <Link to="/Falcon9">Falcon 9</Link>
                        <Link to="/FalconHeavy">Falcon Heavy</Link>
                        <Link to="/other">Dragon</Link>
                        <Link to="/Update">Updates</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Careers">Careers</Link>
                        <Link to="/Gallery">Gallery</Link>
                        <Link to="/Shop">Shop</Link>
                        </div>
                        </Fade>
                </div>  
                </Slide>
            </div>
        )
    }
}

export default NavbarMobile;