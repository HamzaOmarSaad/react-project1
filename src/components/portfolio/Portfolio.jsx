import React, { useState } from 'react'
import img1 from'../../assets/poert1.png'
import img2 from'../../assets/port2.png'
import img3 from'../../assets/port3.png'
// import { useRef } from 'react'
function Portfolio() {
    // const elementRef = useRef(null)
    const [imageSrc, setImageSrc] = useState();
    const [dis ,setDis]=useState("d-none")

    function previewImg(img){
        console.log("🚀 ~ previewImg ~ img:", img)
        // elementRef.current.classList.remove("d-none");
        setImageSrc(img)
        setDis("d-block")
        
    }
     function homeBack (){
        // elementRef.current.classList.add("d-none");
        setDis("d-none")


     }

    return (
       <div className=' position-relative'>
            <div className="portfolio">
                <h1 className='text-center py-3'>portfolio COMPONENT</h1>
                <div className="icon text-center d-flex  justify-content-center">
                    <div className="line mt-1 mx-3 bg-black "></div>
                    <i class="fa-solid fa-star"></i>
                    <div className="line mt-1 mx-3 bg-black">
                    </div>
                </div>
                <div className=" container content py-5">
                    <div className="row row-cols-3 g-5">
                        <div className="col ">
                            <div className='img-item position-relative '  onClick={()=>{previewImg(img1)}}>
                                <img src={img1} alt="" className='w-100 rounded-3' />
                                <div className="background position-absolute rounded-3 ">
                                    <div className='d-flex justify-content-center align-items-center w-100 h-100 '>
                                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                      
                        <div className="col ">
                            <div className='img-item position-relative ' onClick={()=>{previewImg(img2)}}>
                                <img src={img2} alt="" className='w-100 rounded-3' />
                                <div className="background position-absolute rounded-3 ">
                                    <div className='d-flex justify-content-center align-items-center w-100 h-100 '>
                                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                     
                        <div className="col ">
                            <div className='img-item position-relative ' onClick={()=>{previewImg(img3)}}>
                                <img src={img3} alt="" className='w-100 rounded-3' />
                                <div className="background position-absolute rounded-3 ">
                                    <div className='d-flex justify-content-center align-items-center w-100 h-100 '>
                                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                      
                        <div className="col ">
                            <div className='img-item position-relative ' onClick={()=>{previewImg(img1)}}>
                                <img src={img1} alt="" className='w-100 rounded-3' />
                                <div className="background position-absolute rounded-3 ">
                                    <div className='d-flex justify-content-center align-items-center w-100 h-100 '>
                                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                      
                        <div className="col ">
                            <div className='img-item position-relative ' onClick={()=>{previewImg(img2)}}>
                                <img src={img2} alt="" className='w-100 rounded-3' />
                                <div className="background position-absolute rounded-3 ">
                                    <div className='d-flex justify-content-center align-items-center w-100 h-100 '>
                                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                      
                        <div className="col ">
                            <div className='img-item position-relative ' onClick={()=>{previewImg(img3)}}>
                                <img src={img3} alt="" className='w-100 rounded-3' />
                                <div className="background position-absolute rounded-3 ">
                                    <div className='d-flex justify-content-center align-items-center w-100 h-100 '>
                                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                    


                    </div>

                </div>
            </div>
            {/* ref={elementRef} */}
            <div className= {dis} >
                <div className='d-flex  position-absolute  justify-content-center  start-50  top-50  translate-middle z-2'>
                    <img src={imageSrc} alt=" img that we render"  className='w-100'/>
                </div>
                <div className="background   position-absolute  bg-primary bg-opacity-25  bottom-0 start-0 end-0  top-0" onClick={homeBack}></div>
            </div>
       </div>
    )
}

export default Portfolio
