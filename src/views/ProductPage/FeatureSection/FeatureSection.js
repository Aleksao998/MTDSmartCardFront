import React from "react";
import logo from '../card1.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faInfinity, faCubes, faShieldAlt, faMicrochip, faHeart } from "@fortawesome/free-solid-svg-icons";
const FeatureSection = () => (
    <section id='features-4' class='section features-4-section m-t-0P ' >
        <div class='container' >
            <div className="row">
                <div className="center">
                    <div class='features-phone noPadding' >
                        <img src={logo} className="productImage" alt="Product Image" />
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 ">
                    <div class='col-feature' style={{textAlign:"center"}}>
                        <div class='icon'>
                            <FontAwesomeIcon icon={faExchangeAlt} />   
                        </div>
                        <div class='content' >
                            <h5>Instant Contact Tranfer</h5>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-2 ">
                    <div class='col-feature' style={{textAlign:"center"}}>
                        <div class='icon'>
                            <FontAwesomeIcon icon={faInfinity} />
                        </div>
                        <div class='content'  >
                            <h5>Unlimited Taps</h5>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-2 ">
                    <div class='col-feature' style={{textAlign:"center"}}>
                        <div class='icon'>
                            <FontAwesomeIcon icon={faCubes} />
                        </div>
                        <div class='content' >
                            <h5>ALL-In-One</h5>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-2 ">
                    <div class='col-feature' style={{textAlign:"center"}}>
                        <div class='icon'>
                            <FontAwesomeIcon icon={faShieldAlt} />
                        </div>
                        <div class='content' >
                            <h5>Encryption</h5>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-2 ">
                    <div class='col-feature' style={{textAlign:"center"}}>
                        <div class='icon'>
                            <FontAwesomeIcon icon={faMicrochip} />
                        </div>
                        <div class='content' >
                            <h5>Modern Technology</h5>
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-2 " >
                    <div class='col-feature' style={{textAlign:"center"}} >
                        <div class='icon'>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div class='content' >
                            <h5>Beautiful Design</h5>
                        </div>
                    </div>
                </div>

            </div>

            </div>
    </section>
);


export default FeatureSection;