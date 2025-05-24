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
<label>Search for items<input type="text" value={query} onChange={(e)=>setquery(e.target.value)} /></label>

<div className="">
{
  filteredproduct.map(
  (pro,index)=>(
 <div className="" key={index}>
   <img src={pro.image}/>
   <p>{pro.title}</p>
    </div>

  )
  

  )



}

</div>

</>

)


}

export default Product;