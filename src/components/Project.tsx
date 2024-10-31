import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/MalazanJQ/skin-cancer-app" target="_blank" rel="noreferrer"><img src={mock02} className="thumbnail" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MalazanJQ/skin-cancer-app" target="_blank" rel="noreferrer"><h2>Skin Cancer Binary Classification App</h2></a>
                <p><i>Python, Pytorch, React, Typescript, Flask</i></p>
                <p>Trained a machine learning model to classify images of skin cancer as "benign" or "malignant". Allows uploading of images </p>
            </div>
            <div className="project">
                <a href="https://book-gallery-jq.netlify.app/" target="_blank" rel="noreferrer"><img src={mock01} className="thumbnail" alt="thumbnail" width="100%"/></a>
                <a href="https://book-gallery-jq.netlify.app/" target="_blank" rel="noreferrer"><h2>Book Gallery App</h2></a>
                <p><i>Python, React, Javascript</i></p>
                <p>React gallery app showcasing all the books I've read since 2017. Utilizes the Google Books API to retrieve the page count, author, and summary for each book.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MalazanJQ/Acetaminophen-Dosing" target="_blank" rel="noreferrer"><img src={mock03} className="thumbnail" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MalazanJQ/Acetaminophen-Dosing" target="_blank" rel="noreferrer"><h2>Acetaminophen Dosing App</h2></a>
                <p><i>Python, Tkinter</i></p>
                <p>Simple Tkinter GUI to calculate the weight-based pediatric acetaminophen dose.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;