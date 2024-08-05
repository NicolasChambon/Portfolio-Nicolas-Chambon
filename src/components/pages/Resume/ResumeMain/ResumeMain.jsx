import ResumeTraining from './ResumeTraining/ResumeTraining';
import ResumeExperiences from './ResumeExperiences/ResumeExperiences';
import ResumePublications from './ResumePublications/ResumePublications';

import './ResumeMain.scss';

const ResumeMain = () => {
  return (
    <div className="ResumeMain">
      <ResumeTraining />
      <ResumeExperiences />
      <ResumePublications />
    </div>
  );
};

export default ResumeMain;
