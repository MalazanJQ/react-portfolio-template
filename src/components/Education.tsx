import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'
import { faPills, faComputer } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="March 2023 - June 2025"
            iconStyle={{ background: 'rgb(188, 128, 207', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faComputer} />}
          >
            <h3 className="vertical-timeline-element-title">Univesity of Washington</h3>
            <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science</h4>
            <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2013 - May 2017"
            iconStyle={{ background: 'rgb(188, 128, 207', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPills} />}
          >
            <h3 className="vertical-timeline-element-title">University of Georgia</h3>
            <h4 className="vertical-timeline-element-subtitle">Doctorate of Pharmacy</h4>
            <h4 className="vertical-timeline-element-subtitle">Athens, GA</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;