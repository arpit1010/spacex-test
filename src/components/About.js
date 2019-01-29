import React, {Component} from "react";
import {Link} from "react-router-dom"
import Fade from "react-reveal/Fade"
import {connect} from "react-redux";
import {arrowAction} from "../actions/arrowAction";

class About extends Component{

    arrow(n){
      this.props.handleArrow(n)
    }

    render(){
    return(

        <section className="About">
                <h3 className="about-h3">SPACEX DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS AND SPACECRAFT</h3>
                
                <Fade bottom cascade>
                <div className="card-block">

                <div className="card">
                    <div className="card-img">
                        <img src="/images/spacex-about1.jpeg" alt="img1"/>
                    </div>
                    <div className="card-text">
                        <h3>REUSABILITY: WORLD’S FIRST <br/> REFLIGHT OF AN ORBITAL <br/>CLASS ROCKET</h3>
                    </div>
                    <div className="about-learn">
                        <p onMouseOver={()=> this.arrow(1)} onMouseOut={()=> this.arrow(0)}><Link to="/">LEARN MORE
                        </Link></p>
                        {this.props.aboutArrow === 1 && <Fade left>&#x2192;</Fade>}
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/images/spacex-about2.jpeg" alt="img2"/>
                    </div>
                    <div className="card-text">
                        <h3>COMMERCIAL CREW: TAKING <br/>AMERICA’S ASTRONAUTS TO <br/>SPACE</h3>
                    </div>
                    <div className="about-learn">
                        <p onMouseOver={()=> this.arrow(2)} onMouseOut={()=> this.arrow(0)}><Link to="/">LEARN MORE 
                        </Link></p>
                        {this.props.aboutArrow === 2 && <Fade left>&#x2192;</Fade>}
                     </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="/images/spacex-about3.jpg" alt="img3"/>
                    </div>
                    <div className="card-text">
                        <h3>MAKING LIFE <br/>MULTIPLANETARY</h3>
                     </div>
                     <div className="about-learn">
                        <p onMouseOver={()=> this.arrow(3)} onMouseOut={()=> this.arrow(0)}><Link to="/">LEARN MORE
                        </Link></p>
                        {this.props.aboutArrow === 3 && <Fade left>&#x2192;</Fade>}
                     </div>
                </div>

                </div>
                </Fade>

        </section>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        aboutArrow: state.aboutArrow
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleArrow: (n) => {dispatch (arrowAction(n))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About); 