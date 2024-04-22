import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import "./home.css";
import Resume from '../../assets/docs/VARDHANJAVVADHIresume.pdf'
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { BsFacebook, BsGithub, BsLinkedin  } from "react-icons/bs";
import {BsInstagram} from "react-icons/bs"
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
 
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
    <div className="Container-fluid home-container" id='home' >
          <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
             <BsFillMoonStarsFill size={30} /> 
            ) : (
            <BsFillSunFill size={30} /> 
            )}
          </div>
          <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            </Fade>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React js developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=916305296973"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          </Fade>
            <fade>
            <div className="p-3">
            <a href="https://www.linkedin.com/in/javvadhi-vardhan-89523a264/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin color="blue" size={30} className="ms-2" />
        </a>
        <a href="https://github.com/vardhanjavvadhi?tab=repositories" target="_blank" rel="noopener noreferrer">
          <BsGithub color="white" size={30} className="ms-2" />
        </a>
        <a href="https://www.facebook.com/vardhan.javvadhi9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <BsFacebook color="blue" size={30} className="ms-2" />
        </a>
        <a href="https://instagram.com/vardhanjavvadhi?utm_source=qr&igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
          <BsInstagram color="red" size={30} className="ms-2 icon" />
        </a>
            </div>
           </fade>    
        </div>
      </div>
    </>
  );
};

export default Home
