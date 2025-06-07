import { Link } from "react-router-dom";
import React from "react";
import { Menu,X } from "lucide-react";  //menu and X are the commpoenent of react lucide

function Navbar(){



  const[open,setopen]=React.useState(false)
  //experminating the dark mode in chart button for now for learning

  const[theme,settheme]=React.useState(()=>{
    return localStorage.getItem('theme') 
  });


  React.useEffect(()=>
  {
  if (theme==="dark"){
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor="black"
  }
  else{
    document.documentElement.classList.remove("dark");
    document.body.style.backgroundColor="white"
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
 <div className="hidden md:flex bg-white shadow-lg h-24 items-center ">
  <div className="flex items-center"><img src="./logo-3030.webp" className="h-10 w-20 "/></div>
  <div className="text-2xl mx-auto flex space-x-16 ">
  <Link to="/home" className="focus:bg-blue-300 h-10 w-20 ">Home</Link>
    <Link to="/items" className="focus:bg-blue-300 h-10 w-24">Items</Link>
<Link to="/products" className="focus:bg-blue-300 h-10 w-24">Products</Link>
 <Link to="/chart" className="focus:bg-blue-300 h-10 w-16">Chart</Link>

<button className="focus:bg-blue-300 h-10 w-24 p-1" onClick={toggle}>Button</button>


  </div>


 </div>
 

 {/*toggle menu*/}
   <div className="md:hidden flex justify-end">
     <button className="" onClick={togglemenu}>{open?<X size={28}/>:<Menu size ={28}/>}</button>
   {/*  menu and X are the react compomemt so we called like this*/}


   </div>



 {/*mobile view*/}
 <div className="md:hidden flex flex-col">
  
  {/* if open is true which means it is open and when it is open it show below detail*/}
  {open &&(
  <div className="flex flex-col items-end mr-5 dark:text-white ">
  <Link to="/home" className="">Home</Link>
    <Link to="/items" className="">Items</Link>
<Link to="/products" className="">Products</Link>
 <Link to="/chart" className="">Chart</Link>
<button className="" onClick={toggle}>{theme==="light"? "☀️":"🌙"}</button>
</div>
)}
 </div>

</>
)


}



export default Navbar;