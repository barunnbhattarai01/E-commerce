import React, { useState } from "react";
import Usercontext from "./usercontext";



function Usercontextprovider({children}){
 
  const[user,setuser]=useState(null);
  const [cartItems, setCartItems] = useState([]);

  

  

    return(
<>
<Usercontext.Provider value={{user,setuser,cartItems,setCartItems}}>

    {children}
</Usercontext.Provider>

</>
    )
}

export default Usercontextprovider;