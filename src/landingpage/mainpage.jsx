import React from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from "framer-motion"; 

function MainPage() {
  const [open, setopen] = React.useState(false);
  const togglemenu = () => {
    setopen(prev => !prev);
  };

  return (
    <>
      {/* Navbar for Desktop */}
      <motion.div
    initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-screen w-auto bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400  ">
        <div className="hidden md:flex justify-between p-5 flex-wrap">
          <div className="text-2xl font-bold">Sasto Pasal</div>
          <div className="flex text-2xl font-bold gap-10 flex-wrap">
            <p>Home</p>
            <Link to='/img'>Images</Link>
            <Link to='/feedback'>Feedback</Link>
            <Link to='/login'>Login</Link>
          </div>
        </div>

        {/* Navbar for mobile */}
        <div className="md:hidden flex justify-end items-center p-3 bg-white relative z-50 ">
          <button onClick={togglemenu}>
            {open ? <X size={33} /> : <Menu size={33} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-start px-2 py-2 gap-5 text-base z-10 absolute w-full bg-gradient-to-r from-yellow-100 to-yellow-100 "
          >
            <p onClick={togglemenu}>Home</p>
            <Link to='img' onClick={togglemenu}>Images</Link>
            <Link to='/feedback' onClick={togglemenu}>Feedback</Link>
            <Link to="/login" onClick={togglemenu}>Login</Link>
          </motion.div>
          
        )}

        {/* Introduction background */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-30 pointer-events-none"
          style={{
            backgroundImage: "url('/girl.avif')",
            backgroundPosition: "-20px center",
            backgroundSize: "500px",
            border: "none",
          }}
        ></div>
      
        {/* Introduction section */}
     <motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-start md:items-end md:mr-96 mt-10 ml-6 md:ml-auto max-w-md gap-y-8"
>
  <div className="font-bold text-5xl mx-auto">
    Introduction
  </div>

  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="font-bold md:text-3xl text-2xl text-left  max-w-full max-h-auto  p-3 leading-relaxed w-full  "
  >
    Sasto Pasal is an affordable and customer-friendly e-commerce platform
    designed to bring quality products to your doorstep at unbeatable prices.
    Our mission is to make online shopping easy, reliable, and budget-friendly
    for everyone.
  </motion.div>
</motion.div>

      </motion.div>

      {/* Some services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-screen w-auto bg-gradient-to-r from-pink-100 via-indigo-100 to-purple-100 relative p-4  shadow-2xl"
      >
        <div className="text-4xl p-3 font-bold mt-3 text-black text-center ">Services</div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 text-black mt-4 font-bold md:text-2xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 bg-slate-200 rounded-4xl md:w-96 w-72 shadow-2xl"
          >
            ✅ Anyone can list products for sale and connect with potential buyers easily.
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-200 p-4 rounded-4xl md:w-96 w-72 shadow-2xl"
          >
            ✅ We provide secure payment options and a smooth shopping experience.
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-200 p-4 rounded-4xl md:w-96 w-72 shadow-2xl"
          >
            ✅ Fast delivery and reliable customer service ensure customer satisfaction.
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-200 p-4 rounded-4xl md:w-96 w-72 shadow-2xl"
          >
            ✅ Our platform aims to empower local sellers and promote online trading in a safe environment.
          </motion.div>
        </div>

        <div
          className="absolute inset-0 bg-no-repeat opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/woman.jpg')",
            backgroundPosition: "1000px center",
            backgroundSize: "500px",
            border: "none",
          }}
        ></div>
      </motion.div>

     
            {/* Need */}
    <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#0f172a]
 min-h-screen w-full px-4 py-10">
      <div className="flex flex-col justify-center items-center gap-2 mb-12">
        <div className="text-2xl text-white font-bold text-center">
          Tell your  Needs
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px w-12 bg-white" />
          <div className="w-2 h-2 bg-lime-500 rounded-full" />
          <div className="h-px w-12 bg-white" />
        </div>
      </div>

      <form className="max-w-6xl mx-auto space-y-10">
        <div className="text-white text-xl font-bold">
          <p className="mb-4">Interested in:</p>
          <div className="flex flex-wrap gap-6 border border-white p-6 rounded-xl text-sm md:text-base">
            {[
              "Shirts",
              "paints",
              "t-shirt",
              "underwear",
              "Alarm System",
              "Door Controls",
              "Laptop",
              "Watch",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2 w-1/2 md:w-1/4">
                <input
                  type="checkbox"
                  name="interest"
                  value={item}
                  className="accent-lime-500"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            className="bg-white text-black px-4 py-3 rounded-md w-full"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            className="bg-white text-black px-4 py-3 rounded-md w-full"
            placeholder="Enter your email"
            required
          />
          <input
            type="tel"
            className="bg-white text-black px-4 py-3 rounded-md w-full"
            placeholder="Enter your phone number"
            required
          />
          <input
            type="text"
            className="bg-white text-black px-4 py-3 rounded-md w-full"
            placeholder="Enter your address"
            required
          />
          <textarea
            className="bg-white text-black px-4 py-3 rounded-md w-full md:col-span-2"
            placeholder="Your message..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-2xl text-white bg-black px-8 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
        {/* Footer */}
   <div className="">
<footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2025 Barun Bhattarai. All rights reserved.</p>
      </footer>
</div>


    </>
  );
}

export default MainPage;

