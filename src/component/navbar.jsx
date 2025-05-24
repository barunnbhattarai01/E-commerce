import { Link } from "react-router-dom";
import React from "react";

function Navbar(){

  //experminating the dark mode in chart button for now for learning

  const[theme,settheme]=React.useState("light");
  React.useEffect(()=>
  {
  if (theme==="dark"){
    document.documentElement.classList.add("dark");
  }
  else{
    document.documentElement.classList.remove("dark")
  }



  },[theme] ) //useeffect run when the themes change and themese change through the button


  const toggle=()=>{
    settheme(theme==="light" ? "dark": "light")
  }








return(
  <>
 <div className="flex bg-white shadow-lg h-24 mt-2 ">
  <div className="flex items-center"><img src="./logo-3030.webp" className="h-10 w-20 "/></div>
  <div className="text-2xl mx-auto flex space-x-16 ">
  <Link to="/" className="focus:bg-blue-300 h-10 w-20 ">Home</Link>
    <Link to="/services" className="focus:bg-blue-300 h-10 w-24">Services</Link>
<Link to="/product" className="focus:bg-blue-300 h-10 w-24">Products</Link>
 <Link to="/chart" className="focus:bg-blue-300 h-10 w-16">Chart</Link>

<button className="focus:bg-blue-300 h-10 w-16" onClick={toggle}>Button</button>


  </div>
  <div className="">
   <button type="submit" className="border border-amber-100 cursor-pointer">Submit</button> <input type="text" className="border border-amber-200 text-black rounded-2xl shadow-lg mt-3"/>
  </div>


 </div>
 

</>
)


}



export default Navbar;