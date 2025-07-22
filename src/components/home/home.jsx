import React from 'react'
import avatar from '../../assets/avataaars.svg'
function Home() {
    return (
       <>
       <div className="hero d-flex justify-content-center align-items-center text-white  ">
        <div className="content">
            <img src={avatar} alt="this is an avatar"/>
           <h1 className='fs-1'> Start Framework</h1>
            <div className="icon text-center d-flex  justify-content-evenly">
                <div className="line mt-1 bg-white"></div>
                <i class="fa-solid fa-star"></i>
                <div className="line mt-1 bg-white"></div>
            </div>
           <p>Graphic Artist - Web Designer - Illustrator</p>

        </div>
       </div>
       </>
    )
}

export default Home
