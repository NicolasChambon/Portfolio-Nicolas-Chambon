import ResumeNav from './ResumeNav/ResumeNav';
import ResumeMain from './ResumeMain/ResumeMain';

import './Resume.scss';

const Resume = () => {
  return (
    <main className="Resume">
      <ResumeNav />
      <ResumeMain />
    </main>
  );
};

export default Resume;
