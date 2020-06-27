import React, { useState } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
// reactstrap components
// core components

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import MainSection from "./MainSection/MainSection";
import MainSectionEdit from "./MainSectionEdit/MainSectionEdit";
import ContactSection from "./ContactSection/ContactSection";
import ContactSectionMobile from "./ContactSectionMobile/ContactSectionMobile";
import ContactSectionEdit from "./ContactSectionEdit/ContactSectionEdit";
import ContactSectionEditMobile from "./ContactSectionEditMobile/ContactSectionEditMobile";

function ProfilePage(props) {
  document.documentElement.classList.remove("nav-open");
  const linkRef = React.createRef();
  //ReactState
  const [links, setLink] = React.useState(false);
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
  const [showData, setShowData] = useState("");

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
  const handleOnChangeCheckBox = (event) => {
    console.log(event.target.checked);
    const { name } = event.target;
    console.log(event.target.name);
    setShowData({ ...showData, [name]: event.target.checked });
  };
  const downloadContact = () => {
    console.log("test");

    const Url = `http://172.20.10.2:3001/profile/createVCF?firstName=${state.firstName}&lastName=${state.lastName}&organization=MTD&jobTitle=software engineer&homePhone=${state.homeNumber}&mobileNumber=${state.mobileNumber}&email=${state.email}&workEmail=${state.workEmail}&facebook=${state.facebook}&linkedIn=${state.linkedIn}&twitter=${state.twitter}&snapchat=${state.snapchat}&youtube=${state.youtube}&instagram=${state.instagram}&address=${state.address}`;

    fetch(Url, {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }

        return res.blob();
      })
      .then((blob) => {
        const href = URL.createObjectURL(blob);
        console.log(href);
        var link = document.createElement("a");
        link.href = href;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editProfile = () => {
    props.history.push("/profile-page/" + props.id);
    props.setEditProfileFromMenu(0);
    console.log(showData);
    fetch("http://172.20.10.2:3001/profile/updateProfile/", {
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
        showData: showData,
      }),
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
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
          mobileNumber: resData.profileData.profileData.contactInfo.mobilePhone,
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
        console.log();
        setShowData(resData.profileData.showData);
      })
      .catch((err) => {
        console.log(err);
      });
    if (window.innerWidth < 700) {
      setIsMobile(true);
    }
  }, [props.editProfileFromMenu]);

  return (
    <>
      <ProfilePageHeader isAuthenticated={isAuthenticated} />
      <a ref={linkRef} />

      <div className="section profile-content">
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
            mobile ? (
              <ContactSectionEditMobile
                state={state}
                handleOnChange={handleOnChange}
                showData={showData}
                editProfile={editProfile}
                handleOnChangeCheckBox={handleOnChangeCheckBox}
                pageChange={props.pageChange}
                setPageChange={props.setPageChange}
              />
            ) : (
              <ContactSectionEdit
                state={state}
                handleOnChange={handleOnChange}
              />
            )
          ) : mobile ? (
            <ContactSectionMobile state={state} showData={showData} />
          ) : (
            <ContactSection state={state} />
          )}
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default withRouter(ProfilePage);
