import React from "react";
import logo from '../card1.png' 


const FeatureSection = () => (
    <section id='features-4' class='section features-4-section m-t-40P ' >
        <div class='container' >
            <div class='row' >
                <div class='col-md-3 order-2 order-md-1 features-col text-right m-b-10P ' >
                    <div class='col-feature' >
                        <div class='icon'>
                            <i class="fa fa-heart move"></i>
                        </div>
                        <div class='content' >
                            <h4>Beautiful Design</h4>
                            <p>
                            Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has.
                            </p>
                        </div>
                    </div>
                    <div class='col-feature' >
                        <div class='icon' >
                            <i class="fa fa-undo move"></i>
                        </div>
                        <div class='content' >
                            <h4>Regular Updates</h4>
                            <p>
                            Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has.
                            </p>
                        </div>
                    </div>
                </div>
                <div class='col-md-6 order-1 order-md-2 '>
                    <div class='features-phone removePaddingSmallProduct' >
                        <img src={logo} />
                    </div>
                </div>
                <div class='col-md-3 order-3 order-md-3 features-col m-b-10P' >
                    <div class='col-feature' >
                        <div class='icon' >
                            <i class="fa fa-shopping-cart move"></i>
                        </div>
                        <div class='content' >
                            <h4>Cart System</h4>
                            <p>
                            Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has.
                            </p>
                        </div>
                    </div>
                    <div class='col-feature' >
                        <div class='icon' >
                            <i class="fa fa-magic move"></i>
                        </div>
                        <div class='content' >
                            <h4>Magical App</h4>
                            <p>
                            Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
    </section>
);


export default FeatureSection;