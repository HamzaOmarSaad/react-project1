import React from 'react'

function Footer() {
    return (
        <>
                <div className='footer-1 text-white py-5'>
            <div className="  container d-flex justify-content-evenly">
                <div className="item">
                    <h4>LOCATION</h4>
                    <p>2215 john danailas drive</p>
                    <p>Clark ,MO 65243</p>
                </div>
                <div className="item">
                    <h4>Around the web</h4>
                    <div className="icons">
                        <i className='fa-brands fa-facebook fs-4 p-2 border rounded-circle m-1'></i>
                        <i className='fa-brands fa-twitter fs-4 p-2 border rounded-circle m-1'></i>
                        <i className='fa-brands fa-linkedin fs-4 p-2 border rounded-circle m-1'></i>
                        <i className='fa-brands fa-google fs-4 p-2 border rounded-circle m-1'></i>
                    </div>
                </div>
                <div className="item">
                <h4>ABOUT FREELANCER</h4>
                    <p>2215 john danailas drive2215 john danailas drive</p>
                    <p>Clark ,MO 65243</p>
                </div>
            </div>        
        </div>
        <div className="footer-2 text-white ">
            <div className=" text-center item py-3">
                <p>Copyright © Your Website 2021</p>
            </div>
        </div>
        </>



    )
}

export default Footer
