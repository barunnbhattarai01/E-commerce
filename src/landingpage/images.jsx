import React from "react";
import { useNavigate } from "react-router-dom";

function Photo() {
  
  const[theme,settheme]=React.useState(()=>{
return localStorage.getItem("theme")

  }

  )



  const photos = [
  "one.jpg",
  "two.jpg",
  "three.jpg",
  "four.jpg",
  "five.jpg"
  ];


  //darkmode
  React.useEffect(()=>{
  if(theme==='dark'){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }
},[theme])
   //toggle light and dark mode

   const toogle=()=>{
    settheme(theme==="light"?"dark":"light");
   }
  

    //navigate
    const navigate=useNavigate();


  return (
  
    <div className=" dark:border-gray-700  p-6 bg-white dark:bg-gray-900 transition-colors duration-300 md:h-screen md:w-auto h-auto" >
       <div className="flex items-center justify-between gap-4 mb-6">
  <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
   <button onClick={()=>navigate('/')}> Images Gallery</button>
  </h1>
  
  <button 
    onClick={toogle} 
    className="text-2xl"
    title="Toggle Theme"
  >
    {theme === "light" ? "🌑" : "☀️"}
  </button>
  
</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((src, index) => (
          <div
            className="m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
            key={index}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>

  );
}

export default Photo;