import React from "react";
import {Button} from 'reactstrap';

const TitleSection = () => (
    <div className="container m-t-160P">
    <div className="row">
        <div className="center">
            <p className="productTitle">Smart Card</p>
            <p className="productText">Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus, luctus nec ulamcorper mattis</p>
            <p className="productText">, Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus</p>
            <br></br>
            <Button className="btn-round btn-info" color="primary" outline>
                <i class="fa fa-shopping-cart "></i>
                Buy Product
            </Button>
            <p className="productPrice">-2500rsd-</p>
        </div>
    </div>
</div>
);

export default TitleSection;