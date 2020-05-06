import React, { useState, useEffect } from "react";

import ProfilePage from "../ProfilePage/ProfilePage";
import RegistrationPage from "../RegistrationPage/RegisterPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage500 from "../ErrorPages/500ErrorPage/TechicalErrorPage";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
const ProfileRegistrationVerification = (props) => {
  const [verified, setVerified] = useState(0);
  const [id] = useState(props.match.params.id);

  const useForceUpdate = () => {
    setVerified(4);
  };
  useEffect(() => {
    console.log("___________________");
    console.log(props.location.search);
    const url = "http://localhost:3003/profile/findProfileById/" + id;
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          setVerified(2);
          return;
        } else if (res.status === 401) {
          setVerified(4);
          return;
        } else {
          setVerified(1);
          return;
        }
      })
      .catch((err) => {
        setVerified(3);
      });
  }, [id]);

  const renderComponent = () => {
    switch (verified) {
      case 0:
        return <LoadingPage />;
      case 1:
        return (
          <RegistrationPage
            id={id}
            useForceUpdate={useForceUpdate}
            setLocalStorage={props.setLocalStorage}
          />
        );
      case 2:
        return (
          <ProfilePage
            setEditProfileFromMenu={props.setEditProfileFromMenu}
            editProfileFromMenu={props.editProfileFromMenu}
            id={id}
            token={props.token}
            userId={props.userId}
            location={props.location}
            history={props.history}
          />
        );
      case 3:
        return <ErrorPage500 />;
      case 4:
        return <VerifyEmail />;
      default:
        return null;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ProfileRegistrationVerification;
