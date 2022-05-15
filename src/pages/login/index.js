import React from "react";
import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { ModalHeader } from "react-bootstrap";
const Index = () => {
  const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const home = useRouter();
    
   
    const submitLogin = (e) => {
        console.log(e);
        e.preventDefault();
        console.log("send");
       
        
                axios.post("http://localhost:1337/api/auth/local", {
                  identifier: username,
                  password: password
              })
              /*.then(response  =>{
                  setUsername("");
                  setPassword("");
                  console.log('Well done')
                  console.log('User profile', response.data.user)
                  console.log('User token', response.data.jwt)
                  window.confirm("Connexion réussie")
              })*/
              .then(response => {
                    localStorage.setItem("jwt", response.data.jwt)
                   // localStorage.setItem("localuser", response.data.user)
                    console.log('Well done')
                    console.log('User profile', response.data.user)
                    
                    home.push('/profil')
                  
                  
                  })    
              .catch( error => {
                  console.log('An erro occured:' , error.response)
              })

             
        }
       

     
          
         // console.log(register.prenom)
 
    

    
  return (
    
    <div className="page__register">
      <form className="form" onSubmit={(e)=> submitLogin(e)}>
        <Input
          label="Username"
          name="username"
          id="username"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre prénom"
          handleChange={(e)=>setUsername(e.target.value)}
          value={username}
        />
    
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          classes="form__input"
          required={true}
          placeholder="Veuillez définir un mot de passe"
          handleChange={(e)=>setPassword(e.target.value)}
          value={password}
        />
        


        <center><Button title="envoyer" classes="btn btn__color-black" type="submit"/></center>
        
      </form>
    </div>
  );
};

export default Index;

/*    <Input
          label="Nom"
          name="lastname"
          id="lastName"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={(e)=>setLastname(e.target.value)}
          value={lastname}
          />*/