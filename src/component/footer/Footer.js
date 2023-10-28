import React from 'react'
import './footer.css'
import logo from './../Assest/111.png'

function Footer() {
  return (
    <>
         <footer class="text-center text-lg-start bg-primary py-3 text-white" id='footer'>
          

          <section class="">
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
                      </div>
                    
                      
                     
                      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                          <h6 class="text-uppercase fw-bold mb-4">
                              Useful links
                          </h6>
                          <p>
                              <a href="#!" class="text-reset">Pricing</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">Settings</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">Orders</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">Help</a>
                          </p>
                      </div>

                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                          <h6 class="text-uppercase fw-bold mb-4">
                              Contact
                          </h6>
                          <p><i class="bi bi-location me-3"></i> Russia - Mosco</p>
                          <p>
                              <i class="bi bi-envelope me-3"></i>
                              daite.tone.english@gmail.com
                          </p>
                          <p><i class="bi bi-phone me-3"></i>+7 8-960-271-99-73 </p>
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