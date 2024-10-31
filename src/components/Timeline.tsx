import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills, faComputer } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work History</h1>
        <VerticalTimeline layout="1-column-right">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2023 - September 2023"
            dateClassName="timeline"
            iconStyle={{ background: 'rgb(188, 128, 207', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faComputer} />}
          >
            <h3 className="vertical-timeline-element-title">AWS SDE Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">Amazon</h5>
            <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
            <ul>
              <li>Implemented a DLQRedrive lambda to allow Replication Service operators to process failed entities in the dead
              letter queue by either dropping the record or redriving the replication attempt</li>
              <li>Developed a BackfillOperations lambda to add items to a DyanmoDB table and change their status</li>
              <li>Emitted Cloudwatch metrics for every time a backfill entity is registered in the BackfillEntityMetadata table and
              every time its status is changed to succeeded</li>
              <li>Created a CLI tool to generate dummy data for testing and to invoke the lambdas</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2020 - present"
            iconStyle={{ background: 'rgb(188, 128, 207', color: 'rgb(188, 128, 207' }}
            icon={<FontAwesomeIcon icon={faComputer} />}
          >
            <h3 className="vertical-timeline-element-title">Student Researcher</h3>
            <h5 className="vertical-timeline-element-subtitle">University of Washington</h5>
            <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
            <ul>
              <li>Developed a web scraping tool to gather information from a protein database</li>
              <li>Used NLP processing techniques including TF-IDF and S-BERT to analyze qualitative comments with their
              associated psychedelic compounds</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2017 - Present"
            iconStyle={{ background: 'rgb(188, 128, 207', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPills} />}
          >
            <h3 className="vertical-timeline-element-title">Pharmacist</h3>
            <h5 className="vertical-timeline-element-subtitle">Rite Aid March 2017 - November 2020</h5>
            <h5 className="vertical-timeline-element-subtitle">Albertsons November 2020 - Present</h5>
            <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
            <ul>
              <li>Developed a web scraping tool to gather information from a protein database</li>
              <li>Used NLP processing techniques including TF-IDF and S-BERT to analyze qualitative comments with their
              associated psychedelic compounds</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;