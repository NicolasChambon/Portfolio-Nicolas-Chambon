import trainingIcon from '../../../../../assets/training-icon.svg';

import './ResumeTraining.scss';

const ResumeTraining = () => {
  return (
    <div className="ResumeTraining" id="training">
      <div className="ResumeTraining-title">
        <img
          className="ResumeTraining-title-icon"
          src={trainingIcon}
          alt="training icon"
        />
        <h3 className="ResumeTraining-title-text">Training</h3>
      </div>
      <div className="ResumeTraining-item">
        <p className="ResumeTraining-item-diploma">
          Professional qualification - Web and Mobile Web Developer (Bac +2)
        </p>
        <div className="ResumeTraining-item-whereWhen">
          <p className="ResumeTraining-item-whereWhen-where">O'clock School</p>
          <p className="ResumeTraining-item-whereWhen-when">
            Nov. 23 - July. 24
          </p>
        </div>
        <ul className="ResumeTraining-item-description">
          <li className="ResumeTraining-item-description-li">
            - Frontend : HTML, CSS, JavaScript React specialisation
          </li>
          <li className="ResumeTraining-item-description-li">
            - Backend : OOP, MVC pattern with PHP/Laravel
          </li>
          <li className="ResumeTraining-item-description-li">
            - “DATA” specialisation : SQL, NoSQL, API data and NodeJS
          </li>
        </ul>
      </div>
      <div className="ResumeTraining-item">
        <p className="ResumeTraining-item-diploma">
          PhD in Human Movement Sciences (Bac +8)
        </p>
        <div className="ResumeTraining-item-whereWhen">
          <p className="ResumeTraining-item-whereWhen-where">
            Aix-Marseille University
          </p>
          <p className="ResumeTraining-item-whereWhen-when">
            May. 11 - Jan. 15
          </p>
        </div>
        <ul className="ResumeTraining-item-description">
          <li className="ResumeTraining-item-description-li">
            Influence of footwear on the biomechanical pattern of running:
            short-term adaptations to the geometric characteristics of the sole.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeTraining;
