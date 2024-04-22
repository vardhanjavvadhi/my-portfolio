import React from 'react'
import './project.css'
import zomatoImage from "./img/IMG_zomato_clone.png";
import Spin from 'react-reveal/Spin';
const Project = () => {
  return (
    <>
    <div className="container  text-center  project" id='project'>
    <h2 className='col-12 mt-3  mb-1  text-uppercase'>
       top recent projects
      </h2>
      <hr/>
         <p className='pb-3'>
          Here are my live projects with source codes
        </p>
        {/* card-design */}
       
        <div className="row" id='ads'>
        <Spin>
         <div className="col-md-4">
          <div className="card-rounded">
            <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src={zomatoImage} alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3 text-center">
              <span className=" card-detail-badge m-1">Node</span>
              <span className=" card-detail-badge m-1">Express</span>
              <span className=" card-detail-badge m-1">React</span>
              <span className=" card-detail-badge m-1">MongoDB</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto ">
                <h5 className='text-uppercase mt-3 fs-4 '>zomato-clone website</h5>
              </div>
              <a className="ad-btn" href="https://github.com/vardhanjavvadhi/my-projects/tree/main/Zomato-clone-application">View</a>
            </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card-rounded">
            <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGP25bDi8e063P9a2O6BXxdCyYfSBtpyG3FRglxoU4tN91sQ&s" alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3 text-center">
              <span className=" card-detail-badge m-1">Node</span>
              <span className=" card-detail-badge m-1">Express</span>
              <span className=" card-detail-badge m-1">React</span>
              <span className=" card-detail-badge m-1">MongoDB</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto ">
                <h5 className='text-uppercase mt-3 fs-4 '>e-commerce website</h5>
              </div>
              <a className="ad-btn" href="https://github.com/vardhanjavvadhi/my-projects/tree/main/e-commerce-project(extra%20project)">View</a>
            </div>
          </div>
         </div>

         <div className="col-md-4">
          <div className="card-rounded">
            <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="https://img.freepik.com/premium-vector/weather-check-cartoon-smartphone-interface-vector-templates-set-winter-overcast-mobile-app-screen-page-day-dark-mode-design-forecast-ui-application-phone-display-with-flat-character_106317-6396.jpg?w=2000" alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3 text-center">
              <span className=" card-detail-badge m-1">Html</span>
              <span className=" card-detail-badge m-1">CSS</span>
              <span className=" card-detail-badge m-1">Bootstrap</span>
              <span className=" card-detail-badge m-1">JavaScript</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto ">
                <h5 className='text-uppercase mt-3 fs-4 '>weather API website</h5>
              </div>
              <a className="ad-btn" href="https://github.com/vardhanjavvadhi/mern-/tree/main/Weather-API">View</a>
            </div>
          </div>
         </div>
         </Spin>
        </div>
    </div>
    </>
  )
}

export default Project
