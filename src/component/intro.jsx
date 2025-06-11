import shoes from '/shoes.jpg'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Intro(){



return(

<>
{/*For the laptop view  */}
<div className='mt-2 bg-gray-100 py-6 bg-cover bg-center h-[800px]  ' style={{backgroundImage:"url('/shoes.jpg')"}}>

    <div className='hidden md:flex mx-auto mt-7 ml-10 '>
    <p className='font-bold text-4xl '>Get up to 30% off on New Arrivals</p>
    <Link to ="/ai" className='mt-16 mr-96 border border-b-black rounded-2xl p-4 cursor-pointer hover:bg-amber-300 font-bold'  >About us</Link>

    </div>
  

  {/* For mobile view*/}
  <div className='md:hidden flex flex-wrap mx-auto mt-7 ml-10 '>
    <p className='font-bold text-4xl  dark:text-blue-200'>Get up to 30% off on New Arrivals</p>
    <Link to ="/ai" className='mt-16 mr-96 border border-b-black rounded-2xl p-4 cursor-pointer hover:bg-amber-300 font-bold'  >About us</Link>

    </div>





</div>

</>

)


}



export default Intro