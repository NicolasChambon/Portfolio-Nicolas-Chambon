import ResumeBtn from './ResumeBtn/ResumeBtn';

import profilePicture from '../../../../assets/profile-picture.jpeg';
import trainingIcon from '../../../../assets/training-icon.svg';
import experiencesIcon from '../../../../assets/experiences-icon.svg';
import publicationsIcon from '../../../../assets/publications-icon.svg';
import interestsIcon from '../../../../assets/interests-icon.svg';
import peopleSkillsIcon from '../../../../assets/people-skills-icon.svg';
import languagesIcon from '../../../../assets/languages-icon.svg';
import skillsIcon from '../../../../assets/skills-icon.svg';
import pdfIcon from '../../../../assets/pdf-icon.svg';

import './ResumeNav.scss';

const ResumeNav = () => {
  return (
    <div className="ResumeNav">
      <div className="ResumeNav-picture">
        <img
          className="ResumeNav-picture-img"
          src={profilePicture}
          alt="Nicolas Chambon"
        />
      </div>
      <ResumeBtn
        className="ResumeNav-btnTraining"
        title="training"
        icon={trainingIcon}
        label="Training"
      />
      <ResumeBtn
        className="ResumeNav-btnSkills"
        title="skills"
        icon={skillsIcon}
        label="Skills"
      />
      <ResumeBtn
        className="ResumeNav-btnPeopleSkills"
        title="peopleSkills"
        icon={peopleSkillsIcon}
        label="People Skills"
      />
      <ResumeBtn
        className="ResumeNav-btnLanguages"
        title="languages"
        icon={languagesIcon}
        label="Languages"
      />
      <ResumeBtn
        className="ResumeNav-btnExperiences"
        title="experiences"
        icon={experiencesIcon}
        label="Experiences"
      />
      <ResumeBtn
        className="ResumeNav-btnPublications"
        title="publications"
        icon={publicationsIcon}
        label="Publications"
      />
      <ResumeBtn
        className="ResumeNav-btnInterests"
        title="interests"
        icon={interestsIcon}
        label="Interests"
      />
      <a
        className="ResumeNav-pdfIcon"
        title="Open as a PDF"
        href="./CV - Nicolas Chambon.pdf"
        target="_blank"
      >
        <img className="ResumeNav-pdfIcon-icon" src={pdfIcon} alt="pdf icon" />
      </a>
    </div>
  );
};

export default ResumeNav;
