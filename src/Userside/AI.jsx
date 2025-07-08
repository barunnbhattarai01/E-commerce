import React,{useState} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";




function Ai(){

     const[prompt,setprompt]=useState("");
     const[response,setresponse]=useState("");
     const[error,seterror]=useState("");
     const[active,setactive]=useState(null);

     const faq=[{
      question:"What is sasto pasal?",
      answer:"Sasto pasal is platform where you can get affordable price for clothes,gadet",
     },
     {
         question:"What is sasto pasal?",
      answer:"Sasto pasal is platform where you can get affordable price for clothes,gadet",
     }  

]


      //toggle index
      function toggleindex(index){
        setactive(index);
      }


  const apiKEy=import.meta.env.VITE_GEMINI_AI_API_KEY;

  const generatecontent=async()=>
  {
   if(!prompt.trim()){
seterror("plese enter the prompt");

   }
   seterror('')

  try{
    const role =`you are sasto pasal, ai assistant for sasto pasal , a affordable ,non toxic shop where you can buy luxires product`
      const Genai=new GoogleGenerativeAI(apiKEy);
      const model =Genai.getGenerativeModel({model: "gemini-1.5-flash"})
      const result=await model.generateContent(`${role} ${prompt}`);
      setprompt("")
   
      const textresponse = result.response.text();
    setresponse(textresponse);

  }

  catch(err){

     console.log("error",err)
  }



  }

return(

<>
<div className="h-screen w-auto bg-gradient-to-r from-violet-50 to-sky-50 py-10 dark:bg-gradient-to-r dark:from-black dark:to-black">
  <div className="flex flex-col gap-4 items-center mx-auto  dark:text-white w-80 md:w-96 shadow-lg rounded-2xl p-6 bg-white dark:bg-gray-900">
  <label className="text-2xl font-semibold text-black dark:text-white">
    Ask about sasto pasal
  </label>

  <input 
    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 w-full rounded-2xl h-12 px-4 bg-white text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    value={prompt}
    onChange={(e) => setprompt(e.target.value)}
    placeholder="Type your prompt..."
  />

  <button 
    onClick={generatecontent} 
    className="w-full shadow-md rounded-2xl py-2 text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
  >
    Send
  </button>


  <div className="w-full max-w-md mx-auto mt-6 space-y-4">
  {faq.map((item, index) => (
    <div
      key={index}
      className="border border-gray-300 rounded-xl p-4 bg-white dark:bg-gray-900 dark:border-gray-600 shadow"
    >
      <div
        onClick={() => toggleindex(index)}
        className="cursor-pointer font-semibold text-black dark:text-white"
      >
        {item.question}
      </div>
      {active === index && (
        <div className="mt-2 text-gray-700 dark:text-gray-300">
          {item.answer}
        </div>
      )}
    </div>
  ))}
</div>

</div>

{error && (
  <p className="text-red-600 bg-red-100 border border-red-300 rounded-lg p-3 w-full max-w-md mx-auto mt-4 shadow">
    {error}
  </p>
)}

{response && (
  <div className="dark:text-white text-black text-lg md:text-2xl shadow-lg rounded-lg p-4 bg-white dark:bg-gray-900 w-full max-w-md mx-auto mt-4">
    <ReactMarkdown>{response}</ReactMarkdown>
  </div>
)}
</div>




</>
)
}

export default Ai;