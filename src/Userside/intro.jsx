import { Link } from "react-router-dom";

function Intro() {
  return (
    <>

      <div className=" text-white font-sans w-full h-screen bg-gradient-to-r from-black to-red-900 md:mt-24 ">
        <div className="relative overflow-hidden w-full h-full  p-4 md:p-6">
          <div
            className="absolute inset-0 bg-no-repeat opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url('/headsets.jpg')",
              backgroundPosition: "-20px center",
              backgroundSize: "500px",
              border: "none",
            }}
          >
            <div className="absolute inset-0 bg-red-800 opacity-20"></div>
          </div>
          <div
          
          className="flex flex-wrap h-48 w-72 ml-auto mt-64 mr-56 text-2xl">
            Welcome to Sasto Pasal your one-stop shop for quality products at
            unbeatable prices. We’re here to make shopping easy, fun, and
            secure.
            <Link
              to="/ai"
              className="md:mt-4 text-black bg-gradient-to-r from-teal-100 to-red-100 rounded-2xl p-2 mt-2 cursor-pointer hover:bg-orange-400"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
