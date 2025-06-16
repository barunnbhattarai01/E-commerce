import React from "react";
import { X ,Menu} from "lucide-react";
import { Link } from "react-router-dom";


function MainPage() {

const[open,setopen]=React.useState(false);

const togglemenu=()=>{
    setopen(prev=>!prev)
}


  return (
    <>
     {/* Navbar for Desktop */}
      <div className="h-screen w-auto bg-gradient-to-r from-pink-500 to-blue-400 ">
        <div className="hidden md:flex gap-72 p-5">
          <div className="text-2xl font-bold">Sasto Pasal</div>
          <div className="flex text-2xl font-bold gap-72">
            <p>Home</p>
            <p>Services</p>
            <Link to='/login'>Login</Link>
          </div>
        </div>

         
    {/* Navbar for mobile */}

     <div className="md:hidden flex justify-end items-center">
        <button className="" onClick={togglemenu}>{open===true?<X size={33}/>:<Menu size={33}/>}</button>
     </div>
         
         {open &&
          <div className="flex flex-col items-end mr-5 text-[20px] ">
            <p onClick={togglemenu}>Home</p>
            <p onClick={togglemenu}>Services</p>
            <Link to='/login' onClick={togglemenu}>Login</Link>
            </div>
         
         }
  



     {/* Introduction about Business */}


      <div className="absolute inset-0 bg-no-repeat opacity-30 pointer-events-none border border-pink-600"
       style={{backgroundImage: "url('/girl.avif')",
              backgroundPosition: "-20px center",
              backgroundSize: "500px",
              border: "none",}}
      >
        
      </div>
                <div className="font-bold md:text-[40px] text-[20px] flex justify-end mr-96 mt-10">Introduction</div>
            <div className="font-bold text-[20px] md:text-[30px]  ml-auto mt-5 mr-24  h-auto md:w-[800px] w-96 p-12 ">
                Sasto Pasal is an affordable and customer-friendly e-commerce platform designed 
                to bring quality products to your doorstep at unbeatable prices. 
                Our mission is to make online shopping easy, reliable, and budget-friendly for everyone.
                 From electronics and fashion to daily essentials and home goods, Sasto Pasal offers a wide range of products
                  to suit your needs. With secure payment options, fast delivery, and dedicated customer service, 
                  Sasto Pasal is your trusted partner for a smarter shopping experience.
            </div>

      </div>



      {/* Some services */}

      <div className="h-screen w-auto bg-gradient-to-l from-violet-50 to-red-400">

      <div className="text-2xl font-bold mr-2 mt-3 p-5">
      Services
      </div>


  <div className="flex md:text-2xl text-[20px] font-bold flex-wrap gap-6">
        <div className="">
           ✅ Anyone can list products for sale and connect with potential buyers easily.
        </div>

        <div className="">
           ✅ We provide secure payment options and a smooth shopping experience.
        </div>

        <div className="">
        ✅ Fast delivery and reliable customer service ensure customer satisfaction.
        </div>
        <div className="">
          ✅   Our platform aims to empower local sellers and promote online trading in a safe environment.
        </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;
