import React from 'react'
import {MdSchool} from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css'

const Education = () => {
  return (
<>
  <div className='education' id='education'>
  <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
      Education Details
      </h2>
      <hr/>
      <VerticalTimeline> 
      <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span className="date">2016 - 2020</span>}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              West Godavari Institute of Science and Engineering, Prakashraopalem, Andhra Pradesh, India
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span className="date">2014 - 2016</span>}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nri junior college , Eluru, Andhra Pradesh, India     
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span className="date">2013 - 2014</span>}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">SSC</h3>
            <h4 className="vertical-timeline-element-subtitle">
             St.Xavier's High school (E.M), Eluru, Andhra Pradesh, India
            </h4>
          </VerticalTimelineElement>
      </VerticalTimeline>
   </div>   
</>  
)
}

export default Education