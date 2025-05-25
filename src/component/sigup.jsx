import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";


function Signup(){

 const[username,setusername]=React.useState("");
 const[password,setpassword]=React.useState("");
 const[error,seterror]=React.useState("")
const navigate=useNavigate()

const signinfo= async(e)=>{

      e.preventDefault();
      seterror("")
try{
    await createUserWithEmailAndPassword(auth,username,password);
    console.log("Signup sucessfully")
   navigate("/")

}catch(err){
console.error("error",err)
seterror("invalid password or email")
}



}




return(
  
<div className=" ">
 <form onSubmit={signinfo} className="flex justify-center items-center">
 <div className="flex flex-col justify-center  mt-[350px] border border-black h-52 p-5 rounded-2xl">
    <label className="text-2xl text-white">Username:<input type="email" value={username} onChange={(e)=>setusername(e.target.value)}
     className="border border-white rounded-2xl ml-1"
    /></label>
      <label className="text-2xl text-white mt-4">Password:<input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}
      className="border border-white rounded-2xl ml-3"/></label>
      <button type="submit" className="border border-black rounded-2xl h-10 w-20 mx-auto mt-3 hover:bg-blue-200">Log in</button>
    
 </div>



 </form>







</div>

)



}
export default Signup