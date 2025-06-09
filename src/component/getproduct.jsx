import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase.config";
import React, { useState, useEffect } from "react";


function Getdata() {

  const [geted, setgeted] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const q = query(collection(db, "detail"), orderBy("createdAt", "desc"));
      const document = await getDocs(q);

      const eventlist = document.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setgeted(eventlist);
    };

    fetchdata();
  }, []);

  return (
    <>
     <h1 className="font-bold text-3xl mt-3">The product that is in sell by user </h1>
    <div className="flex flex-wrap gap-20 ml-9">
      {geted.map((items, index) => (
        <div
          className="overflow-x-hidden relative text-black bg-white p-6 rounded-xl shadow-lg border border-gray-200  w-[600px]  mt-7 dark:bg-black dark:text-white overflow-y-hidden max-h-500"
          key={items.id || index}
        >
          <div className="mx-auto ">
            <img
              src={items.image}
              alt={`img-${index}`}
              className="w-64 h-64 object-cover rounded-lg"
            />
            <p className=" font-bold text-3xl">{items.Name}</p>
            <p className="text-2xl">{items.description}</p>

            <button
              type="button"
              className="border border-black rounded-2xl h-10 w-20 mx-auto mt-3 hover:bg-blue-200"
              
            >
              BUY
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Getdata;
