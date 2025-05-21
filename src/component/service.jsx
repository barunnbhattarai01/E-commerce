import React from "react"

function Services(){

const[product,setProduct]=React.useState([]);
const[buy,setbuy]=React.useState("");
const[activeindex,setactiveIndex]=React.useState(null)

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
     <button className="ml-96 border border-amber-200 p-3 rounded-2xl hover:bg-amber-200" onClick={()=>afterapply(index)}>BUY</button>

 
 {activeindex===index && (
<>
<div className="h-32 flex flex-col">
<span className="font-bold text-2xl">Name:<input type="text"/></span>
<span className="font-bold text-2xl">Address:<input type="text"/></span>
<span className="font-bold text-2xl">phone no:<input type="number"/></span>

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