import React from 'react'
import video from './../Assest/galary-4.jpg'
import './about.css'


function About() {
  return (
    <>
        <section id="about" class="about mt-5">
            <div class="container-fluid container">
                <h2 class="h1-responsive font-weight-bold text-center my-2 ">About</h2>
                
                <p class="text-center w-responsive mx-auto mb-1">Do you have any questions? Please do not hesitate to
                    contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div class="row  pt-5 pb-5">

                    <div class="col-lg-5 align-items-stretch video-box"
                        // style='background-image: url("https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg");'
                        >
                        {/* <video href="./../Assest/video1.mp4" class="venobox play-btn mb-4"
                            data-vbtype="video" data-autoplay="true"></video> */}
                            <video controls className='video venobox play-btn mb-4'>
                                <source src={video} type="video/mp4"/>
                               </video>
                    </div>

                    <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                        <div class="content">
                            <h3>почему мы? <strong>почему Talk Alot</strong></h3>
                           
                            <p class="font-italic">
                          we give you all English
                            </p>
                            <ul>
                                <li><i class="bx bx-check-double"></i>  мы выводим на речь на первом уроке берем с 0</li>
                                <li><i class="bx bx-check-double"></i>  вся грамматика в понятных схемах</li>
                                <li><i class="bx bx-check-double"></i>  сразу применяется в речи </li>
                            </ul>
                            <p>
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>

    </>
  )
}

export default About