import React,{useState,useEffect} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";




function Ai(){

     const[prompt,setprompt]=useState("");
     const[response,setresponse]=useState("");
     const[error,seterror]=useState("");

  const apiKEy=import.meta.env.VITE_GEMINI_AI_API_KEY;

  const generatecontent=async()=>
  {
   if(!prompt.trim()){
seterror("plese enter the prompt");

   }
   seterror('')

  try{
      const Genai=new GoogleGenerativeAI(apiKEy);
      const model =Genai.getGenerativeModel({model: "gemini-1.5-flash"})
      const result=await model.generateContent(prompt);
   
      const textresponse = result.response.text();
    setresponse(textresponse);

  }

  catch(err){

     console.log("error",err)
  }




  }




return(

<>

<div className="flex flex-col gap-3 items-center  mx-auto mt-9 dark:text-white w-96 shadow-lg h-56">
<label className="text-2xl text-black dark:text-white">Enter the prompt</label>
<input 
className="border border-black focus:ring-2 focus:ring-blue-200 w-52 rounded-2xl h-20  bg-white text-black"
value={prompt}
onChange={(e)=>setprompt(e.target.value)}
/>
<button onClick={generatecontent} className=" cursor-pointer shadow-lg rounded-2xl p-1.5 hover:bg-blue-100">Send</button>
</div>

{error && <p>{error}</p>}

{response && (
 <div className="dark:text-white text-2xl">

 <ReactMarkdown>{response}</ReactMarkdown>


 </div>





)}


</>



)


}

export default Ai;