import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { addtochart } from "./Store/tosilces";
import { motion } from "framer-motion";

function Product(){
    const[search,setsearch]=React.useState([]);
    const[query,setquery]=React.useState("");
    const dispatch=useDispatch();
    
    useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
    
        .then(res=>res.json())
        .then(data=>{setsearch(data)
        })
        .catch(err=>console.error("error",err))
    },[])

    //filterd the product

    const filteredproduct =search.filter(product=>
        product.title.toLowerCase().includes(query.toLowerCase())
    )

return(
<>

  <label className="text-white text-2xl flex flex-col sm:flex-row items-center gap-4 bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
    Search for items
    <input
      type="text"
      className="text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white w-full sm:w-64"
      value={query}
      onChange={(e) => setquery(e.target.value)}
    />
  </label>

  <div className="flex flex-wrap gap-10 justify-center p-10 dark:text-white">
    {filteredproduct.length === 0 ? (
      <p className="text-xl font-semibold text-gray-500 dark:text-gray-400 mt-10">
        No product found
      </p>
    ) : (
      filteredproduct.map((pro, index) => (
        <motion.div
        initial={{scale:0.9,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{delay:0.4}}
          key={index}
          className="relative text-black bg-white dark:bg-gray-900 dark:text-white p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-80 md:w-96 hover:shadow-2xl transition"
        >
          <img
            src={pro.image}
            alt={`product-${index}`}
            className="h-48 w-full object-cover rounded-lg mb-4"
          />

          <div>
            <p className="font-bold text-2xl truncate">{pro.title}</p>
            <p className="text-lg font-semibold mt-1">Price: ${pro.price}</p>
            <p className="text-sm mt-2 line-clamp-3">{pro.description}</p>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="border border-black dark:border-white rounded-xl px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-800 transition"
              onClick={() => dispatch(addtochart(pro))}
            >
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))
    )}
  </div>
</>

)


}

export default Product;

//in this section i learned to filter the array and then mapping all them 