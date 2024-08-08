import { useEffect } from 'react';

import ProjectsNav from './ProjectsNav/ProjectsNav';
import ProjectsMain from './ProjectsMain/ProjectsMain';

import './Projects.scss';

const Projects = () => {
  useEffect(() => {
    const page = document.querySelector('.App-background');
    page.scrollTo(0, 0, 'instant');
  }, []);

  return (
    <main className="Projects">
      <ProjectsNav />
      <ProjectsMain />
    </main>
  );
};

export default Projects;
