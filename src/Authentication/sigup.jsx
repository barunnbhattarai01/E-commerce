import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";


function Signup(){

 const[username,setusername]=React.useState("");
 const[password,setpassword]=React.useState("");
 const[error,seterror]=React.useState("");
 const[signup,setsignup]=React.useState("");
const navigate=useNavigate()

const signinfo= async(e)=>{

      e.preventDefault();
      seterror("")
try{
    await createUserWithEmailAndPassword(auth,username,password);
    setpassword("");
    setusername("");
    seterror("")
    setsignup("Sucessfully sign up");
     

}catch(err){
console.error("error",err)
seterror("Already sign  up using this gmail")
}



}




return(
  

  <form onSubmit={signinfo} className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="flex flex-col gap-4 p-8 rounded-2xl shadow-lg bg-white w-96 border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Sign up</h2>
        
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your password"
            required
          />
        </div>
         {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Sign up
        </button>
        <Link to="/login" className="text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-2xl">Log in</Link>
         <div className="text-center">{signup && <p className="text-blue-800 font-bold">{signup}</p>}</div>
      </div>
      
    </form>
 









)



}
export default Signup