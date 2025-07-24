import React, { useContext, useEffect } from "react";
import Usercontext from "../context/usercontext";

function Cart() {

 const {cartItems,setCartItems}=useContext(Usercontext);

  //to remove the product
  function handleremove(removeCardId){
    const items =cartItems.filter((item)=>item.cardId !==removeCardId)
    setCartItems(items);
  }



    
  

  return (
    <div className="p-6 dark:text-white bg-teal-200 dark:bg-black min-h-screen mt-24 ">
      <h2 className="text-2xl font-bold mb-6"> Products in Cart</h2>

      {cartItems.length===0 ? (
        <p className="text-gray-500 font-bold">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item) => (
            
            <div
              key={item.cardId}
              className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col md:flex-row gap-4 scale-100 hover:scale-96"
            >
              <img
                src={item.image || ""}        //||"" is fallback error and ?(optional chaining operator ) safely access in object coz sometime something can be null in object
                alt={item.product || "No product"}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {item.title || "Unknown Product"}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description || "No description"}
                </p>
                <button
                  className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                  onClick={()=>{handleremove(item.cardId)}}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
