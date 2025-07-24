import { Link } from "react-router-dom";
import React from "react";
import { Menu,X } from "lucide-react";  //menu and X are the commpoenent of react lucide
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";


function Navbar(){

  const navigate =useNavigate();

  const[open,setopen]=React.useState(false)
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
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme",theme)


  },[theme] ) //useeffect run when the themes change and themese change through the button


  const toggle=()=>{
    settheme(theme==="light" ? "dark": "light")
  }

  //toggle menu

   const togglemenu=()=>
   {
    setopen(!open); //we need to toggle menu for open and close
   }







return(
  <>
  {/*desktop view*/}
 <div className="hidden md:flex bg-white shadow-lg h-24 items-center  z-50 w-full fixed top-0" >
  <div className="flex items-center">
              <img src="/image.png" className="w-40 h-20 "/>
    </div>
  <div className="text-2xl mx-auto flex space-x-16 ">
  <Link to="/home" className=" ">Home</Link>
    <Link to="/items" className="">Items</Link>
<Link to="/products" className="">Products</Link>
 <Link to="/chart" className="">Chart</Link>
<button className="" onClick={toggle}>{theme=="light"?"🌑":"☀️ "}</button>

  </div>
  <div className="text-2xl p-3">
   <button className="cursor-pointer" onClick={()=>navigate("/login")}>{<LogOut size={33}/>}</button>
</div>

 </div>
 

 {/*toggle X and menu*/}
   <div className="md:hidden flex justify-end dark:bg-white h-12 bg-blue-300 items-center">
    <div className="mr-auto font-bold">Sasto Pasal</div>
    <div className="mr-3"><button className="" onClick={toggle}>{theme==="light"? "☀️":"🌙"}</button>
</div>
    <div className="">
     <button className="dark:text-black" onClick={togglemenu}>{open?<X size={28}/>:<Menu size ={28}/>}</button>
   {/*  menu and X are the react compomemt so we called like this*/}
  </div>

   </div>



 {/*mobile view*/}
 <div className="md:hidden flex flex-col bg-blue-100 ">
  
  {/* if open is true which means it is open and when it is open it show below detail*/}
  {open &&(
  <div className="flex flex-col items-start text-black text-base gap-4 px-2 py-2  w-full z-10 absolute dark:text-black shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-300">
  <Link to="/home" className=""  onClick={togglemenu}>Home</Link>
    <Link to="/items" className="" onClick={togglemenu}>Items</Link>
<Link to="/products" className="" onClick={togglemenu}>Products</Link>
 <Link to="/chart" className="" onClick={togglemenu}>Chart</Link>
   <button className="" onClick={()=>navigate("/")}>{<LogOut size={22}/>}</button>
</div>
)}
 </div>

</>
)


}



export default Navbar;