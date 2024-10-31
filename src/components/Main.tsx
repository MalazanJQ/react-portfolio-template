import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQEU-llSqEYrVw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1594014966915?e=1735776000&v=beta&t=vLGkbfNLGrHLT65nTMHCqbJXAalGhNidbyCDmQxkChM" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MalazanJQ" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacqueline-j-liu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jacqueline Liu</h1>
          <h3>Computer Science student at University of Washington</h3>
          <div className="mobile_social_icons">
            <a href="https://github.com/MalazanJQ" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacqueline-j-liu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;