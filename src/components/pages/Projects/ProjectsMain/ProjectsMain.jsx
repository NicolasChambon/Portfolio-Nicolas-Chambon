import ProjectsWepeak from './ProjectsWepeak/ProjectsWepeak';
import ProjectsMountify from './ProjectsMountify/ProjectsMountify';

import './ProjectsMain.scss';

const ProjectsMain = () => {
  return (
    <div className="ProjectsMain">
      <ProjectsWepeak />
      <ProjectsMountify />
    </div>
  );
};

export default ProjectsMain;
