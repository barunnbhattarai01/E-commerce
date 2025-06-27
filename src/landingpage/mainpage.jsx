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
        className="h-screen w-auto bg-gradient-to-r from-pink-500 to-blue-400"
      >
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
        <div className="md:hidden flex justify-end items-center p-3 bg-gradient-to-r from-white to-white top-24">
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
        className="h-screen w-auto bg-gradient-to-l from-yellow-300 to-violet-200 relative p-4"
      >
        <div className="text-2xl font-bold mt-3 text-black">Services</div>

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

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-screen w-auto bg-gradient-to-b from-black to-black p-4"
      >
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className=" flex items-center md:mt-40 mt-30  gap-2 flex-col"
        >
          <div className="text-white text-2xl font-bold max-h-96 max-w-full p-2">Map</div>
          <div className="h-auto max-w-4xl">
            <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51869.67625827751!2d139.67712000946372!3d35.6559497128004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5f8e737217%3A0xc07b8ba9c0f2b12b!2z77ym772P772V772O772EIO-8re-8te-8qu-8qSDpnZLlsbE!5e0!3m2!1sne!2snp!4v1750078964320!5m2!1sne!2snp"        
              style={{ border: 0, width: '100%', maxWidth: '300px', height:"100%" ,maxHeight:'300px'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default MainPage;

