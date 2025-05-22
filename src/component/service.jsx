import React from "react"

function Services(){

const[product,setProduct]=React.useState([]);
const[buy,setbuy]=React.useState();
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
        console.log(data)
    })
    .catch(err=>console.error("error",err))
},[])







return(

<>
 {product && product.map((product,index)=>(
 <div className=" flex  bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-[400px] mt-7" key={product.id}>
    <img src={product.image}/>
    <div className="mx-auto">
    <p className=" font-bold text-3xl">{product.title}</p>
    <p className="text-2xl">PRICE:${product.price}</p>
    <p className="text-2xl">{product.description}</p>
     <button className="ml-96 border border-amber-200 p-3 rounded-2xl hover:bg-amber-200" onClick={()=>afterapply(index)} >BUY</button>

 
 {activeindex===index &&  (
<>
 <button className="ml-96 border border-amber-200 cursor-pointer" onClick={()=>setactiveIndex(null)}>❌</button>
<div className="h-32 flex flex-col justify-center items-center ">
<span className="font-bold text-2xl">Name:<input type="text" className="border border-black rounded-2xl mt-1"/></span>
<span className="font-bold text-2xl">Address:<input type="text" className="border border-black rounded-2xl mt-1"/></span>
<span className="font-bold text-2xl">phone no:<input type="number" className="border border-black rounded-2xl mt-1"/></span>
<button className="border border-black rounded-2xl w-16 mx-auto mt-2 hover:bg-blue-300 ">Buy</button>
</div>




 </>
 )}

</div>
 </div>

))


}




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