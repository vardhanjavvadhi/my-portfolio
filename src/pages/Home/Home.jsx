import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import "./home.css";
import Resume from '../../assets/docs/VARDHAN JAVVADHI resume.pdf'
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
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
                    "React native developer!",
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
        </div>
      </div>
    </>
  );
};

export default Home