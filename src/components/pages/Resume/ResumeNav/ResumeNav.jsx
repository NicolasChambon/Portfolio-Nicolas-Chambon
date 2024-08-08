import ResumeBtn from './ResumeBtn/ResumeBtn';

import profilePicture from '../../../../assets/images/profile-picture.jpeg';
import trainingIcon from '../../../../assets/icons/training-icon.svg';
import experiencesIcon from '../../../../assets/icons/experiences-icon.svg';
import publicationsIcon from '../../../../assets/icons/publications-icon.svg';
import interestsIcon from '../../../../assets/icons/interests-icon.svg';
import peopleSkillsIcon from '../../../../assets/icons/people-skills-icon.svg';
import languagesIcon from '../../../../assets/icons/languages-icon.svg';
import skillsIcon from '../../../../assets/icons/skills-icon.svg';
import pdfIcon from '../../../../assets/icons/pdf-icon.svg';

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
