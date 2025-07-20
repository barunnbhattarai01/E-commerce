import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Userside/product.jsx'
import Login from './Authentication/login.jsx'
import Cart from './Userside/chart.jsx' 

import {
  createBrowserRouter,  RouterProvider,createRoutesFromElements,Route}  from "react-router-dom"

import Navbar from './Userside/navbar.jsx'
import Intro from './Userside/intro.jsx'
import Services from './Adminside/service.jsx'
import Signup from './Authentication/sigup.jsx'
import Getdata from './Userside/getproduct.jsx'
import Adminlogin from './Authentication/adminlogin.jsx'
import Ai from './Userside//AI.jsx'
import Photo from './landingpage/images.jsx'
import Feedback from './landingpage/Feedback.jsx'
import Usercontextprovider from './context/usercontextprovider.jsx'
import MainLanding from './landingpage/mainlanding.jsx'

const router=createBrowserRouter(

   createRoutesFromElements(
      <>
      <Route path='/' element={<MainLanding/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/img' element={<Photo/>}/>
      <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/admin' element={<Adminlogin/>}/>
            <Route path='/service' element={<Services/>}/>
             
  <Route path='/' element={<App/>}>
  <Route path='/home' element={<Intro/>}/>
   <Route path='/items' element ={<Getdata/>}/>
   <Route path='/products' element={<Product/>}/>
   <Route path='/ai' element={<Ai/>}/>
   <Route path='/chart' element={<Cart/>}/>
   </Route>

</>
   )


)

   

   
createRoot(document.getElementById('root')).render(
  <StrictMode>
         <Usercontextprovider>
    <RouterProvider router={router}/> 
    </Usercontextprovider>
  </StrictMode>,
)
