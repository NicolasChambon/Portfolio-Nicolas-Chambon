import ProjectsWepeak from './ProjectsWepeak/ProjectsWepeak';
import ProjectsMountify from './ProjectsMountify/ProjectsMountify';
import ProjectsPortfolio from './ProjectsPortfolio/ProjectsPortfolio';

import './ProjectsMain.scss';

const ProjectsMain = () => {
  return (
    <div className="ProjectsMain">
      <ProjectsWepeak />
      <ProjectsMountify />
      <ProjectsPortfolio />
    </div>
  );
};

export default ProjectsMain;
