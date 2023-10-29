import React from 'react'
import './feed.css'
function Feedback() {
  return (
    <section  className='container  mb-5 feed' id='feed' >
<div className='mb-4 container'>
     <h2 class="h1-responsive font-weight-bold text-center my-4">Comments & Reviews</h2>
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                    contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
    <div className='container feedback mb-5 d-flex justify-content-around'>
      <div class="card" >
         <div class="card-body">
                <h5 class="card-title">
                <i class="fa-regular fa-user"></i> 
                   Natalya Fomina</h5>
                <p class="card-text">Really great school!!! Excellent teachers and interesting system! Thank you very much!!!Show likes
.</p>
                <a href="https://vk.com/topic-45441962_28780660" class="btn btn-primary">See comment</a>
  </div>
  
</div>
<div class="card" >
         <div class="card-body">
                <h5 class="card-title">
                <i class="fa-regular fa-user"></i>
                   Irina Tsubareva</h5>
                <p class="card-text">will finally bring to light at latent truth!.</p>
                <a href="https://vk.com/topic-45441962_28780660" class="btn btn-primary">See comment</a>
  </div>
  
</div>
<div class="card" >
         <div class="card-body">
                <h5 class="card-title">
                <i class="fa-regular fa-user"></i>
                   Maria Morozova</h5>
                <p class="card-text">Please share your experience: how to cancel the test and move on to a new level of reality? </p>
                <a href="https://vk.com/topic-45441962_28780660" class="btn btn-primary see">See comment</a>
  </div>
  
</div>

<div className='card'>
<a href='https://vk.com/topic-45441962_28780660' className='arrow_container'>
<i class="fa-solid fa-arrow-right arrow"></i>
<span className='see_more'>see more</span>
</a>

</div>


    </div>

    
    </div>
    </section>
  )
}

export default Feedback