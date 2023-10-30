import React from 'react'
import './footer.css'
import logo from './../Assest/111.png'
import Visitor from '../visitor/Visitor'

function Footer() {
  return (
    <>
         <footer class="text-center text-lg-start bg-primary py-3 text-white" id='footer'>
          

          <section class="container">
              <div class="container text-center text-md-start mt-5">
                  <div class="row mt-3">
                      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                          <h6 class="text-uppercase fw-bold mb-4 logo">
                              {/* <i class="bi bi-gem me-3"></i>Company name */}
                             
                                </h6>
                                <img src={logo} className='logo_footer' />
                          <p>
                              Here you can use rows and columns to organize your footer content. Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                          </p>

                          <Visitor />
                      </div>
                    
                      
                     
                      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                          <h6 class="text-uppercase fw-bold mb-4">
                              Useful links
                          </h6>
                          <p>
                              <a href="#" class="text-reset">Home</a>
                          </p>
                          <p>
                              <a href="#about" class="text-reset">About</a>
                          </p>
                          <p>
                              <a href="#galary" class="text-reset">Gallary</a>
                          </p>
                          <p>
                              <a href="#feed" class="text-reset">Feedback</a>
                          </p>
                          <p>
                              <a href="#contact" class="text-reset">Contact</a>
                          </p>
                         
                         
                      </div>

                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                          <h6 class="text-uppercase fw-bold mb-4">
                              Contact
                          </h6>
                          <p>
                          <a class="me-4 text-reset" href='https://www.google.com/maps?ll=55.582026,37.385524&z=13&t=m&hl=ar&gl=US&mapclient=embed&q=%D9%85%D9%88%D8%B3%D9%83%D9%88+%D8%B1%D9%88%D8%B3%D9%8A%D8%A7'>
                          <i class="fa-solid fa-location-dot"></i> Russia - Mosco

                          </a>
                            </p>

                          <p>
                          <a href='mailto:daite.tone.english@gmail.com'  class="me-4 text-reset">
                          <i class="bi bi-envelope me-3"></i>daite.tone.english@gmail.com

                          </a>
                          </p>

                          <p><a href='tel:+7 8-960-271-99-73' className='me-4 text-reset'>
                          <i class="bi bi-phone me-3"></i>+7 8-960-271-99-73 </a></p>
                          <p>
                          <a href="https://vk.com/talkalot13" class="me-4 text-reset">
                              <i class="fa-brands fa-vk"></i> vk.come
                          </a>
                            
                          </p>
                          <p>
                          <a href="https://instagram.com/talkalot.ru?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" class="me-4 text-reset">
                    <i class="bi bi-instagram"></i> Instagram
                </a>
                           </p>

                      </div>
                  </div>
              </div>
          </section>
     
          <div class="text-center py-4" 
        //   style="background-color: rgba(0, 0, 0, 0.05);"
          >
              © 2021 Copyright : 
              <a class="text-reset fw-bold" href="https://mdbootstrap.com/">  salehaya717@gmail.com</a>
          </div>
        
      </footer>
    </>
  )
}

export default Footer