//import React from 'react'
import './indexC.css'
import './index.css'
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import AppT from './AppT'
import AppC from './AppC'
import Home from './Home'


// eslint-disable-next-line no-unused-vars
const router= createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },  
    {
    path:"/todo",
    element:<AppT/>,
    },

    {  path:"/candycrush",
       element:<AppC/>
    },
])

function Priormain(){
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Priormain
 