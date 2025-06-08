import React,{useEffect} from "react";

function Product(){
    const[search,setsearch]=React.useState([]);
    const[query,setquery]=React.useState("");
    
    useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
    
        .then(res=>res.json())
        .then(data=>{setsearch(data),
        console.log(data)
        })
        .catch(err=>console.error("error",err))
    },[])

    //filterd the product

    const filteredproduct =search.filter(product=>
        product.title.toLowerCase().includes(query.toLowerCase())
    )

return(
<>
  <label className="text-white text-2xl flex items-center gap-4 bg-gray-800 px-4 py-2 rounded-lg shadow">
    Search for items
    <input
      type="text"
      className="text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white "
      value={query}
      onChange={(e) => setquery(e.target.value)}
    />
  </label>

<div className="flex flex-wrap gap-20 justify-center p-20">
{
  filteredproduct.map(
  (pro,index)=>(
    <>
 <div className="overflow-x-hidden relative text-black bg-white p-6 rounded-xl shadow-lg border border-gray-200  w-[600px]  mt-7 dark:bg-black dark:text-white overflow-y-hidden max-h-500" key={index}>
   <img src={pro.image} className="h-36"/>
  
 <div className="mx-auto ">
    <p className=" font-bold text-3xl">{pro.title}</p>
    <p className="text-2xl">PRICE:${pro.price}</p>
    <p className="text-2xl">{pro.description}</p>


    </div>
    </div>
    </>

  )
  

  )



}

</div>

</>

)


}

export default Product;

//in this section i learned to filter the array and then mapping all them 