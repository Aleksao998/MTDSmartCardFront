import React from "react";
// reactstrap components

function ContactEditSection(props){
   
    return(
        <div class="service_area">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-xl-4 col-md-4">
                        <div class="single_service text-center wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".4s">
                            <div className="center">
                                <h3 className="contactTitle"> Contact info</h3>
                            </div>
                            <table style={{width:"100%"}}>
                            <tbody>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fas fa-mobile"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Mobile phone:</p>
                                        <input name="mobileNumber" type="tel" onChange={props.handleOnChange} placeholder="e.g. 63204030"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left",paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Home phone:</p>
                                        <input name="homeNumber" type="tel" onChange={props.handleOnChange} placeholder="e.g. 113808624"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Email</p>
                                        <input name="email" type="text" onChange={props.handleOnChange} placeholder="e.g. aleksaopacic@gmail.com"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fas fa-envelope-open"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Work Email</p>
                                        <input name="workEmail" type="text" onChange={props.handleOnChange} placeholder="e.g. opacicaleksa@gmail.com"></input>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                    <div class="col-xl-4 col-md-4">
                        <div class="single_service text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="center">
                                <h3 className="contactTitle">Social Network</h3>
                            </div>
                            <table style={{width:"100%"}}>
                            <tbody>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-twitter"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Twitter:</p>
                                        <input name="twitter" type="text" onChange={props.handleOnChange} placeholder="e.g. AleksaOpacic"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-linkedin-in"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left",paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">LinkedIn:</p>
                                        <input name="linkedin" type="text" onChange={props.handleOnChange} placeholder="e.g. AleksaO"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-facebook-f"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"3!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Facebook</p>
                                        <input name="facebook" type="text" onChange={props.handleOnChange} placeholder="e.g. aleksaopacic"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-snapchat-ghost"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Snapchat</p>
                                        <input name="snapchat" type="text" onChange={props.handleOnChange} placeholder="e.g. AleksaO"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-youtube"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Youtube</p>
                                        <input name="youtube" type="text" onChange={props.handleOnChange} placeholder="e.g. AleksaO"></input>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>




                    <div class="col-xl-4 col-md-4">
                        <div class="single_service text-center wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".4s">
                            <div className="center">
                                <h3 className="contactTitle">Direct messages <br></br> & <br></br> personal info</h3>
                            </div>
                            <table style={{width:"100%"}}>
                            <tbody>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-whatsapp"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">WhatsApp:</p>
                                        <input name="whatsapp" type="tel" onChange={props.handleOnChange} placeholder="e.g. +381621203040"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fab fa-viber "></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left",paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Viber:</p>
                                        <input name="viber" type="tel" onChange={props.handleOnChange} placeholder="e.g. +381621203040"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                            <i class="fas fa-home"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">Adress:</p>
                                        <input name="address" type="text" onChange={props.handleOnChange} placeholder="e.g. Hektoroviceva 24,Beograd"></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr className="contactRow">
                                    <td>
                                        <div className="social-icons icon-circle list-unstyled list-inline">
                                        <i class="fas fa-birthday-cake"></i>
                                        </div>
                                    
                                    </td>
                                    <td style={{columnSpan:"2!important", textAlign:"left", paddingLeft:"5px"}}>
                                        <p className="contactIconTitle">BirthDay</p>
                                        <input name="birthday" type="text" onChange={props.handleOnChange} placeholder="e.g. 30.07.1998"></input>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactEditSection;
