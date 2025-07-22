import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}

export default Layout
