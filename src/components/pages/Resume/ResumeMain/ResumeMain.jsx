import ResumeTraining from './ResumeTraining/ResumeTraining';
import ResumeExperiences from './ResumeExperiences/ResumeExperiences';
import ResumePublications from './ResumePublications/ResumePublications';
import ResumeSkills from './ResumeSkills/ResumeSkills';

import './ResumeMain.scss';

const ResumeMain = () => {
  return (
    <div className="ResumeMain">
      <ResumeTraining />
      <ResumeExperiences />
      <ResumePublications />
      <ResumeSkills />
    </div>
  );
};

export default ResumeMain;
