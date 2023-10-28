import React from 'react'
import im1 from './../Assest/galary-1.jpg'
import im2 from './../Assest/galary-2.jpg'
import im3 from './../Assest/galary-3.jpg'
import im4 from './../Assest/galary-4.jpg'
import './galary.css'


function Galary() {
  return (
    <>
         <section id='galary'>
            <div class="container">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Gallery</h2>
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                    contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div class="row galary">
                    <div class="col-lg-4 mb-4 mb-lg-0 im">
                        <img src={im1}
                            class="w-100 shadow-1-strong rounded mb-4 " alt="Boat on Calm Water" />
                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0 im">
                        <img src={im3}
                            class="w-100 shadow-1-strong rounded mb-4 img" alt="Mountains in the Clouds" />
{/* 
                        <img src={im4}
                            class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" /> */}
                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0 im">
                        <img src={im4}
                            class="w-100 shadow-1-strong rounded mb-4 img" alt="Waves at Sea" />

                    </div>
                    <div class="col-lg-4 mb-4 mb-lg-0 im">
                        <img src={im2}
                            class="w-100 shadow-1-strong rounded mb-4 img" alt="Waves at Sea" />

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Galary