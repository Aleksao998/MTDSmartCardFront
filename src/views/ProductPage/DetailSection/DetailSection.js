import React from "react";
import logo from './about-img.jpg';

const DetailSection = () => (
    <section class="home-about-area">
        <div class="container-fluid">				
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 no-padding home-about-left">
                    <img class="img-fluid" src={logo} alt=""/>
                </div>
                <div class="col-lg-6 no-padding home-about-right">
                    <h1>Globally Connected <br/>
                    by Large Network</h1>
                    <p>
                        <span>We are here to listen from you deliver exellence</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </p>
                    <a class="text-uppercase primary-btn" href="#">get details</a>
                </div>
            </div>
        </div>	
    </section>
);

export default DetailSection;