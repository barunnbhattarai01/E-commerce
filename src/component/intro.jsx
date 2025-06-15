import shoes from "/shoes.jpg";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <>
      {/* <Link to ="/ai" className='mt-16 mr-96 border border-b-black rounded-2xl p-4 cursor-pointer hover:bg-amber-300 font-bold'  >About us</Link> */}

      <div className=" text-white font-sans w-full h-screen bg-gradient-to-r from-black to-red-900">
        <div className="relative overflow-hidden w-full h-full  p-4 md:p-6">
          <div
            className="absolute inset-0 bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/headsets.jpg')",
              backgroundPosition: "-20px center",
              backgroundSize: "500px",
              border: "none",
            }}
          >
            <div className="absolute inset-0 bg-red-800 opacity-20"></div>
          </div>
          <div className=" h-48 w-72 ml-auto mt-64 mr-56 text-2xl">
                Welcome to Sasto Pasal  your one-stop shop for quality products at unbeatable prices. We’re here to make shopping easy, fun, and secure.
              </div>
        </div>
        
      </div>
    </>
  );
}

export default Intro;
