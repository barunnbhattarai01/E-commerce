import { Link } from "react-router-dom";
import React from "react";

function Navbar(){

  //experminating the dark mode in chart button for now for learning

  const[theme,settheme]=React.useState(()=>{
    return localStorage.getItem('theme') 
  });


  React.useEffect(()=>
  {
  if (theme==="dark"){
    document.documentElement.classList.add("dark");
  }
  else{
    document.documentElement.classList.remove("dark")
  }

  localStorage.setItem("theme",theme)


  },[theme] ) //useeffect run when the themes change and themese change through the button


  const toggle=()=>{
    settheme(theme==="light" ? "dark": "light")
  }








return(
  <>
 <div className="flex bg-white shadow-lg h-24 items-center ">
  <div className="flex items-center"><img src="./logo-3030.webp" className="h-10 w-20 "/></div>
  <div className="text-2xl mx-auto flex space-x-16 ">
  <Link to="/home" className="focus:bg-blue-300 h-10 w-20 ">Home</Link>
    <Link to="/services" className="focus:bg-blue-300 h-10 w-24">Services</Link>
<Link to="/product" className="focus:bg-blue-300 h-10 w-24">Products</Link>
 <Link to="/chart" className="focus:bg-blue-300 h-10 w-16">Chart</Link>

<button className="focus:bg-blue-300 h-10 w-24 p-1" onClick={toggle}>Button</button>


  </div>


 </div>
 

</>
)


}



export default Navbar;