import { useEffect } from 'react';

import ResumeNav from './ResumeNav/ResumeNav';
import ResumeMain from './ResumeMain/ResumeMain';

import './Resume.scss';

const Resume = () => {
  useEffect(() => {
    const page = document.querySelector('.App-background');
    page.scrollTo(0, 0, 'instant');
  }, []);
  return (
    <main className="Resume">
      <ResumeNav />
      <ResumeMain />
    </main>
  );
};

export default Resume;
