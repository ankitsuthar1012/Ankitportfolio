import React from 'react'

const Project = () => {
    return (
        <> 

            <div className='container-fluid project-section '>
                <p>
                 Some of my Recent Projects</p>
                <div className='container project-box '>
                    <div className='row' >
                        <div className='col-md-6 col-lg-4  col-12 my-3 '>
                            <div className="card">
                                <img src="images/image_gallery-with_filtereffect.png" className="card-img-top img-fluid" width={300} height={300} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Burger selling website </h5>
                                    
                                    <div className='project-buttons'>
                                        <button>
                                            <a href="https://github.com/ankitsuthar1012/Burger-customization-" target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-6 col-lg-4 col-sm-6 col-12 my-3'>
                            <div className="card" >
                                <img src="images/Architech-Website.png" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Movie Watchlist </h5>
                                    
                                    <div className='project-buttons'>

                                        <button>
                                            <a href="https://github.com/ankitsuthar1012/Burger-customization-" target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-6 col-12 my-3'>
                            <div className="card" >
                                <img src="images/portfolio_project.png" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> Portfolio project using react JS</h5>
                                  
                                    <div className='project-buttons'>

                                        <button>
                                            <a href="https://github.com/Ankit23456789" target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
            <div className='Skills_Section container'> 
            <div className='skills_text-section'>
            <h3>Skills</h3>
            <p>  These are the technical skills  which i am  using in my projects.
            </p>
            </div>
                
               <div className='cards'>
               <div className='skill-cards'>
               <img src="./images/skills/html.png" alt=""  className='skill-images'/>
              </div>
              <div className='skill-cards'>
               <img src="./images/skills/css.png" alt=""  className='skill-images'/>
              </div>
              <div className='skill-cards'>
               <img src="./images/skills/reactjs.png" alt=""  className='skill-images'/>
              </div>
              <div className='skill-cards'>
              <img src="./images/skills/javascript.jfif" alt=""  className='skill-images'/>
             </div>
             <div className='skill-cards'>
             <img src="./images/skills/bootstrap.jfif" alt=""  className='skill-images'/>
            </div>
            <div className='skill-cards'>
              <img src="./images/skills/java.png" alt=""  className='skill-images'/>
             </div>
             <div className='skill-cards'>
             <img src="./images/skills/c++.png" alt=""  className='skill-images'/>
            </div>
               </div>
              
              
            </div>

        </>
    )
}

export default Project
