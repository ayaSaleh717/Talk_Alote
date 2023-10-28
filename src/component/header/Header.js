import React from 'react'
import './header.css'

function Header() {
  return (
    <>
         <header className='header'>
         <section id="topbar" class="mb-2 mb-lg-0 mb-sm-0 d-none d-lg-flex align-items-center pt-2 pb-2 bg-primary text-white topbar-transparent">
        <div class="container">
          <div class="row">
            <div class="col-lg-6   text-start">
             <span class="px-3"><i class="bi bi-phone "></i> +7 8-960-271-99-73 </span>
          <i class="bi bi-clock"></i> Mon-Sat: 11:00 AM - 23:00 PM
            </div>
            <div class="col-md-6 text-end">
                {/* <a href="" class="me-4 text-reset">
                    <i class="bi bi-facebook"></i>
                </a> */}
                {/* <a href="" class="me-4 text-reset">
                    <i class="bi bi-twitter"></i>
                </a> */}
                {/* <a href="" class="me-4 text-reset">
                    <i class="bi bi-google"></i>
                </a> */}
                <a href="https://instagram.com/talkalot.ru?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" class="me-4 text-reset">
                    <i class="bi bi-instagram"></i>
                </a>
                {/* <a href="" class="me-4 text-reset">
                    <i class="bi bi-linkedin"></i>
                </a> */}
                <a href="https://vk.com/talkalot13" class="me-4 text-reset">
                <i class="fa-brands fa-vk"></i>
                 </a>
            </div>
          </div>
        </div>
      </section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <h2 class="fw-bold  mb-2 mb-lg-0 mb-sm-0 logo-header">АНГЛИЙСКИЙ</h2>
                    <span className='span-1'>с носителями</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="bi bi-list"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#galary">Gallery</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact us</a>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
      
    </header>
   
    </>
  )
}

export default Header