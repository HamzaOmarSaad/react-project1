import React from 'react'
import { Link } from 'react-router' 

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-white" style={{backgroundColor:"#2c3e50"}}>
            <div className="container-fluid justify-content-evenly">
                <Link className="navbar-brand d-flex align-items-center text-white fs-1 " to="/">
                    StartFramework
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3 " >
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
