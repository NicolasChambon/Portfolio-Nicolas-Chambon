import { useSelector } from 'react-redux';

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
  const language = useSelector((state) => state.global.language);

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
        label={language === 'en' ? 'Training' : 'Formation'}
      />
      <ResumeBtn
        className="ResumeNav-btnSkills"
        title="skills"
        icon={skillsIcon}
        label={language === 'en' ? 'Skills' : 'Compétences'}
      />
      <ResumeBtn
        className="ResumeNav-btnPeopleSkills"
        title="peopleSkills"
        icon={peopleSkillsIcon}
        label={language === 'en' ? 'People Skills' : 'Savoir-être'}
      />
      <ResumeBtn
        className="ResumeNav-btnLanguages"
        title="languages"
        icon={languagesIcon}
        label={language === 'en' ? 'Languages' : 'Langues'}
      />
      <ResumeBtn
        className="ResumeNav-btnExperiences"
        title="experiences"
        icon={experiencesIcon}
        label={language === 'en' ? 'Experiences' : 'Expériences'}
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
        label={language === 'en' ? 'Interests' : "Centres d'intérêt"}
      />
      <a
        className="ResumeNav-pdfIcon"
        title={language === 'en' ? 'Open as a PDF' : 'Ouvrir en PDF'}
        href="./CV - Nicolas Chambon.pdf"
        target="_blank"
      >
        <img className="ResumeNav-pdfIcon-icon" src={pdfIcon} alt="pdf icon" />
      </a>
    </div>
  );
};

export default ResumeNav;
