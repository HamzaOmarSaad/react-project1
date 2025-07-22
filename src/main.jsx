import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contacts/Contact'
import Layout from './components/layout/Layout'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'./index.css'
import'../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const routing= createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}

  ] }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routing}></RouterProvider>
  </StrictMode>,
)
