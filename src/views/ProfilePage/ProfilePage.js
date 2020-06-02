import React, { useState } from "react";
import queryString from "query-string";
// reactstrap components
import { Button } from "reactstrap";
// core components

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import MainSection from "./MainSection/MainSection";
import MainSectionEdit from "./MainSectionEdit/MainSectionEdit";
import ContactSection from "./ContactSection/ContactSection";
import ContactSectionMobile from "./ContactSectionMobile/ContactSectionMobile";
import ContactSectionEdit from "./ContactSectionEdit/ContactSectionEdit";

//Redux
import { connect } from "react-redux";
import { addProfileData } from "../../actions/userProfile";
//localSTorage
import { saveStore, loadStore } from "../../localStorage/localStorage";
function ProfilePage(props) {
  document.documentElement.classList.remove("nav-open");
  const linkRef = React.createRef();
  //ReactState
  const [mobile, setIsMobile] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [EditMode, setEditMode] = useState(0);
  const [ButtonText, setButtonText] = useState("Edit profile");
  const [ButtonIcon, setButtonIcon] = useState("fa fa-edit");
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    mobileNumber: "",
    homeNumber: "",
    email: "",
    workEmail: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    snapchat: "",
    youtube: "",
    instagram: "",
    whatsapp: "",
    viber: "",
    address: "",
    birthday: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {};
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const downloadContact = () => {
    const Url = `https://cors-anywhere.herokuapp.com/http://ec2-35-158-214-30.eu-central-1.compute.amazonaws.com:3001/profile/createVCF?
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
                                                          instagram=${state.instagram}&
                                                          address=${state.address}`;

    fetch(Url, {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.blob();
      })
      .then((blob) => {
        const href = window.URL.createObjectURL(blob);
        const a = linkRef.current;
        a.download = "Lebenslauf.vcf";
        a.href = href;
        a.click();
        a.href = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editProfile = () => {
    if (ButtonText === "Edit profile") {
      setButtonText("Save");
      setButtonIcon("fa fa-save");
      setEditMode(1);
    } else {
      props.history.push("/profile-page/" + props.id + "?edit=false");
      props.setEditProfileFromMenu(0);

      fetch(
        "https://cors-anywhere.herokuapp.com/http://ec2-35-158-214-30.eu-central-1.compute.amazonaws.com:3001/profile/updateProfile/",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + props.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: state.firstName,
            lastName: state.lastName,
            companyName: state.companyName,
            jobTitle: state.jobTitle,
            mobileNumber: state.mobileNumber,
            homeNumber: state.homeNumber,
            email: state.email,
            workEmail: state.workEmail,
            twitter: state.twitter,
            linkedin: state.linkedin,
            facebook: state.facebook,
            snapchat: state.snapchat,
            youtube: state.youtube,
            whatsapp: state.whatsapp,
            viber: state.viber,
            address: state.address,
            birthday: state.birthday,
          }),
        }
      )
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });

      props.dispatch(
        addProfileData(
          state.firstName,
          state.lastName,
          state.companyName,
          state.jobTitle,
          state.gender,
          state.mobileNumber,
          state.homePhone,
          state.email,
          state.workEmail,
          state.twitter,
          state.linkedIn,
          state.facebook,
          state.snapchat,
          state.youtube,
          state.instagram,
          state.whatsapp,
          state.viber,
          state.adress,
          state.birthday,
          imageUrl
        )
      );
      setButtonText("Edit profile");
      setButtonIcon("fa fa-edit");
      setEditMode(0);
    }
  };
  React.useEffect(() => {
    console.log("Use effect");
    let params = queryString.parse(props.location.search);
    if (params.edit === "true" || props.editProfileFromMenu === 1) {
      setButtonText("Save");
      setButtonIcon("fa fa-save");
      setEditMode(1);
    } else if (props.editProfileFromMenu === 0) {
      setButtonText("Edit profile");
      setButtonIcon("fa fa-edit");
      setEditMode(0);
    }
    if (props.userId === props.id) {
      setisAuthenticated(true);
    }
    const store = loadStore();

    if (typeof store !== "undefined") {
      console.log("local");
      setState({
        ...state,
        firstName: store.profileData.firstname,
        lastName: store.profileData.lastName,
        companyName: store.profileData.companyName,
        jobTitle: store.profileData.jobTitle,
        mobileNumber: store.contactInfo.mobilePhone,
        homeNumber: store.contactInfo.homePhone,
        email: store.contactInfo.email,
        workEmail: store.contactInfo.workEmail,
        twitter: store.socialNetwork.twitter,
        linkedin: store.socialNetwork.linkedIn,
        facebook: store.socialNetwork.facebook,
        instagram: store.socialNetwork.instagram,
        snapchat: store.socialNetwork.snapchat,
        youtube: store.socialNetwork.youtube,
        whatsapp: store.directMessages.whatsapp,
        viber: store.directMessages.viber,
        address: store.personalInfo.adress,
        birthday: store.personalInfo.birthday,
      });
      setImageUrl(store.profileData.imageUrl);
    } else {
      console.log("fetch");
      fetch(
        "https://cors-anywhere.herokuapp.com/http://ec2-35-158-214-30.eu-central-1.compute.amazonaws.com:3001/profile/profileData/" +
          props.id
      )
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch posts.");
          }
          return res.json();
        })
        .then((resData) => {
          setImageUrl(resData.profileImage);

          setState({
            ...state,
            firstName: resData.profileData.profileData.firstName,
            lastName: resData.profileData.profileData.lastName,
            companyName: resData.profileData.profileData.companyName,
            jobTitle: resData.profileData.profileData.jobTitle,
            mobileNumber:
              resData.profileData.profileData.contactInfo.mobilePhone,
            homeNumber: resData.profileData.profileData.contactInfo.homePhone,
            email: resData.profileData.profileData.contactInfo.email,
            workEmail: resData.profileData.profileData.contactInfo.workEmail,
            twitter: resData.profileData.profileData.socialNetwork.twitter,
            linkedin: resData.profileData.profileData.socialNetwork.linkedIn,
            facebook: resData.profileData.profileData.socialNetwork.facebook,
            instagram: resData.profileData.profileData.socialNetwork.instagram,
            snapchat: resData.profileData.profileData.socialNetwork.snapchat,
            youtube: resData.profileData.profileData.socialNetwork.youtube,
            whatsapp: resData.profileData.profileData.directMessage.whatsapp,
            viber: resData.profileData.profileData.directMessage.viber,
            address: resData.profileData.profileData.personalInfo.adress,
            birthday: resData.profileData.profileData.personalInfo.birthday,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (window.innerWidth < 700) {
      setIsMobile(true);
    }
  }, [props.editProfileFromMenu]);
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);

  return (
    <>
      <ProfilePageHeader />
      <a ref={linkRef} />

      <div className="section profile-content">
        {isAuthenticated ? (
          <div className="EditButtonSection">
            <Button
              className="btn-round btnEditSave"
              color="default"
              onClick={editProfile}
            >
              <i className={ButtonIcon} />
            </Button>
          </div>
        ) : null}

        <div className="container noPaddingProfilePage">
          {EditMode ? (
            <MainSectionEdit
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              id={props.id}
              modalIsOpen={modalIsOpen}
              afterOpenModal={afterOpenModal}
              closeModal={closeModal}
              openModal={openModal}
              state={state}
              handleOnChange={handleOnChange}
            />
          ) : (
            <MainSection
              state={state}
              downloadContact={downloadContact}
              imageUrl={imageUrl}
            />
          )}

          {EditMode ? (
            <ContactSectionEdit state={state} handleOnChange={handleOnChange} />
          ) : mobile ? (
            <ContactSectionMobile state={state} />
          ) : (
            <ContactSection state={state} />
          )}
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

const ConnectedProfilePage = connect((state) => {
  return {
    store: state,
  };
})(ProfilePage);

export default ConnectedProfilePage;
