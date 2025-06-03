import { getDocs,collection,query } from "firebase/firestore";
import { db } from "../../firebase.config";
import {React,useState,useEffect} from "react";
import { serverTimestamp,orderBy } from "firebase/firestore";



function Getdata({data}){

const[geted,setgeted]=useState([]);
const[img,setimg]=useState('');


useEffect(()=>{

  // const fetchdata=async()=>{

  //  const q=query(collection(db,'detail'),orderBy('createdAt','desc'));//first we arranged data in acending order
  //  const document = await getDocs(q);
   
  //  const eventlist=document.docs.map(doc=>({
  //   ...doc.data() //we get the existing data from database and ..doc.data() take data as object


  //    }));

  
   
    



  
// Fetch localStorage data
      const localData = JSON.parse(localStorage.getItem("uploadedImages") || "[]"); //json store only string so it store in json string so to covert back to string it used json.parse

      // Combine both arrays (Firebase data first, then localStorage)
      const combinedData = [{/*...eventlist*/} ,...localData];

      // Set combined data into state
      setgeted(combinedData);


 


 
// fetchdata(); //we have to call it to mount one time



},[])









return(
<>
<div className="flex flex-wrap gap-20 ml-9">
{geted.map((items,index)=>(

 <div className="overflow-x-hidden relative text-black bg-white p-6 rounded-xl shadow-lg border border-gray-200  w-[600px]  mt-7 dark:bg-black dark:text-white overflow-y-hidden max-h-500" key={index} >
   
 <div className="mx-auto ">
  <img src={items.imageUrl} alt={`img-${index}`} className="w-64 h-64 object-cover rounded-lg" />
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

