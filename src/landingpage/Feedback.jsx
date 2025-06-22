import { useState } from "react";
import { Star } from "lucide-react";
import { db } from "../../firebase.config";
import { addDoc,collection} from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";


function Feedback(){
const[about,setabout]=useState("");
const[rating,setrating]=useState(0);


const navigate=useNavigate();


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
<div className="min-h-screen w-full bg-amber-50 px-4 py-8">
 
  <h1 onClick={()=>navigate('/')} className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-8">
    Feedback Section
  </h1>

 
  <div className="flex justify-center items-center">
    <form
      className="border border-black p-6 sm:p-8 md:p-10 rounded-2xl bg-white shadow-xl w-full max-w-md"
      onSubmit={submit}
    >
     
      <div className="mb-6 text-xl sm:text-2xl font-bold text-center">
        <h1>Please, Give your Feedback</h1>
      </div>

   
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}          /*star is id of star like 1,2,3,4,5 */
            type="button"
            onClick={() => setrating(star)}
            className="text-yellow-500"
          >
            <Star
              fill={star <= rating ? "#facc15" : "none"}  /*star is current star position and rating is user given star  */
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
          className="ring-1 rounded-2xl focus:ring-blue-700 w-full h-40 p-3 text-base sm:text-lg"
          placeholder="Write your feedback here..."
        />
      </div>

      
      <div className="flex justify-center">
        <button
          className="rounded-2xl shadow-xl px-6 py-2 bg-amber-200 hover:bg-amber-300 transition-all text-base font-semibold"
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


