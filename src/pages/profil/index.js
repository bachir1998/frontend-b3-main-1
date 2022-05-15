import React from 'react';
import TitlePage from '../../components/TitlePage';
import { useState,useEffect } from 'react';
import userService from '../../services/user.service';
import withAuth from '../../HOC/withAuth';
import { useRouter } from "next/router";
import Button from '../../components/Button';

const index = () => {

   const [user, setUser] = useState();
   const [userlog, setUserlog] = useState();
   const Router = useRouter();

   useEffect(() => {
    //setUser(JSON.parse(localStorage.getItem('user')) || []);
    userService.getMe(localStorage.getItem('jwt'))
    .then(data=>{
           console.log((data))
           setUser(data)
        
        })
    .catch(err => console.log((err)))
    
    

   

  }, []);

  const logout = ()=>{
      localStorage.removeItem('token')
      Router.push('/login')
  }
  

   //console.log("Hello", user)
 
  
    return (
        <div>
            <h1>Profil :</h1>
            <h2>Username : {user && user.username} </h2>
            <h2>LastName : {user && user.lastName} </h2>
            <h2>Email : {user && user.email} </h2>

            <center> <Button title="logout" function={logout} type="button" classes="btn btn__color-black"/></center>

            
        </div>
    );
};

export default withAuth(index);