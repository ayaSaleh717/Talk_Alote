import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <>
    <section id='contact'>
            <div class="container mb-5 ">
                <section class="mb-4">

                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate
                        to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div class="row">

                        <div class="col-md-6 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                        <label for="name" class="">Your name</label>
                                            <input type="text" id="name" name="name" class="form-control" />
                                            
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                        <label for="email" class="form_lable">Your email</label>
                                            <input type="text" id="email" name="email" class="form-control" />
                                            
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                          <label for="subject" class="">Subject</label>
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                          
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">

                                        <div class="md-form">
                                        <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2"
                                                class="form-control md-textarea"></textarea>
                                            
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div class="text-center text-md-left">
                                <button class="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();">Send</button>
                                 <button class="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();">reset</button>
                            </div>
                            <div class="status"></div>
                        </div>
                     
                        <div class="col-md-6 text-center">
                            {/* <iframe
                                src="https://www.google.com/maps/place/%D9%85%D9%88%D8%B3%D9%83%D9%88%D8%8C+%D8%B1%D9%88%D8%B3%D9%8A%D8%A7%E2%80%AD/@55.4251289,37.3025182,14z/data=!4m6!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu"
                                width="600" height="300px" 
                                // style="border:0;"
                                 allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18113.222290951773!2d37.302518219605496!3d55.425128852602036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z2YXZiNiz2YPZiNiMINix2YjYs9mK2Kc!5e0!3m2!1sar!2s!4v1698433388295!5m2!1sar!2s" 
                                width="600"
                                 height="450" 
                                  allowfullscreen=""
                                   loading="lazy"
                                 referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                      

                    </div>

                </section>
            </div>
        </section>

    </>
  )
}

export default Contact