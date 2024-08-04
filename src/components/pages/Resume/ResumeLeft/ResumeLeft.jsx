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

import './ResumeLeft.scss';

const ResumeLeft = () => {
  return (
    <div className="ResumeLeft">
      <div className="ResumeLeft-picture">
        <img
          className="ResumeLeft-picture-img"
          src={profilePicture}
          alt="Nicolas Chambon"
        />
      </div>
      <ResumeBtn
        className="ResumeLeft-btnTraining"
        title="training"
        icon={trainingIcon}
      />
      <ResumeBtn
        className="ResumeLeft-btnExperiences"
        title="experiences"
        icon={experiencesIcon}
      />
      <ResumeBtn
        className="ResumeLeft-btnPublications"
        title="publications"
        icon={publicationsIcon}
      />
      <ResumeBtn
        className="ResumeLeft-btnInterests"
        title="interests"
        icon={interestsIcon}
      />
      <ResumeBtn
        className="ResumeLeft-btnPeopleSkills"
        title="peopleSkills"
        icon={peopleSkillsIcon}
      />
      <ResumeBtn
        className="ResumeLeft-btnLanguages"
        title="languages"
        icon={languagesIcon}
      />
      <ResumeBtn
        className="ResumeLeft-btnSkills"
        title="skills"
        icon={skillsIcon}
      />
      <ResumeBtn className="ResumeLeft-btnPdf" title="pdf" icon={pdfIcon} />
    </div>
  );
};

export default ResumeLeft;
