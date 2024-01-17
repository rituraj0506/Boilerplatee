import React,{useContext} from 'react'
import LoginContext from "../Context/LoginContext";

function Profile() {
    const {username}= useContext(LoginContext);
  return (
    <div>
     <h1>Profile</h1> 
     <h2>UserName:{username}</h2> 
    </div>
  )
}

export default Profile
//how i acess the user that is login