import React, { useState } from 'react';

// reactstrap components
import {
  Button,
} from "reactstrap";
// core components

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import MainSection from "./MainSection/MainSection";
import MainSectionEdit from "./MainSectionEdit/MainSectionEdit";
import ContactSection from "./ContactSection/ContactSection";
import ContactSectionEdit from "./ContactSectionEdit/ContactSectionEdit";



function ProfilePage(props) {
  const linkRef = React.createRef();
  //ReactState
  const [ScreenSize, setScreenSize] = useState(1);
  const [EditMode, setEditMode] = useState(0);
  const [ButtonText, setButtonText] = useState("Edit profile");
  const [ButtonIcon, setButtonIcon] = useState("fa fa-edit");
  const [isAuth, setisAuth]= useState(false);
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    companyName:"",
    jobTitle:"",
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
    firstName:"",
    lastName:"",
    companyName:"",
    jobTitle:"",
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
   
    const Url=`http://localhost:3003/profile/createVCF?
                                                          firstName=${state.firstName}&
                                                          lastName=${state.lastName}&
                                                          organization=MTD&
                                                          jobTitle=software engineer&
                                                          homePhone=${state.homeNumber}&
                                                          mobileNumber=${state.mobileNumber}&
                                                          email=${state.email}&
                                                          workEmail=${state.workEmail}&
                                                          facebook=${state.facebook}&
                                                          linkedIn=${state.linkedIn}&
                                                          twitter=${state.twitter}&
                                                          snapchat=${state.snapchat}&
                                                          youtube=${state.youtube}&
                                                          address=${state.address}`;
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
  React.useEffect(()=> {
    if(props.userId == props.id){
      setisAuth(true);
    }
  },[])

  React.useEffect(() => {
    fetch("http://localhost:3003/profile/profileData/"+props.id)
    .then(res => {
      if(res.status !== 200){
        throw new Error("Failed to fetch posts.");
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData.profileData.profileData.firstName);
      setState({...state,
        "firstName": resData.profileData.profileData.firstName,
        "lastName": resData.profileData.profileData.lastName,
        "mobileNumber": resData.profileData.profileData.contactInfo.mobilePhone,
        "homeNumber": resData.profileData.profileData.contactInfo.homePhone,
        "email":resData.profileData.profileData.contactInfo.email,
        "workEmail":resData.profileData.profileData.contactInfo.workEmail, 
        "twitter": resData.profileData.profileData.socialNetwork.twitter,
        "linkedin": resData.profileData.profileData.socialNetwork.linkedin,
        "facebook":resData.profileData.profileData.socialNetwork.facebook,
        "snapchat":resData.profileData.profileData.socialNetwork.snapchat, 
        "youtube": resData.profileData.profileData.socialNetwork.youtube,
        "whatsapp": resData.profileData.profileData.directMessage.whatsapp,
        "viber":resData.profileData.profileData.directMessage.viber,
        "address":resData.profileData.profileData.personalInfo.address, 
        "birthday":resData.profileData.profileData.personalInfo.birthday
    });
    setNewState({...newState,
      "firstName": resData.profileData.profileData.firstName,
      "lastName": resData.profileData.profileData.lastName,
      "mobileNumber": resData.profileData.profileData.contactInfo.mobilePhone,
      "homeNumber": resData.profileData.profileData.contactInfo.homePhone,
      "email":resData.profileData.profileData.contactInfo.email,
      "workEmail":resData.profileData.profileData.contactInfo.workEmail, 
      "twitter": resData.profileData.profileData.socialNetwork.twitter,
      "linkedin": resData.profileData.profileData.socialNetwork.linkedin,
      "facebook":resData.profileData.profileData.socialNetwork.facebook,
      "snapchat":resData.profileData.profileData.socialNetwork.snapchat, 
      "youtube": resData.profileData.profileData.socialNetwork.youtube,
      "whatsapp": resData.profileData.profileData.directMessage.whatsapp,
      "viber":resData.profileData.profileData.directMessage.viber,
      "address":resData.profileData.profileData.personalInfo.address, 
      "birthday":resData.profileData.profileData.personalInfo.birthday
    });
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

  },[ScreenSize]);



  const editProfile = () =>{
    if(ButtonText === "Edit profile"){
      setButtonText("Save");
      setButtonIcon("fa fa-save");
      setEditMode(1);
    }
    else{
      fetch("http://localhost:3003/profile/updateProfile/",{
        method:"POST",
        headers:{
          Authorization: "Bearer " + props.token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName:newState.firstName,
          lastName:newState.lastName,
          companyName:newState.companyName,
          jobTitle:newState.jobTitle,
          mobileNumber: newState.mobileNumber,
          homeNumber: newState.homeNumber,
          email:newState.email,
          workEmail:newState.workEmail,
          twitter:newState.twitter,
          linkedin:newState.linkedin,
          facebook:newState.facebook,
          snapchat:newState.snapchat,
          youtube:newState.youtube,
          whatsapp:newState.whatsapp,
          viber:newState.viber,
          address:newState.address,
          birthday:newState.birthday
        })

      })
      .then(res=>{
        
      }).catch(err => {
        console.log(err);
      })


      setState({...state,
                          "firstName":newState.firstName,
                          "lastName":newState.lastName,
                          "companyName":newState.companyName,
                          "jobTitle":newState.jobTitle,
                          "mobileNumber": newState.mobileNumber,
                          "homeNumber": newState.homeNumber,
                          "email":newState.email,
                          "workEmail":newState.workEmail, 
                          "twitter": newState.twitter,
                          "linkedin": newState.linkedin,
                          "facebook":newState.facebook,
                          "snapchat":newState.snapchat, 
                          "youtube": newState.youtube,
                          "whatsapp": newState.whatsapp,
                          "viber":newState.viber,
                          "address":newState.address, 
                          "birthday":newState.birthday
                });
      console.log(state);
      
      setButtonText("Edit profile");
      setButtonIcon("fa fa-edit");
      setEditMode(0);
    }
  }
  return (
    <>
      <ProfilePageHeader />
      <a ref={linkRef}/>
      <div className="section profile-content">
      {
        isAuth?
                  <div className="EditButtonSection">
                    <Button className="btn-round btnEditSave" color="default" onClick={editProfile}>
                      <i className={ButtonIcon}/>{ScreenSize ? ButtonText : null} 
                    </Button> 
                  </div>
                  :
                  null
      }
        
        <div className="container noPaddingProfilePage">
          {EditMode ?   <MainSectionEdit state={newState} handleOnChange={handleOnChange}/>:  <MainSection state={state} downloadContact={downloadContact}/>}
         
          {EditMode ?  <ContactSectionEdit state={newState} handleOnChange={handleOnChange}/> : <ContactSection state={state}/>}
          
         
        
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
