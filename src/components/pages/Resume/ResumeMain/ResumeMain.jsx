import ResumeTraining from './ResumeTraining/ResumeTraining';
import ResumeExperiences from './ResumeExperiences/ResumeExperiences';
import ResumePublications from './ResumePublications/ResumePublications';
import ResumeSkills from './ResumeSkills/ResumeSkills';
import ResumePeopleSkills from './ResumePeopleSkills/ResumePeopleSkills';
import ResumeLanguages from './ResumeLanguages/ResumeLanguages';
import ResumeInterests from './ResumeInterests/ResumeInterests';

import './ResumeMain.scss';

const ResumeMain = () => {
  return (
    <div className="ResumeMain">
      <ResumeTraining />
      <ResumeSkills />
      <ResumePeopleSkills />
      <ResumeLanguages />
      <ResumeExperiences />
      <ResumePublications />
      <ResumeInterests />
    </div>
  );
};

export default ResumeMain;
