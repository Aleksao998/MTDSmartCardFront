import React, { useState,useEffect } from 'react';

import ProfilePage from "../ProfilePage/ProfilePage";
import RegistrationPage from "../RegistrationPage/RegisterPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage500 from "../ErrorPages/500ErrorPage/TechicalErrorPage";
const ProfileRegistrationVerification = (props) => {
    const [verified, setVerified]= useState(0);
    const [id]= useState(props.match.params.id);

    const useForceUpdate = () => {
      console.log("useForceUpdate");
      setVerified(2);
    }
    useEffect(() => {
        console.log(id);
        const url= "http://localhost:3003/profile/findProfileById/"+ id;
        fetch(url)
        .then(res => {
          console.log(res);
          if(res.status !== 200){
            setVerified(1);
          }
          else{
            setVerified(2);   
          }
        })
        .catch(err =>{
          setVerified(3);  
          
        });
        
        
    },[id]);
    
    const renderComponent=()=>{
        switch (verified) {
            case 0:  return <LoadingPage/>;
            case 1:  return <RegistrationPage id={id} useForceUpdate={useForceUpdate} setLocalStorage={props.setLocalStorage}/>;
            case 2:  return <ProfilePage id={id} token={props.token} userId={props.userId}/> ;
            case 3:  return <ErrorPage500/> ;
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