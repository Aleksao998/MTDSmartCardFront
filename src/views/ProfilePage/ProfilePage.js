import React, { useState } from 'react';

// reactstrap components
import {
  Button,
} from "reactstrap";
import FileSaver from "file-saver";
// core components
import Navbar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import MainSection from "./MainSection/MainSection";
import ContactSection from "./ContactSection/ContactSection";
import ContactSectionEdit from "./ContactSectionEdit/ContactSectionEdit";


function ProfilePage() {
  const linkRef = React.createRef();
  //ReactState
  const [ScreenSize, setScreenSize] = useState(1);
  const [EditMode, setEditMode] = useState(0);
  const [ButtonText, setButtonText] = useState("Edit profile");
  const [ButtonIcon, setButtonIcon] = useState("fa fa-edit");
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [state, setState] = useState({
    mobileNumber:"",
    homeNumber:"",
    email:"",
    workEmail:"",
    twitter:"",
    linkedin:"",
    facebook:"",
    snapchat:"",
    youtube:"",
    whatsapp:"",
    viber:"",
    address:"",
    birthday:""

  });
  const [newState, setNewState] = useState({
    mobileNumber:"",
    homeNumber:"",
    email:"",
    workEmail:"",
    twitter:"",
    linkedin:"",
    facebook:"",
    snapchat:"",
    youtube:"",
    whatsapp:"",
    viber:"",
    address:"",
    birthday:""
  });
  const handleOnChange = event => {
      const { name, value } = event.target;
      setNewState({...newState,[name]: value });
  };

  const downloadContact=()=>{
    const Url="http://localhost:3003/profile/createVCF?"+
                                                          "firstName="+firstName+"&"+
                                                          "lastName="+lastName+"&"+
                                                          "organization="+"MTD"+"&"+
                                                          "jobTitle="+"software engineer"+"&"+
                                                          "homePhone="+state.homeNumber+"&"+
                                                          "mobileNumber="+state.mobileNumber+"&"+
                                                          "email="+state.email+"&"+
                                                          "workEmail="+state.workEmail+"&"+
                                                          "facebook="+state.facebook+"&"+
                                                          "linkedIn="+state.linkedIn+"&"+
                                                          "twitter="+state.twitter+"&"+
                                                          "snapchat="+state.snapchat+"&"+
                                                          "youtube="+state.youtube+"&"+
                                                          "address="+state.address;

    console.log(Url);                                                     
    fetch(Url, {
      method:"GET",
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Creating or editing a post failed!');
      }
      return res.blob();
    })
    .then(blob => {
      const href = window.URL.createObjectURL(blob);
      const a = linkRef.current;
      a.download = 'Lebenslauf.vcf';
      a.href = href;
      a.click();
      a.href = '';
    }).catch(err => {
      console.log(err);
    });

  }
  document.documentElement.classList.remove("nav-open");


  React.useEffect(() => {
    fetch("http://localhost:3003/profile/profileData")
    .then(res => {
      if(res.status !== 200){
        throw new Error("Failed to fetch posts.");
      }
      return res.json();
    })
    .then(resData => {
      setFirstName(resData.profile[0].firstName);
      setLastName(resData.profile[0].lastName);
    })
    .catch(err =>{
      console.log(err);
    });



    if(window.innerWidth <= 760){
      setScreenSize(0);
    }
    else{
      setScreenSize(1);
    }
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const editProfile = () =>{
    if(ButtonText == "Edit profile"){
      setButtonText("Save");
      setButtonIcon("fa fa-save");
      setEditMode(1);
    }
    else{
      console.log(newState);
      setState({...state,
                          ["mobileNumber"]: newState.mobileNumber,
                          ["homeNumber"]: newState.homeNumber,
                          ["email"]:newState.email,
                          ["workEmail"]:newState.workEmail, 
                          ["twitter"]: newState.twitter,
                          ["linkedin"]: newState.linkedin,
                          ["facebook"]:newState.facebook,
                          ["snapchat"]:newState.snapchat, 
                          ["youtube"]: newState.youtube,
                          ["whatsapp"]: newState.whatsapp,
                          ["viber"]:newState.viber,
                          ["address"]:newState.address, 
                          ["birthday"]:newState.birthday
                });
      console.log(state);
      
      setButtonText("Edit profile");
      setButtonIcon("fa fa-edit");
      setEditMode(0);
    }
  }
  return (
    <>
      <Navbar />
      <ProfilePageHeader />
      <a ref={linkRef}/>
      <div className="section profile-content">
        <div className="EditButtonSection">
        <Button className="btn-round btnEditSave" color="default" onClick={editProfile}>
                <i className={ButtonIcon}/>{ScreenSize ? ButtonText : null} 
            </Button>
            
        </div>
        <div className="container noPaddingProfilePage">
          <MainSection firstName={firstName} lastName={lastName} downloadContact={downloadContact}/>
          {EditMode ?  <ContactSectionEdit handleOnChange={handleOnChange}/> : <ContactSection state={state}/>}
          
         
        
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
