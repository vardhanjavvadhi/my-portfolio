import React from 'react'
import './techstack.css'
import Fade from 'react-reveal/Fade';
import { TechstackList } from '../../utils/TechstackList'
const Techstack = () => {
  return (
    <>
    <div className="container techstack" id='tech'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Technologies Stack
      </h2>
      <hr/>
         <p className='pb-3 text-center'>
        👉including programming languages, frameworks, databases, frontend and backend tools and APIs
        </p>
        <div className="row">
      {TechstackList.map(tech =>(
       <div key={tech.id} className="col-md-3">
        <Fade right>
        <div className="card m-2">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex justify-content-center">
               <div className="align-self-center">
               <tech.icon className='tech-icon'/>
               </div>
               <div className="media-body">
                <h5>{tech.name}</h5>
               </div>
              </div>
            </div>
          </div>
        </div>
        </Fade>
        </div>
        ))}
       </div>
    </div>
    
    </>
  )
}

export default Techstack