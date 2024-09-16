import ProjectsWepeak from './ProjectsWepeak/ProjectsWepeak';
import ProjectsMountify from './ProjectsMountify/ProjectsMountify';
import ProjectsPortfolio from './ProjectsPortfolio/ProjectsPortfolio';
import ProjectsNoita from './ProjectsNoita/ProjectsNoita';

import './ProjectsMain.scss';

const ProjectsMain = () => {
  return (
    <div className="ProjectsMain">
      <ProjectsNoita />
      <ProjectsWepeak />
      <ProjectsMountify />
      <ProjectsPortfolio />
    </div>
  );
};

export default ProjectsMain;
