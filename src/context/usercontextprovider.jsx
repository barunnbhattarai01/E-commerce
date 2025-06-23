import React, { useState } from "react";
import Usercontext from "./usercontext";



function Usercontextprovider({children}){
 
  const[user,setuser]=useState(null);

    return(
<>
<Usercontext.Provider value={{user,setuser}}>

    {children}
</Usercontext.Provider>

</>
    )
}

export default Usercontextprovider;