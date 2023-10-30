import {useState} from 'react'
import './Contact.css'
import $ from "jquery";



function Contact() {

    const [name, setName] = useState("Your Name")
    const [number, setNumber] = useState("Your Number")
    const [email, setEmail] = useState("Your Email")
    const [num, setNum] = useState(0)
    const [subject, setSubject] = useState("Your Subject")
    const [message, setMessage] = useState("Your Message ")
    const [red, setRed] = useState(false)
    const [validEmail, setValidEmail] = useState(true)
    const [result, setResult] = useState("");



    const handleReset=()=>{
        setNumber("Your Number")
        setName("Your Name")
        setSubject("Your Subject")
        setEmail("Your Email")
        setMessage("Your Message")

    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
  






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
                            <form id="contact-form" name="contact-form" method="post"
                            action="./send.php"
                            onSubmit={(event) => handleSubmit(event)}
                                                  
                             >

                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="md-form mb-0 ">
                                        <label for="name" class="">Your name <em>*</em> </label>
                                            <input type="text" id="name" name="name" class="form-control _form-control "  placeholder={name} required
                                                // onChange={(e) =>{ setName(e.target.value) 
                                                //                      setNum(num + 1)}}

                                                                     />
                                            
                                        </div>
                                    </div>
                                    

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                        <label for="email" class="form_lable">Your email  <em>*</em></label>
                                            <input type="text" id="email" name="email" class="form-control"  placeholder={email} required
                                            // onChange={(e) =>{ setEmail(e.target.value) 
                                            //                          setNum(num + 1)}}

                                                                     />
                                            
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                          <label for="subject" class="">Your number  <em>*</em></label>
                                            <input type="text" id="subject" name="subject" class="form-control"  placeholder={number} required
                                            // onChange={(e) =>{ setNumber(e.target.value) 
                                            //                          setNum(num + 1)}}

                                                                     />
                                          
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                          <label for="subject" class="">Subject</label>
                                            <input type="text" id="subject" name="subject" class="form-control"  placeholder={subject} 
                                            // onChange={(e) =>{ setSubject(e.target.value) 
                                            //                          setNum(num + 1)}}

                                                                     />
                                          
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-md-12">

                                        <div class="md-form">
                                        <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2"
                                                class="form-control md-textarea"  placeholder={message}
                                                // onChange={(e) =>{ setMessage(e.target.value) 
                                                //                      setNum(num + 1)}}
                                                
                                                ></textarea>
                                            
                                        </div>

                                    </div>
                                </div>

                                <div class="text-center text-md-left">
                                <button class="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();">Send</button>
                                 <button type='reset' class="btn btn-primary"
                                    onclick={handleReset}>reset</button>
                            </div>
                        {/* <?php if(!empty($message)){ ?>
                            <div className='success'>
                                <strong> 
                                <?php echo $message; ?>
                                Your Message Was Sent Successfuly</strong>
                            
                           
                           </div>
                            <?php } ?> */}
                            </form>

                          
                            <div class="status"></div>
                        </div>
                     
                        <div class="col-md-6 text-center">
                          
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