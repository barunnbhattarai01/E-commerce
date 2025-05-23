import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,  RouterProvider}  from "react-router-dom"

import Navbar from './component/navbar.jsx';
import Intro from './component/intro.jsx'
import Services from './component/service.jsx'

   const router =createBrowserRouter(
    [
   {
path:"/",
element:<><Navbar/><Intro/></>

   },
    {
path:"/services",
element:<><Services/></>

   },







    ]
   )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
