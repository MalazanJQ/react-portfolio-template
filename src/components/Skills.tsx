import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "Java",
    "Kotlin",
    "C/C++"
];

const aws = [
    "S3",
    "DynamoDB",
    "Lambda",
    "Cloudwatch",
    "CDK"
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>Languages</h3>
                    <div className="flex-chips">
                        {languages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Cloud Platforms</h3>
                    <div className="flex-chips">
                        <span className="chip-title">AWS:</span>
                        {aws.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;