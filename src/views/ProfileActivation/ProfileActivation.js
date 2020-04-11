import React, { useEffect } from "react";

const ProfileActivation = (props) => {
  useEffect(() => {
    const url =
      "http://localhost:3003/auth/validateProfile/" + props.match.params.id;
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        props.setLocalStorage(resData.token, resData.userId);
        props.history.push("/fill-data/" + resData.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>You have activated your account!</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileActivation;
