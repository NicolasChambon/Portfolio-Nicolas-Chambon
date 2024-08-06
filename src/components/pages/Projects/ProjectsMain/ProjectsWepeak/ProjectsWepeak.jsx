import wepeakFullLogo from '../../../../../assets/wepeak-projects-full-logo.svg';
import wepeakVideo from '../../../../../assets/wepeak-demo.mp4';

import './ProjectsWepeak.scss';

const ProjectsWepeak = () => {
  return (
    <div className="ProjectsWepeak">
      <img
        className="ProjectsWepeak-logo"
        src={wepeakFullLogo}
        alt="Wepeak logo"
        id="wepeak"
      />
      <video className="ProjectsWepeak-video" src={wepeakVideo} controls />
      <p className="ProjectsWepeak-description">
        WePeak is a networking platform where people can create outdoor sport
        sessions that other users can sign up for and take part in. The main
        goal is to create a new platform where people can link up and find some
        new buddies to enjoy outdoor activities.
      </p>
      <div className="ProjectsWepeak-stack">
        <h4 className="ProjectsWepeak-stack-title">Stack :</h4>
        <p className="ProjectsWepeak-stack-item">React</p>
        <p className="ProjectsWepeak-stack-item">Node.js</p>
        <p className="ProjectsWepeak-stack-item">Express</p>
        <p className="ProjectsWepeak-stack-item">MongoDB</p>
        <p className="ProjectsWepeak-stack-item">Sass</p>
        <p className="ProjectsWepeak-stack-item">Heroku</p>
      </div>
      <div className="ProjectsWepeak-links"></div>
    </div>
  );
};

export default ProjectsWepeak;
