import ProjectsNav from './ProjectsNav/ProjectsNav';
import ProjectsMain from './ProjectsMain/ProjectsMain';

import './Projects.scss';

const Projects = () => {
  return (
    <main className="Projects">
      <ProjectsNav />
      <ProjectsMain />
    </main>
  );
};

export default Projects;
