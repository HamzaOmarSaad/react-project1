import React from 'react'

function About() {
    return (
        <>
        <div className="home text-white d-flex justify-content-center flex-column">
            <h1 className='text-center'>ABOUT COMPONENT</h1>
            <div className="icon text-center d-flex  justify-content-center">
                <div className="line mt-1 mx-3 bg-white "></div>
                <i class="fa-solid fa-star"></i>
                <div className="line mt-1 mx-3 bg-white"></div>
            </div>
            <div className="items d-flex justify-content-center w-75 mx-auto gap-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione aliquid obcaecati accusamus! Dolor nisi sunt amet ipsam error, quae, libero doloribus odit eveniet, tempora consequuntur natus minus dolorum beatae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione aliquid obcaecati accusamus! Dolor nisi sunt amet ipsam error, quae, libero doloribus odit eveniet, tempora consequuntur natus minus dolorum beatae?</p>
            </div>
        </div>
        </>
    )
}

export default About
