import React, { useState } from "react";
import Usercontext from "./usercontext";



function Usercontextprovider({children}){
 
  const[user,setuser]=useState(null);
  const [cartItems, setCartItems] = useState([]);

  //localally storingg the cart items
  localStorage.setItem("items",JSON.stringify(cartItems));

    return(
<>
<Usercontext.Provider value={{user,setuser,cartItems,setCartItems}}>

    {children}
</Usercontext.Provider>

</>
    )
}

export default Usercontextprovider;