import React from "react"
import { db } from "../../firebase.config";
import { collection,addDoc,serverTimestamp } from "firebase/firestore";
import Product from "../Userside/product";
import {useState} from "react";
import { data, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { X,Menu } from "lucide-react";
function Services(){




//search

const[name,setname]=React.useState("");
const[quantity,setquantity]=React.useState('');
const[img,setimg]=React.useState('');
const[loading,setloading]=useState(false);
const[datas,setdatas]=useState([]);
const[theme,settheme]=useState(()=>{
  return localStorage.getItem("theme")
})
const[open,setopen]=useState(false)




//uploading images

const handleimages=  async (e)=>{
e.preventDefault();
const file=e.target.files[0]; // we going to upload one images at a time

console.log(file);

if(!file) return;

setloading(true)

const data = new FormData(); //required to send  files via post request and also construcer function
data.append("file",file); //file key is fixed for cloudinary
data.append("upload_preset","Black Devil");//upload preset
data.append("cloud_name","dsql24lj1");

// fetching the images from cloudinary just we upload from services


 const res= await fetch("https://api.cloudinary.com/v1_1/dsql24lj1/image/upload",{
    method:"POST" ,
    body:data ,
  }
  )
  const imagesurl = await res.json();    //res.json convert server response into usable plain object
//  console.log(imagesurl.url)
  setimg(imagesurl.url)
setloading(false)





}

const takeit =async (e)=>{
e.preventDefault();
const data={
    Name:name,
    description:quantity,
    image:img,
    createdAt:serverTimestamp()
}
  if (!img) return alert("No image selected!");


try{
 await addDoc(collection(db,'detail'),data);
 alert("product added to items")
setdatas((prev)=>{
const newdata=[
  ...prev,
  {
    name:name,
    quantity:quantity,          // we have save in array to later map all
    images:img,
  }
]
localStorage.setItem("data",JSON.stringify(newdata));    //we have to save all in local storage by convertting it into json
return newdata;         //it return the new array
}
)
console.log(datas)
setname("");
setquantity("");
setimg("")


}
catch(err){
 console.error("error happen",err)
}

}



//mount data from local storage for dashboard
React.useEffect(()=>{
const saveddata=localStorage.getItem('data');
if(saveddata){
  setdatas(JSON.parse(saveddata))
}


},
[]
)



//dark mode
 React.useEffect(()=>
  {
  if (theme==="dark"){
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor="black"
  }
  else{
    document.documentElement.classList.remove("dark");
    document.body.style.backgroundColor="white"
  }

  localStorage.setItem("theme",theme)


  },[theme] ) 


  //toggle button
  const togglebutton=()=>{
    settheme(theme==="light"?"dark":"light")
  }
 //for logout
 const navigate=useNavigate();

 //toggle X and MEnu
 const toggleXandMenu=()=>{
  setopen(prev=>!prev)
 }


return(

<>

 
  <div className="h-screen w-auto bg-gradient-to-r from-blue-100 to-red-200 dark:bg-gradient-to-r dark:from-black dark:to-black">
    <div>
      <div className="flex items-center justify-between px-6 p-4">
        <h1 className="font-bold md:text-3xl text-2xl dark:text-white">
          Welcome Back, Admin
        </h1>

        <button onClick={toggleXandMenu} className="flex justify-end dark:text-white">
          {open ? <X size={33} /> : <Menu size={33} />}
        </button>
      </div>

   {open && (
  <div className="flex flex-col items-start w-full px-2 py-2 gap-3 dark:text-white z-10 text-base  absolute bg-amber-300 ">
    <Link
      to="/items"
      className="text-[20px] hover:bg-blue-200  rounded cursor-pointer"
    >
      User Section
    </Link>
    <button
    onClick={() => navigate("/login")}
    className="text-[20px] hover:bg-blue-200   cursor-pointer"
  >
    Log out
  </button>
    <button onClick={togglebutton} className="text-[20px] cursor-pointer">
      {theme === 'light' ? 'Darkmode' : 'Lightmode'}
    </button>
  </div>
)}

    </div>
  


<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white  to-gray-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 px-4">
  <form onSubmit={takeit} className="w-full max-w-md bg-white dark:bg-gray-950 rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 transition-all">
    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sell your Product</h2>

    {/* Product Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="e.g.Mobile Phone"
        className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    {/* Description */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
      <textarea
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        placeholder="Write about the product like price..."
        className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        rows={4}
      />
    </div>

    {/* Upload Status */}
    <div>
      <span className="text-sm italic text-gray-500 dark:text-gray-400">
        {loading ? "Uploading..." : "Images ready"}
      </span>
    </div>

    {/* Image Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Image</label>
      <input
        type="file"
        onChange={handleimages}
        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
      >
        Sell Now 🚀
      </button>
    </div>
  </form>
</div>
</div>




{/*Dashboard */}
<div className="min-h-screen w-auto bg-gradient-to-r from-white to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 p-6">
  <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
    Dashboard
  </h2>

  <div className="flex flex-wrap justify-center gap-8">
    {datas.map((item, index) => (
      <div
        key={item.id || index}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row gap-6 p-6 cursor-pointer group max-w-md w-full"
      >
        <img
          src={item?.images || ""}
          alt={item?.name || "No product"}
          className="w-full md:w-40 h-40 md:h-40 object-cover rounded-xl shadow-md group-hover:scale-105 transform transition-transform duration-300 flex-shrink-0"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {item?.name || "Unknown Product"}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item?.quantity || "No description available"}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>




</>



);


}



export default Services

