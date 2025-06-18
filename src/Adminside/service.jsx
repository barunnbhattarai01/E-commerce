import React from "react"
import { db } from "../../firebase.config";
import { collection,addDoc,serverTimestamp } from "firebase/firestore";
import Product from "../Userside/product";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { X,Menu } from "lucide-react";
function Services(){

/*const[product,setProduct]=React.useState([]);
const[activeindex,setactiveIndex]=React.useState(null); //it is used to open the div and close the div of name address and phone number
const[close,setCLose]=React.useState("");






function afterapply(index){
    setactiveIndex(index)// active index is produced when we clicked the button

}



React.useEffect(()=>
{
    fetch('https://fakestoreapi.com/products')

    .then(res=>res.json())
    .then(data=>{setProduct(data),
        setsearch(data)
    console.log(data)
    })
    .catch(err=>console.error("error",err))
},[])


//search

*/
const[name,setname]=React.useState("");
const[quantity,setquantity]=React.useState('');
const[img,setimg]=React.useState('');
const[loading,setloading]=useState(false);
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
  const imagesurl = await res.json();
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

setname("");
setquantity("");
setimg("")


}
catch(err){
 console.error("error happen",err)
}




}

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
{/*
<div className="flex flex-wrap gap-20 justify-center p-20">
 {product && product.map((product,index)=>(
 <div className=" overflow-x-hidden relative text-black bg-white p-6 rounded-xl shadow-lg border border-gray-200  w-[600px]  mt-7 dark:bg-black dark:text-white overflow-y-hidden max-h-500" key={product.id}>
    <img src={product.image} className="h-36"/>
    <div className="mx-auto ">
    <p className=" font-bold text-3xl">{product.title}</p>
    <p className="text-2xl">PRICE:${product.price}</p>
    <p className="text-2xl">{product.description}</p>
     <button className=" border border-amber-200 p-3 rounded-2xl hover:bg-amber-200" onClick={()=>afterapply(index)} >BUY</button>

 
 {activeindex===index &&  (
<>
<div className="flex items-center justify-center w-full absolute top-40 left-0 px-5">
<div className="  bg-rose-300 p-10 overflow-x-hidden shadow-2xl rounded-2xl shadow-blue-200 left-0 w-150 h-60 overflow-y-auto">
 <button className="ml-96 border border-amber-200 cursor-pointer" onClick={()=>setactiveIndex(null)}>❌</button>
<div className=" flex flex-col justify-center items-center  ">
<label className="font-bold text-[20px]">Name</label>
    <input type="text" className="border border-black rounded-2xl mt-1 p-2" placeholder="eg Barun Bhattarai"/>
<label className="font-bold text-[20px]">Address</label>
    <input type="text" className="border border-black rounded-2xl mt-1 p-2"/>
<label className="font-bold text-[20px]">phone no</label>
<input type="number" className="border border-black rounded-2xl mt-1 p-2"/>
<button className="border border-black rounded-2xl w-16 mx-auto mt-2 hover:bg-blue-300 p-2 ">Buy</button>
</div>
</div>

</div>
 </>
 )}

</div>
 </div>

))


}

</div>
*/}
 
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
  <div className="flex flex-col items-end dark:text-white ">
    <Link
      to="/items"
      className="text-[20px] hover:bg-blue-200 p-2 rounded cursor-pointer"
    >
      User Section
    </Link>
    <button
    onClick={() => navigate("/login")}
    className="text-[20px] hover:bg-blue-200  px-6 cursor-pointer"
  >
    Log out
  </button>
    <button onClick={togglebutton} className="text-[20px] px-6 cursor-pointer">
      {theme === 'light' ? '🌑' : '☀️'}
    </button>
  </div>
)}

    </div>
  



<div className="flex justify-center ">
  <form onSubmit={takeit}>
    <div className="w-80 md:w-96 p-6 md:mt-[60px]  mt-24 border border-black dark:border-white rounded-3xl bg-white dark:bg-gray-900 shadow-lg flex flex-col gap-5">
      
      <label className="text-lg font-semibold text-black dark:text-white">Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-xl h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
      />

      <label className="text-lg font-semibold text-black dark:text-white">Description</label>
      <textarea
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-xl h-24 px-3 py-2 text-black dark:text-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <label className="text-sm text-gray-500 dark:text-gray-400">
        {loading ? "Uploading..." : "Loaded"}
      </label>

      <label className="text-lg font-semibold text-black dark:text-white">
        Images
        <input
          type="file"
          className="border border-gray-300 dark:border-gray-600 rounded-xl p-2 mt-2 w-full focus:outline-none"
          onChange={handleimages}
        />
      </label>

      <button
        type="submit"
        className="border border-black dark:border-white dark:text-white rounded-xl h-10 w-24 mx-auto mt-4 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
      >
        Sell
      </button>
    </div>
  </form>
</div>


</div>
</>



);


}



export default Services


//what i learn in this
//active index is index which produced when we click the buttton 
//index is index that was provided by map for product and it is unique
//i learn to open form by conditional rendering and uisng active index and index in it
//i learn to close the form by making setactiveindex null to close the form
//to fetch the api 