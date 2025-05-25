import React from "react";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";


function Login(){

const[username,setusername]=React.useState("");
const[password,setpassword]=React.useState("");
const [error,seterror]=React.useState("")
const navigate =useNavigate();

const info=async(e)=>{
 e.preventDefault();
 seterror("");

 try{
   await signInWithEmailAndPassword(auth,username,password);
   console.log("login sucessfully");
   navigate(/home)

 }
 catch{
    console.error("Error");
   seterror("invalid password")
 }



}

return(
<div className="">
 <form onSubmit={info}>
 <div className="">
    <label className="">Name:<input type="email" value={username} onChange={(e)=>setusername(e.target.value)}/></label>
      <label className="">Password:<input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/></label>
      <button type="submit">Log in</button>
 </div>



 </form>







</div>



)



}
export default Login