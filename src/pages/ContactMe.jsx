import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div className='container contactme_box'>
        <div className='row contactform_box'>
          <h3 className='text-center'>Let's Talk</h3>
          <div className='col-12 col-md-12 col-lg-6  my-4' >

            <div className=' my-image text-center'>
              <img src="images/contactimage.JPG" alt="Ankit Suthar " className='img-fluid' />
            </div>
          </div>
          <div className='col-12 col-md-12 col-lg-6  my-4 form-section'>
            <form action=" " method='POST' className='contact-inputs' target="_blank">
              <input type="text" name="username" placeholder='Username' autoComplete='off' required className='inputtextbox' />
              <input type="email" name="Email" placeholder='Email' autoComplete='off' required className='inputtextbox' />
              <input type="text" name="Subject" placeholder='Subject' autoComplete='off' required className='inputtextbox' />

              <textarea name="message" cols="8" rows="3" autoComplete='off' required className='textareabox' placeholder='Drop your message here'></textarea>
              <input type="submit" value="Send Message" className='submit_button  ' />
            </form>
          </div>
        </div>
        <div className='container-fluid get-touch-box'>
          <div className='row'>
            <div className='col-md-12 col-lg-4  col-12 '>
              <div className='contact-cards text-center'>
                <i class="fa-regular fa-envelope"></i>
                <p className='card-headings'>Email</p>

                <p>ankitisro1012@gmail.com</p>
              </div>
            </div>
            <div className='col-md-12 col-lg-4  col-12'>
              <div className='contact-cards text-center'>
                <i class="fa-brands fa-whatsapp"></i>
                <p className='card-headings'> WhatsApp</p>

                <p>8000552346</p>
              </div>
            </div>
            <div className='col-md-12 col-lg-4  col-12'>
              <div className='contact-cards text-center'>
                <i class="fa-solid fa-house"></i>
                <p className='card-headings'>Address</p>
                <p>
                  H.NO - D3 Street No - 5 Dhilki Jatan 
                  Nohar Road, Hanumangarh Rajasthan 335504

                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactMe
