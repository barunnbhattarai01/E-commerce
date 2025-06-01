import { getDocs,collection,query } from "firebase/firestore";
import { db } from "../../firebase.config";
import {React,useState,useEffect} from "react";
import { serverTimestamp,orderBy } from "firebase/firestore";



function Getdata(){

const[geted,setgeted]=useState([]);
const[getimg,setgetimg]=useState('');


useEffect(()=>{

  const fetchdata=async()=>{

   const q=query(collection(db,'detail'),orderBy('createdAt','desc'));//first we arranged data in acending order
   const document = await getDocs(q);
   
   const eventlist=document.docs.map(doc=>({
    ...doc.data() //we get the existing data from database and ..doc.data() take data as object
   }));

   setgeted(eventlist);
   console.log(geted)

  


 


 }
fetchdata(); //we have to call it to mount one time



},[]);



// fetching the images from cloudinary just we upload from services


useEffect(
const fetchimages = async (e)=>
{
  await fetch("https://api.cloudinary.com/v1_1/dsql24lj1/image/upload",{
    method:"Post",
    body:data
  }
  )
 



},[]
)






return(
<>
<div className="flex flex-wrap gap-20 ml-9">
{geted.map((items,index)=>(
   
 <div className="overflow-x-hidden relative text-black bg-white p-6 rounded-xl shadow-lg border border-gray-200  w-[600px]  mt-7 dark:bg-black dark:text-white overflow-y-hidden max-h-500" key={index} >
   
 <div className="mx-auto ">
    <p className=" font-bold text-3xl">{items.Name}</p>
    <p className="text-2xl">{items.description}</p>
          <button type="submit" className="border border-black rounded-2xl h-10 w-20 mx-auto mt-3 hover:bg-blue-200">BUY</button>
    


    </div>
    </div>
    

))

}

</div>




</>

)




}
export default Getdata

