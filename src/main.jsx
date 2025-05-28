import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './component/product.jsx'
import Login from './component/login.jsx'

import {
  createBrowserRouter,  RouterProvider}  from "react-router-dom"

import Navbar from './component/navbar.jsx';
import Intro from './component/intro.jsx'
import Services from './component/service.jsx'
import Signup from './component/sigup.jsx'
import Getdata from './component/getproduct.jsx'
import Adminlogin from './component/adminlogin.jsx'
import Ai from './component/ai.jsx'
   const router =createBrowserRouter(
    [
      {
path:"/",
element:<><Login/></>

   },
   {
path:"/home",
element:<><Navbar/><Intro/></>

   },

   {
   path:"/items",
element:<><Navbar/><Getdata/></>

   },
   {
   path:"/signup",
element:<><Signup/></>

   },

   {
   path:"/admin",
element:<><Adminlogin/></>

   },
    {
   path:"/service",
element:<><Services/></>

   },
    {
   path:"/products",
element:<><Navbar/><Product/></>

   },
   {
   path:"/ai",
element:<><Navbar/><Ai/></>

   },







    ]
   )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
