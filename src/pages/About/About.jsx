import React from "react";
import profilePic from '../../components/images/vardhan pass photo.jpg';
import "./about.css";
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <>
     
        <div className="about" id="about">
          <div className="row">
          <Fade top>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profilepic" /> 
            </div>        
            </Fade>
            <Fade bottom> 
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p> My name is Javvadhi Vardhan. I completed my schooling at St. Xavier’s High School (E.M) in 2014, where I achieved a CGPA of 6.7. I then went on to complete my intermediate education at NRI Junior College in 2016, where I scored 873 marks out of 1000. After that, I graduated from West Godavari Institute of Science and Engineering in the 2020 batch with a percentage of 70.32%. I have completed a Full Stack Web Development Internship Program (MERN stack) at Edureka. I am now actively seeking a job as a web developer, where I can apply my skills and knowledge to create innovative and user-friendly websites. </p>
              <p> I am passionate about web development and am constantly striving to improve my skills and stay up-to-date with the latest technologies and trends in the field. I am a quick learner, a team player, and am committed to delivering high-quality work.</p>
            </div>
            </Fade>
          </div>
        </div>
      
    </>
  );
};

export default About;
