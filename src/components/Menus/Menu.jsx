import React from 'react'
import profilePic from '../images/profile_pic.png';
import "./menu.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll'
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook} from 'react-icons/fc'
import {VscProject} from 'react-icons/vsc'
const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
     <>
     <Zoom>
     <div className="navbar-profile-pic ">
       <img src={profilePic} alt="profilepic" /> 
       </div>
     </Zoom>  
     <Fade bottom>
       <div className= "nav-items" >
          <div className="nav-item">
            <div className="nav-link">
              <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
              <FcHome/> Home
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
            <FcAbout/>  About             
             </Link>      
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
            <FcReadingEbook/>  Education
             </Link>
            </div>
          </div>
         
          <div className="nav-item">
            <div className="nav-link">
            <Link to='tech' spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech/> Tech Stack
             </Link>
            </div>
          </div>
         
          <div className="nav-item">
            <div className="nav-link">
            <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
            <VscProject/>  Projects
             </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
             <Link to='work' spy={true} smooth={true} offset={-100} duration={100}>
             <FcPortraitMode/>  Work Experience
               </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
            <FcBusinessContact/>   Contact
             </Link>
            </div>
          </div>
       </div>
     </Fade>
     </>    
    ) : (
      <Fade top>
      <div className= "nav-items" >
      <div className="nav-item">
        <div className="nav-link">
          <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
          <FcHome/>
          </Link>
        </div>
      </div>
      <div className="nav-item">
        <div className="nav-link">
        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
        <FcAbout/>            
         </Link>      
        </div>
      </div>
      <div className="nav-item">
        <div className="nav-link">
        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
        <FcReadingEbook/>  
         </Link>
        </div>
      </div>
     
      <div className="nav-item">
        <div className="nav-link">
        <Link to='tech' spy={true} smooth={true} offset={-100} duration={100}>
        <FcBiotech/> 
         </Link>
        </div>
      </div>
     
      <div className="nav-item">
        <div className="nav-link">
        <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
        <VscProject/>  
         </Link>
        </div>
      </div>
      <div className="nav-item">
        <div className="nav-link">
         <Link to='work' spy={true} smooth={true} offset={-100} duration={100}>
         <FcPortraitMode/>  
           </Link>
        </div>
      </div>
      <div className="nav-item">
        <div className="nav-link">
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
        <FcBusinessContact/> 
         </Link>
        </div>
      </div>
   </div>
   </Fade>
    )}
 
    </>
   
  )
}

export default Menu