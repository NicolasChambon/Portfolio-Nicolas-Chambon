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
      <div className="ProjectsWepeak-aim">
        <h4 className="ProjectsWepeak-aim-title">Aim :</h4>
        <p className="ProjectsWepeak-aim-text">
          WePeak is a matchmaking platform currently under development where
          people can create sports outings that other users can sign up for and
          participate in. Our service allows users to plan and organize sports
          activities according to their preferences and specific needs. Whether
          it&apos;s a mountain hike, a city running session, or a surfing
          session on the coast, WePeak offers a wide range of options to cater
          to all activity levels and interests. Users can filter available
          outings by sport type, location, difficulty, duration, and group size,
          allowing them to quickly and easily find the activity that best suits
          them.
        </p>
      </div>
      <div className="ProjectsWepeak-context">
        <h4 className="ProjectsWepeak-context-title">Context :</h4>
        <p className="ProjectsWepeak-context-text">
          This project was carried out as part of a training program at the tech
          school O&apos;Clock. It is a team project completed by four students
          (Tom Fourage, Melvin Leroux, Victor Lebecq, and myself). The
          demonstration video below describes the progress of the project after
          three weeks of work.
        </p>
      </div>
      <div className="ProjectsWepeak-mainFeatures">
        <h4 className="ProjectsWepeak-mainFeatures-title">Main features :</h4>
        <p className="ProjectsWepeak-mainFeatures-text">
          This project was carried out as part of a training program at the tech
          school O&apos;Clock. It is a team project completed by four students
          (Tom Fourage, Melvin Leroux, Victor Lebecq, and myself). The
          demonstration video below describes the progress of the project after
          three weeks of work.
        </p>
      </div>
      <div className="ProjectsWepeak-stack">
        <h4 className="ProjectsWepeak-stack-title">Stack :</h4>
        <div className="ProjectsWepeak-stack-front">
          <p className="ProjectsWepeak-stack-front-title">Front-end</p>
          <ul className="ProjectsWepeak-stack-front-list">
            <li className="ProjectsWepeak-stack-front-list-item">React</li>
            <li className="ProjectsWepeak-stack-front-list-item">Redux</li>
            <li className="ProjectsWepeak-stack-front-list-item">Sass</li>
          </ul>
        </div>
        <div className="ProjectsWepeak-stack-back">
          <p className="ProjectsWepeak-stack-back-title">Back-end</p>
          <ul className="ProjectsWepeak-stack-back-list">
            <li className="ProjectsWepeak-stack-back-list-item">PHP</li>
            <li className="ProjectsWepeak-stack-back-list-item">Symfony</li>
            <li className="ProjectsWepeak-stack-back-list-item">MySQL</li>
          </ul>
        </div>
      </div>
      <div className="ProjectsWepeak-links">
        <h4 className="ProjectsWepeak-links-title">Links :</h4>
        <ul className="ProjectsWepeak-links-list">
          <li className="ProjectsWepeak-links-list-item">
            <a
              className="ProjectsWepeak-links-list-item-link"
              href="https://github.com/NicolasChambon/WePeak-front-prod"
              target="_blank"
            >
              Front-end GitHub repository
            </a>
          </li>
          <li className="ProjectsWepeak-links-list-item">
            <a
              className="ProjectsWepeak-links-list-item-link"
              href="https://wepeak.vercel.app/"
              target="_blank"
            >
              Front-end deployment (under development)
            </a>
          </li>
        </ul>
      </div>
      <video className="ProjectsWepeak-video" src={wepeakVideo} controls />
    </div>
  );
};

export default ProjectsWepeak;
