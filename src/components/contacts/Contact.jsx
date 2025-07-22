import React from 'react'

function Contact() {
    return (
        <>
            <h1 className='text-center py-3'>contact section </h1>
            <div className="icon text-center d-flex  justify-content-center">
                    <div className="line mt-1 mx-3 bg-black "></div>
                    <i class="fa-solid fa-star"></i>
                    <div className="line mt-1 mx-3 bg-black">
                    </div>
            </div>
            <div className="contact w-50 mx-auto">
                <div class="mb-3">
                    <input type="text" class="form-control border border-end-0 border border-start-0  border-top-0 mt-5" id="formGroupExampleInput" placeholder="user name"/>
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control border border-end-0 border border-start-0  border-top-0 mt-5" id="formGroupExampleInput2" placeholder="user age"/ >
                </div>                
                <div class="mb-3">
                    <input type="email" class="form-control border border-end-0 border border-start-0  border-top-0 mt-5" id="formGroupExampleInput" placeholder="user email"/>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control border border-end-0 border border-start-0  border-top-0 my-5" id="formGroupExampleInput2" placeholder="user password"/ >
                </div>                
                <div class="mb-3">
                    <button className='btn btn-info mb-5' > send message </button>
                </div>
            </div>

        </>
    )
}

export default Contact
