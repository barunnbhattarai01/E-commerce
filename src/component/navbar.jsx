import { Link } from "react-router-dom";

function Navbar(){


return(
 <div className="flex bg-white shadow-lg h-16">
  <div className=""><img src="./logo-3030.webp" className="h-10 w-20 "/></div>
  <div className="text-2xl mx-auto flex space-x-16 ">
  <Link to="/" className="focus:bg-blue-300 h-10 w-20 ">Home</Link>
    <Link to="/services" className="focus:bg-blue-300 h-10 w-24">Services</Link>
<Link to="" className="focus:bg-blue-300 h-10 w-24">Products</Link>

  <Link to="/chart" className="focus:bg-blue-300 h-10 w-16">Chart</Link>


  </div>
  
  <div className="">
   <span>🔍 <input type="text" className="border border-amber-200 rounded-2xl shadow-lg mt-3"/></span>
  </div>




 </div>
 


)


}



export default Navbar;