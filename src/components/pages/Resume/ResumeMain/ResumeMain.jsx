import ResumeTraining from './ResumeTraining/ResumeTraining';
import ResumeExperiences from './ResumeExperiences/ResumeExperiences';

import './ResumeMain.scss';

const ResumeMain = () => {
  return (
    <div className="ResumeMain">
      <ResumeTraining />
      <ResumeExperiences />
    </div>
  );
};

export default ResumeMain;
