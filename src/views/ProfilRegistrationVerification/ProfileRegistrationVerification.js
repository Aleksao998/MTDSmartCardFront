import React, { useState,useEffect } from 'react';

import ProfilePage from "../ProfilePage/ProfilePage";
import RegistrationPage from "../RegistrationPage/RegisterPage";
import LoadingPage from "../LoadingPage/LoadingPage";
const ProfileRegistrationVerification = (props) => {
    const [verified, setVerified]= useState(0);
    const [id]= useState(props.match.params.id);

    const useForceUpdate = () => {
      console.log("useForceUpdate");
      setVerified(2);
    }
    useEffect(() => {
        
        const url= "http://localhost:3003/profile/findProfileById/"+ id;
        fetch(url)
        .then(res => {
          if(res.status !== 200){
            setVerified(1);
          }
          else{
            setVerified(2);   
          }
        })
        .catch(err =>{
          console.log(err);
          
        });
        
        
    },[id]);
    
    const renderComponent=()=>{
        switch (verified) {
            case 0:  return <LoadingPage/>;
            case 1:  return <RegistrationPage id={id} useForceUpdate={useForceUpdate}/>;
            case 2:  return <ProfilePage/> ;
            default: return null;
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