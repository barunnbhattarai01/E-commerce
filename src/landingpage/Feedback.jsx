import React,{ useEffect, useState } from "react";
import { Star } from "lucide-react";
import { db } from "../firebase/firebase.config";
import { addDoc,collection} from "firebase/firestore";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

function Feedback(){
const[about,setabout]=useState("");
const[rating,setrating]=useState(0);
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





const submit=async (e)=>{
e.preventDefault();
const data={
    feedback:about,
    star:rating
}
try{
  await addDoc(collection(db,'feedback'),data);
  setabout("");
  setrating(0)
}
catch(err){
console.error("Error happened",err)
}
}

    return(
<>
<div className="min-h-screen w-full bg-amber-50 dark:bg-gray-800 dark:text-white">
  {/*desktop navbar */}
  <nav className="hidden md:flex bg-white dark:bg-white   text-black dark:text-black w-full uppercase tracking-[0.22px] md:text-[22px] p-11">
    <div className="container mx-auto flex flex-row justify-between items-center">
      <div className="font-bold text-4xl">
        SASTO PASAL
      </div>
      <ul className="hidden md:flex flex-row gap-16 justify-end items-center">
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
  <div className="md:hidden flex justify-end items-center p-3 bg-white dark:bg-black relative z-50">
    <button onClick={togglemenu}>
      {open ? <X size={33} /> : <Menu size={33} />}
    </button>
  </div>

  {open && (
    <div className="flex flex-col items-start px-2 py-2 gap-5 text-base z-10 absolute w-full bg-black text-white ">
      <Link to="/" onClick={togglemenu}>Home</Link>
      <Link to='/img' onClick={togglemenu}>Images</Link>
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

  <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-10">
    Feedback Section
  </h1>

  <div className="flex justify-center items-center mt-10">
    <form
      className="border border-black  p-6 sm:p-8 md:p-10 rounded-2xl bg-white shadow-xl w-full max-w-md"
      onSubmit={submit}
    >
      <div className="mb-6 text-xl sm:text-2xl font-bold text-center dark:text-black">
        <h1>Please, Give your Feedback</h1>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setrating(star)}
            className="text-yellow-500"
          >
            <Star
              fill={star <= rating ? "#facc15" : "none"}
              stroke="#facc15"
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </button>
        ))}
      </div>

      <div className="mb-6">
        <textarea
          typeof="text"
          value={about}
          onChange={(e) => setabout(e.target.value)}
          className="ring-1 rounded-2xl focus:ring-blue-700 w-full h-40 p-3 text-base sm:text-lg bg-white  border border-black"
          placeholder="Write your feedback here..."
        />
      </div>

      <div className="flex justify-center">
        <button
          className="rounded-2xl shadow-xl px-6 py-2 bg-amber-200 hover:bg-amber-300 transition-all text-base font-semibold dark:bg-white dark:text-black"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>



</>


    )

}

export default Feedback;


