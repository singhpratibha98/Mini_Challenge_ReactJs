import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import Front_Page from './components/Front_Page/Front_Page'
import {createBrowserRouter,RouterProvider ,Route} from "react-router-dom";

const router =createBrowserRouter([
  {
    path:"/",
    element:<Front_Page/>
  },
  {
    path:"/home",
    element:<Main/>
  }
])

 


function App() {
  
  return (
    <>
   
    <RouterProvider  router={router}/>
    
    </>
  )
}

export default App;
