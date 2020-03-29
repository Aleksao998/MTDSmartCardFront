import React, { useState } from 'react';

import ProfilePage from "../ProfilePage/ProfilePage";
import RegistrationPage from "../RegistrationPage/RegisterPage";
import LoadingPage from "../LoadingPage/LoadingPage";
const ProfileRegistrationVerification = (props) => {
    const [verified, setVerified]= useState(0);


    React.useEffect(() => {
        
        const URL= "http://localhost:3003/profile/findProfileById/"+ props.match.params.id;
        console.log(URL);
        fetch(URL)
        .then(res => {
          if(res.status !== 200){
            throw new Error("Failed to find profile.");
          }
          return res.json();
        })
        .then(resData=>{
            if(resData.data.verified == false){
                setVerified(1);
            }
            if(resData.data.verified == true){
                setVerified(2);
            }
            
            
            
        })
        .catch(err =>{
          console.log(err);
        });
        
        
    },[]);
    
    const renderComponent=()=>{
        switch (verified) {
            case 0:   return <LoadingPage/>;
            case 1:  return <RegistrationPage/>;
            case 2:  return <ProfilePage/> ;
          }
        }
    
    return(
        

        <div>
            
           {
            renderComponent()

           }
    
        
        </div>
    )
}

export default ProfileRegistrationVerification;