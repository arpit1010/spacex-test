import React, {Component} from "react";
import Slide from 'react-reveal/Slide';
import {connect} from "react-redux";
import {headerAction} from "../actions/headerAction"

class Header extends Component{

    switchImg(n){
        this.props.switchImg(n)
    }
    
    componentDidMount(){
        var number = 1;
        setInterval(()=>{
            number < 3 ? number ++ : number = 1;
            this.switchImg(number)
        }, 7000)
    }

    render(){
        console.log(this.props)
        return(
            <header>
                    <div className={this.props.jumboImg === 1 ? "jumbotron jumbotron-img-1" : 
                                    this.props.jumboImg===2 ? "jumbotron jumbotron-img-2":
                                    "jumbotron jumbotron-img-3"}>    
                    </div>
                    
                    <div className="header-title">
                    <Slide bottom>
                            <div className="header-title-divleft">
                            {this.props.headerClass===1? <h2>GPS III SV01 MISSION</h2>:
                            this.props.headerClass===2? <h2>NASA ASTRONAUTS ON CREW DRAGON</h2>:
                            <h2>FIRST PASSENGER ON LUNAR BFR MISSION</h2>
                            }
                            </div>
                        </Slide>
                        <Slide right>
                        {this.props.headerClass===1? <button>WATCH REPLAY</button>:
                            this.props.headerClass===2? <button>LEARN MORE</button>:
                            <button>LEARN MORE</button>
                            }
                        </Slide>  
                    </div>

                    <div className="header-switch">
                        <div className={this.props.headerClass===1 ? "header-selected" : null} onClick={()=> this.switchImg(1)}>
                        <div className="header-text">
                        <h3 className="number">01 </h3>
                        <h3> GPS III SV01 MISSION</h3>
                        </div>
                        </div>

                        <div className={this.props.headerClass===2 ? "header-selected" : null} onClick={()=> this.switchImg(2)}>
                        <div className="header-text">
                        <h3 className="number">02 </h3>
                        <h3> NASA ASTRONAUTS ON CREW DRAGON</h3>
                        </div>
                        </div>

                        <div className={this.props.headerClass===3 ? "header-selected" : null} onClick={()=> this.switchImg(3)}>
                        <div className="header-text">
                        <h3 className="number">03 </h3>
                        <h3> FIRST PASSENGER ON LUNAR BFR<br/>
                            MISSION</h3>
                        </div>
                        </div>
                    </div>
            </header>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        jumboImg: state.jumboImg,
        headerClass: state.headerClass
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchImg: (n) => {dispatch (headerAction(n))} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
