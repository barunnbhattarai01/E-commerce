import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetochart } from "../store/tosilces"; 

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card); 

  return (
    <div className="p-6 dark:text-white">
      <h2 className="text-2xl font-bold mb-6"> Products in Cart</h2>

      {items.length===0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col md:flex-row gap-4"
            >
              <img
                src={item?.text?.image || ""}        //||"" is fallback error and ?(optional chaining operator ) safely access in object coz sometime something can be null in object
                alt={item?.text?.product || "No product"}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {item?.text?.title || "Unknown Product"}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item?.text?.description || "No description"}
                </p>
                <button
                  className="mt-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => dispatch(removetochart(item.id))}
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
