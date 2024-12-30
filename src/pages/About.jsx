import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
     
      <div className='AboutSection  container'>
      
        <h3 className='text-center'>About Me</h3>

        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6 heroimage-box my-4'>
            <img src="images/contactimage.JPG" alt=" profile" className='img-fluid rounded hero-img' />
          </div>
          <div className=' col-12  col-md-12 col-lg-6  aboutsection-textbox my-4 '>

            <p>
              Hey , My name is Ankit Suthar . I  am website  Developer . I am  from  Hanumangarh Rajasthan India.
              I love  designing and  photograpy  that why i love creating new website. I always ready to
              learn the new Technology which  helps to improve my  tehnical skills
              In future I see myself the Full Stack Developer . I done recent intership at ISRO Ahmedhabad Based on Focus peaking in Camera.


            </p>
           

            <div className='icons'>
            <Link to={"https://www.instagram "} target="_blank"> <i className="fa-brands fa-instagram icon" /></Link>
            <Link to={"http://linkedin.com/in/ankit-suthar-3095b51b3"} target="_blank"> <i className="fa-brands fa-linkedin icon" /></Link>
            <Link to={"https://github.com/ankitsuthar1012"} target="_blank">  <i className="fa-brands fa-github icon" /></Link>
          </div>
          <div className='buttons container'>
            <a href="https://drive.google.com/file/d/19EYVuYVmAcV3Qdgvdgnei4JlaJEo0twC/view?usp=drivesdk" target="_blank" rel="noreferrer">
              <button className='Talk-button  mx-4' >  Download CV</button>
            </a>
          </div>
          </div>
        </div>


      </div>
    


    </>
  )
}

export default About
