import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {navbarMenu} from "../actions/navbarMenu";
import {hidenavbarMenu} from "../actions/hidenavbarMenu"

class Navbar extends Component{
         state= {}

    render(){
        return (
            <nav className={this.props.location.pathname=== "/"? "navbar-home" : "navbar-website"}>
            {/* NAV BLOCK 1 */}
                <div className="navblock-1">
                    <div className="logo">
                        <Link to="/"><img src="/images/spacex-logo.jpg" width="300px" height="160px" alt="logo"/></Link>
                    </div>
                    <div className="nav-products-links">
                        <Link to="/Falcon9">Falcon 9</Link>
                        <Link to="/FalconHeavy">Falcon Heavy</Link>
                        <Link to="/Dragon">Dragon</Link>
                        <Link to="/Updates">Updates</Link>
                    </div>
                </div>
            {/* NAV BLOCK 2 */}
                <div className="navblock-2">
                        <Link to="/About">About</Link>
                        <Link to="/Careers">Careers</Link>
                        <Link to="/Gallery">Gallery</Link>
                        <Link to="/Shop">Shop</Link>
                </div>  

                <div className="nav-hamburger">
                    {this.props.hamburger==="hide"?
                    <img src="/images/hamburger.png" alt="icon" onClick={()=> this.props.showMobileNav()}/>:
                    <img src="/images/crosswhite.png" alt="icon" onClick={()=> this.props.hideMobileNav()}/>   }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hamburger: state.mobileStyle
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        showMobileNav: ()=>{dispatch(navbarMenu())},
        hideMobileNav: ()=> {dispatch(hidenavbarMenu())}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter (Navbar))