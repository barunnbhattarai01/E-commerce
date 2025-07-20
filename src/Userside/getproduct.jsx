import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import React, { useState, useEffect } from "react";


function Getdata() {

  const [geted, setgeted] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const q = query(collection(db, "detail"), orderBy("createdAt", "desc"));
      const document = await getDocs(q);

      const eventlist = document.docs.map((doc) => ({      //document is  Querysnapshot and  document.docs is an array of DocumentSnapshot
        id: doc.id,
        ...doc.data(),        //its give data in object
      }));
      setgeted(eventlist);
    };

    fetchdata();  //it mounted one time
  }, []);

  return (
    <>
    <div className="w-full bg-teal-200 min-h-screen dark:bg-black ">   {/* min-h-screen act as both h-screen and h-auto */}
   <h1 className="font-bold text-3xl  p-5 text-center  dark:text-white">
  The products currently on sale
</h1>

<div className="flex flex-wrap justify-center gap-10 mt-8 ">
  {geted.length===0 ? <p className="font-bold text-2xl dark:text-white">No product </p>: geted.map((items, index) => (
    <div
      key={items.id || index}
      className="relative text-black bg-white dark:bg-gray-900 dark:text-white p-5 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-80 md:w-96 hover:shadow-2xl transition"
    >
      <img
        src={items.image}
        alt={`img-${index}`}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />
      <p className="font-bold text-2xl mb-2 truncate">{items.Name}</p> {/*truncate help to force to stay text in one line */}
      <p className="text-lg mb-4 line-clamp-3">{items.description}</p>  {/* line-clamp-3 Limits text to 3 lines */}

      <button
        type="button"
        className="border border-black dark:border-white rounded-xl h-10 w-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
      >
        BUY
      </button>
    </div>
  ))}
</div>
</div>
    </>
  );
}

export default Getdata;
