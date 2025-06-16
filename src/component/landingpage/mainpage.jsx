import React from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function MainPage() {
  const [open, setopen] = React.useState(false);

  const togglemenu = () => {
    setopen(prev => !prev);
  };

  return (
    <>
      {/* Navbar for Desktop */}
      <div className="h-screen w-auto bg-gradient-to-r from-pink-500 to-blue-400">
        <div className="hidden md:flex justify-between p-5 flex-wrap">
          <div className="text-2xl font-bold">Sasto Pasal</div>
          <div className="flex text-2xl font-bold gap-10 flex-wrap">
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
            <Link to="/login">Login</Link>
          </div>
        </div>

        {/* Navbar for mobile */}
        <div className="md:hidden flex justify-end items-center p-3">
          <button onClick={togglemenu}>
            {open ? <X size={33} /> : <Menu size={33} />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col items-end mr-5 gap-2 text-[20px]">
            <p onClick={togglemenu}>Home</p>
            <p onClick={togglemenu}>Services</p>
            <p onClick={togglemenu}>Contact</p>
            <Link to="/login" onClick={togglemenu}>Login</Link>
          </div>
        )}

        {/* Introduction */}
        <div className="absolute inset-0 bg-no-repeat opacity-30 pointer-events-none"
          style={{
            backgroundImage: "url('/girl.avif')",
            backgroundPosition: "-20px center",
            backgroundSize: "500px",
            border: "none",
          }}
        ></div>

        <div className="flex flex-col md:items-end md:mr-96 mt-10 md:ml-0 ml-6">
          <div className="font-bold md:text-[40px] text-[20px] mr-52">Introduction</div>
          <div className="font-bold text-[19px] md:text-[30px] mt-5 md:w-[800px] w-auto p-4 ">
            Sasto Pasal is an affordable and customer-friendly e-commerce platform designed 
            to bring quality products to your doorstep at unbeatable prices. 
            Our mission is to make online shopping easy, reliable, and budget-friendly for everyone.
            From electronics and fashion to daily essentials and home goods, Sasto Pasal offers a wide range of products
            to suit your needs. With secure payment options, fast delivery, and dedicated customer service, 
            Sasto Pasal is your trusted partner for a smarter shopping experience.
          </div>
        </div>
      </div>

      {/* Some services */}
      <div className="h-screen w-auto bg-gradient-to-l from-yellow-300 to-violet-200 relative p-4">
        <div className="text-2xl font-bold mt-3 text-black">Services</div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 text-black mt-4 font-bold md:text-2xl">
          <div className="border border-black p-4 rounded-4xl md:w-96 w-72">
            ✅ Anyone can list products for sale and connect with potential buyers easily.
          </div>
          <div className="border border-black p-4 rounded-4xl md:w-96 w-72">
            ✅ We provide secure payment options and a smooth shopping experience.
          </div>
          <div className="border border-black p-4 rounded-4xl md:w-96 w-72">
            ✅ Fast delivery and reliable customer service ensure customer satisfaction.
          </div>
          <div className="border border-black p-4 rounded-4xl md:w-96 w-72">
            ✅ Our platform aims to empower local sellers and promote online trading in a safe environment.
          </div>
        </div>

        <div className="absolute inset-0 bg-no-repeat opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/woman.jpg')",
            backgroundPosition: "1000px center",
            backgroundSize: "500px",
            border: "none",
          }}
        ></div>
      </div>

      {/* Contact */}
      <div className="h-screen w-auto bg-gradient-to-b from-black to-black p-4">
        <div className="text-white text-[40px] flex justify-center mb-6">Contact</div>
        <div className="text-white text-2xl flex flex-col md:flex-row flex-wrap gap-8 md:justify-center items-start">
          <div className="flex items-center gap-2">
            <FaFacebook size={33} />
            <span>Barunn Bhattarai</span>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram size={33} />
            <span>Barunn Bhattarai Sharma</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub size={33} />
            <span>barunnbhattarai01</span>
          </div>
          <div className="flex items-center gap-2">
            <SiGmail size={33} />
            <span>barunbhattarai@gmail.com</span>
          </div>
        </div>
        {/* Map */}
        
        <div className=" flex items-center mt-40 gap-2 flex-col">
            <div className="text-white text-2xl font-bold h-12 w-20 p-2">Map</div>
        <div className="">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51869.67625827751!2d139.67712000946372!3d35.6559497128004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5f8e737217%3A0xc07b8ba9c0f2b12b!2z77ym772P772V772O772EIO-8re-8te-8qu-8qSDpnZLlsbE!5e0!3m2!1sne!2snp!4v1750078964320!5m2!1sne!2snp"
  width="600"
  height="300"
  style={{ border: 0, width: '100%', maxWidth: '400px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
