import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);





const MainLanding = () => {
  const [open, setopen] = React.useState(false);
  const[theme,settheme]=useState(()=>{return localStorage.getItem("theme")})
  
  
  //dark and light mode
  useEffect(()=>{
  if(theme==='dark'){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }
  localStorage.setItem("theme",theme)
  },[theme])
  
  //toggle theme
  function toggletheme(){
    settheme((theme)=>theme==='light'?'dark':'light')
  }
  
  
  
const togglemenu = () => {
    setopen(prev => !prev);
  };
    
    //gsap
   const boxref=useRef(null);  //passing reference to the div 
   const divref =useRef(null);//for breand
   const arrivals =useRef(null);//arrivals section
   const youngfav =useRef(null); //for younf fav section
   const downloadref=useRef(null)



  useEffect(()=>
  {
   gsap.fromTo(    
boxref.current,    //reference to current div 
{y:100,opacity:0},   //intial point
{
  y:0,
  opacity:1,             //ending point
  duration:1.5,
  scrollTrigger:{             //scrolltrigger means when the div or box came in view the animation satrt
    trigger:boxref.current,
    start:"top 80%",                //start the animation when the div covered 80% view 
    toggleActions:"play none none reverse",   //play:scrooling down reverese:scrooll back up none :nothing
  }
} ),


//for breand
gsap.fromTo(
divref.current,
{x:100,opacity:0},
{x:0,opacity:1,duration:3,
  scrollTrigger:{
    trigger:divref.current,
    start:"top 70%",
    toggleActions:"play none none reverse"
  }
},


   );
   // for arrivals section
    gsap.fromTo(    
arrivals.current,   
{y:100,opacity:0},  
{
  y:0,
  opacity:1,            
  duration:1.5,
  scrollTrigger:{             
    trigger:arrivals.current,
    start:"top 80%",               
    toggleActions:"play none none reverse", 
  }
} ),
//for young arrivalsa
gsap.fromTo(
  youngfav.current,
  {x:100,opacity:0},
  {
    x:0,
    opacity:1,
    duration:4,
    scrollTrigger:{
      trigger:youngfav.current,
      start:"top 80%",
      toggleActions:"play none none reverse",
    }
  }
),
gsap.fromTo(
  downloadref.current,
  {y:100,opacity:0},
  {
    y:0,
    opacity:1,
    duration:3,
    scrollTrigger:{
      trigger:downloadref.current,
      start:"top 80%",
      toggleActions:"play none none reverse"
    }
  }
)
   
   



  },[])

   

  return (
    <div className="overflow-x-hidden ">
    <div className="dark:bg-black bg-slate-100">
      {/*desktop navbar */}
      <nav className="hidden md:flex bg-white text-black w-full uppercase tracking-[0.22px] md:text-[22px] p-6 fixed z-100"> {/*tracking=letterspacing  */}
        <div className="container mx-auto flex flex-row justify-between items-center ">
          <div className="font-bold text-2xl">
           SASTO PASAL
          </div>
          <ul className="hidden md:flex flex-row gap-16 justify-end items-center text-2xl">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/feedback'>Feedback</Link></li>
            <li><Link to='/img'>Images</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li>
                 <button
                onClick={toggletheme}
                className="text-2xl"
                title="Toggle Theme"
              >
                {theme === "light" ? "🌑" : "☀️"}
              </button>
              </li>
          </ul>
      
        </div>
        </nav>
      {/* navbar for mobile */}
      <div className="md:hidden flex justify-between items-center p-3 h-24 bg-white relative z-50 ">
        <div className=" font-semibold text-xl">SASTO PASAL</div>
          <button onClick={togglemenu}>
            {open ? <X size={33} /> : <Menu size={33} />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col items-start px-2 py-2 gap-5 text-xl z-10 absolute w-full bg-black text-white "
          >
            <p onClick={togglemenu}>Home</p>
            <Link to='img' onClick={togglemenu}>Images</Link>
            <Link to='/feedback' onClick={togglemenu}>Feedback</Link>
            <Link to="/login" onClick={togglemenu}>Login</Link>
             <button
                onClick={toggletheme}
                className="text-2xl"
                title="Toggle Theme"
              >
                {theme === "light" ? "🌑" : "☀️"}
              </button>
          </div>
          
        )}


      {/*hero section*/}
      <section className="flex flex-col container mx-auto bg-[#F4F6F5] rounded-[59px] pt-16 px-10 md:items-center md:px-20 
      md:pt-[100px] md:flex-row md:justify-between gap-10 z-30 dark:bg-black dark:text-white " ref={boxref}>
        <div className="flex flex-col items-start text-black md:pb-[68px] z-10 dark:bg-black dark:text-white">
          <h1 className="text-4xl font-black leading-[125%] sm:text-5xl md:text-[96px] md:leading-[125%]">
             <span>LET’S</span><br />
            EXPLORE<br />
            <span>UNIQUE</span><br />
            CLOTHES.
          </h1>
          <p className="md:text-[32px]">Live for Influential and Innovative fashion!</p>
          <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8">
            <div className="w-1/2 h-1/2">
              <img src="/banner-image-2.png" alt="banner image" />
            </div>
            <a className="bg-black text-white rounded-md py-4 px-4 text-center" href="#">Shop Now</a>
          </div>
        </div>
        <div>
          <img className="w-full drop-shadow-lg rounded-2xl" src="/man.jpg" alt="banner image" />
        </div>
      </section>

      {/* brand logooo */}
      <section className="flex flex-col justify-center items-center gap-[121px] mt-16 py-[61px] md:flex-row dark:bg-white " ref={divref}>
        {["hm", "obey", "shopify", "lacoste", "levis", "amazon"].map((brand, index) => (
          <div key={index} className="w-[150px] ">
            <img src={`/${brand}.png`} alt={brand} />
          </div>
        ))}
      </section>

      {/* new arraivals */}
      <section className="flex flex-col container items-start gap-28 mx-auto px-[10px] dark:bg-black dark:text-white" ref={arrivals} >
        <div className="relative text-black dark:bg-black dark:text-white">
          <h2 className="text-4xl font-black  md:text-5xl">NEW ARRIVALS</h2>
        </div>
        <div className="flex flex-col gap-24 md:flex-row md:justify-between md:items-stretch">
          {["hoddiee", "coats", "T-shirts"].map((img, idx) => (
            <div key={idx} className="flex flex-col w-full md:w-1/3 gap-7">
              <img className="w-full h-[704px] object-cover rounded-[20px]" src={`/${img}.png`} alt={img} />
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-[32px] font-medium">{img === "T-shirts" ? "Tees & T-Shirt" : img === "coats" ? "Coats & Parkas" : "Hoodies & Sweetshirt"}</h3>
                  <a className="text-2xl text-[#7F7F7F]" href="#">Explore Now!</a>
                </div>
                <img src="/arrow.png" alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* young section */}
      <section className="flex flex-col container items-start my-[190px] gap-28 mx-auto dark:bg-black dark:text-white" ref={youngfav}>
        <div className="relative text-black dark:bg-black dark:text-white">
          <h2 className="text-4xl font-black  md:text-5xl">Young’s Favourite</h2>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-stretch">
          {["fav-1", "fav-2"].map((img, idx) => (
            <div key={idx} className="flex flex-col w-full md:w-1/2 gap-7">
              <img className="w-full h-[704px] object-cover rounded-[20px]" src={`/${img}.png`} alt={img} />
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-[32px] font-medium">{img === "fav-1" ? "Trending on instagram" : "All Under $40"}</h3>
                  <a className="text-2xl text-[#7F7F7F]" href="#">Explore Now!</a>
                </div>
                <img src="/arrow.png" alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*download section*/}
      <section className="container mx-auto flex flex-col my-[190px] gap-28 md:flex-row md:justify-evenly md:items-center dark:bg-black dark:text-white" ref={downloadref}>
        <div className="flex-1 flex flex-col items-center text-center md:items-start">
          <h4 className="text-4xl md:text-5xl font-black tracking-[3px] leading-[130%] md:leading-[150%] mb-10">
            DOWNLOAD APP & <br /> GET THE VOUCHER!
          </h4>
          <p className="text-2xl font-medium leading-9 text-[#7C7C7C]">
            Get 30% off for first transaction using <br /> Rondovision mobile app for now.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-16">
            <img className="w-[204px]" src="/apple-store.png" alt="Apple Store" />
            <img className="w-[204px]" src="/play-store.png" alt="Play Store" />
          </div>
        </div>
        <div className="flex-1">
          <img src="/mobile-app.png" alt="Mobile App" />
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black py-[125px] text-white flex flex-col gap-24 px-14 md:items-center md:gap-[415px] md:flex-row md:justify-between md:px-[100px]">
        <div className="flex flex-col items-start gap-8 ">
           <img src="/image.png" className="w-40 h-15 rounded-4xl"/>
        
          <p className="text-xl text-[#8E8E8E] md:text-2xl font-normal">
            Complete your style with awesome <br /> clothes from us.
          </p>
          <ul className="flex flex-row gap-[14px]">
            {["fb", "insta", "twitter", "linkedin"].map((icon, idx) => (
              <li key={idx}><a href="#"><img src={`/${icon}.svg`} alt={icon} /></a></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[50px] md:gap-[188px] md:flex-row">
          {[{
            title: "Company",
            links: ["About us", "Contact us", "Support", "Carrers"]
          }, {
            title: "Quick Link",
            links: ["Share Location", "Orders Tracking", "Size Guide", "FAQs"]
          }, {
            title: "Legal",
            links: ["Terms & conditions", "Privacy Policy"]
          }].map((section, idx) => (
            <div key={idx} className="flex flex-col text-[#D9D9D9] gap-8">
              <h4 className="font-bold">{section.title}</h4>
              <ul className="flex flex-col gap-8">
                {section.links.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
    </div>
  );
};

export default MainLanding;
