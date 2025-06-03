import React from "react"
import { db } from "../../firebase.config";
import { collection,addDoc,serverTimestamp } from "firebase/firestore";
import Product from "./product";
import {useState} from "react";


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
const[submited,setsumbited]=React.useState('');
const[img,setimg]=React.useState('');
const[loading,setloading]=useState(false);



const takeit =async (e)=>{
e.preventDefault();
const data={
    Name:name,
    description:quantity,
    createdAt:serverTimestamp()
}

try{
 await addDoc(collection(db,'detail'),data);
 setsumbited(data)
setname("");
setquantity("");


}
catch(err){
 console.error("error happen",err)
}




}

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



  //  get previous items from localStorage
  const existingData = JSON.parse(localStorage.getItem("uploadedImages") || "[]");
  //to receive the data from local storage we should use.parse
  //   add new image URL
  const updatedData = [...existingData, { imageUrl: imagesurl.url, uploadedAt: new Date().toISOString() }];

  // save back to localStorage
  localStorage.setItem("uploadedImages", JSON.stringify(updatedData));
    //to save objects or arrays in local storge, convert them to a string first using JSON.stringify()


  setsumbited(imagesurl.url)
setloading(false)





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

<div className=" flex justify-center content-center ">
 <form onSubmit={takeit} className="">
 <div className="flex flex-col justify-center mt-[250px] gap-3 w-96 h-auto border border-black  p-5 rounded-2xl bg-white">
    <label className="text-2xl text-black">product Name:
        </label>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}
     className="border border-black rounded-2xl ml-1 h-10"
    />
      <label className="text-2xl text-black mt-4">Description:
        </label>
        <input type="text" value={quantity} onChange={(e)=>setquantity(e.target.value)}
      className="border border-black rounded-2xl ml-3 h-24 text-black text-[30px]"/>

         <label>{loading? "uploading":"loaded"}</label>
          <label className="">Images:<input type="file" className="border border-black rounded-2xl p-3" onChange={handleimages} /></label>


      <button type="submit" className="border border-black rounded-2xl h-10 w-20 mx-auto mt-3 hover:bg-blue-200" onClick={()=>alert("product is added to items for sell")}> Sell</button>
    
 </div>



 </form>







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