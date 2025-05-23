import React from "react"


function Services(){

const[product,setProduct]=React.useState([]);
const[activeindex,setactiveIndex]=React.useState(null); //it is used to open the div and close the div of name address and phone number
const[close,setCLose]=React.useState("");






function afterapply(index){
    setactiveIndex(index)// active index is produced when we clicked the button

}



React.useEffect(()=>
{
    fetch('https://fakestoreapi.com/products')

    .then(res=>res.json())
    .then(data=>{setProduct(data),
        setsearch(data)
    console.log(data)
    })
    .catch(err=>console.error("error",err))
},[])


//search






return(

<>

<div className="flex flex-wrap gap-20 justify-center p-20">
 {product && product.map((product,index)=>(
 <div className=" overflow-x-hidden relative text-black bg-white p-6 rounded-xl shadow-lg border border-gray-200  w-[600px]  mt-7 dark:bg-black dark:text-white overflow-y-hidden max-h-500" key={product.id}>
    <img src={product.image} className="h-36"/>
    <div className="mx-auto ">
    <p className=" font-bold text-3xl">{product.title}</p>
    <p className="text-2xl">PRICE:${product.price}</p>
    <p className="text-2xl">{product.description}</p>
     <button className=" border border-amber-200 p-3 rounded-2xl hover:bg-amber-200" onClick={()=>afterapply(index)} >BUY</button>

 
 {activeindex===index &&  (
<>
<div className="flex items-center justify-center w-full absolute top-40 left-0 px-5">
<div className="  bg-rose-300 p-10 overflow-x-hidden shadow-2xl rounded-2xl shadow-blue-200 left-0 w-150 h-60 overflow-y-auto">
 <button className="ml-96 border border-amber-200 cursor-pointer" onClick={()=>setactiveIndex(null)}>❌</button>
<div className=" flex flex-col justify-center items-center  ">
<label className="font-bold text-[20px]">Name</label>
    <input type="text" className="border border-black rounded-2xl mt-1 p-2" placeholder="eg Barun Bhattarai"/>
<label className="font-bold text-[20px]">Address</label>
    <input type="text" className="border border-black rounded-2xl mt-1 p-2"/>
<label className="font-bold text-[20px]">phone no</label>
<input type="number" className="border border-black rounded-2xl mt-1 p-2"/>
<button className="border border-black rounded-2xl w-16 mx-auto mt-2 hover:bg-blue-300 p-2 ">Buy</button>
</div>
</div>

</div>
 </>
 )}

</div>
 </div>

))


}

</div>




</>


)


}



export default Services


//what i learn in this
//active index is index which produced when we click the buttton 
//index is index that was provided by map for product and it is unique
//i learn to open form by conditional rendering and uisng active index and index in it
//i learn to close the form by making setactiveindex null to close the form
//to fetch the api 