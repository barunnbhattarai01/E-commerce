import shoes from '/shoes.jpg'
import React, { useEffect } from 'react'


function Intro(){



return(

<>
<div className='mt-2 bg-gray-100 py-6 bg-cover bg-center h-[800px] dark:bg-black ' style={{backgroundImage:"url('/shoes.jpg')"}}>

    <div className='mx-auto mt-7 ml-10 '>
    <p className='font-bold text-4xl  dark:text-blue-200'>Get up to 30% off on New Arrivals</p>
    <button className='mt-4 border border-b-black rounded-2xl p-4 cursor-pointer hover:bg-amber-300 font-bold'  >SHOP NOW</button>

    </div>





</div>

</>

)


}



export default Intro