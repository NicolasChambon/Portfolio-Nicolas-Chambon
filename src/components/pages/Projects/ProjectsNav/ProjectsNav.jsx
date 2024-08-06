import ProjectsBtn from './ProjectsBtn/ProjectsBtn';

import mountifyIcon from '../../../../assets/mountify-icon.svg';
import wepeakIcon from '../../../../assets/wepeak-icon.svg';
import ncIcon from '../../../../assets/logo-portfolio-nc-darkBlue.svg';

import './ProjectsNav.scss';

const ProjectsNav = () => {
  return (
    <div className="ProjectsNav">
      <ProjectsBtn
        className="ProjectsNav-btnWepeak"
        title="wepeak"
        icon={wepeakIcon}
        label="Wepeak"
      />
      <ProjectsBtn
        className="ProjectsNav-btnMountify"
        title="mountify"
        icon={mountifyIcon}
        label="Mountify"
      />
      <ProjectsBtn
        className="ProjectsNav-btnPortfolio"
        title="portfolio"
        icon={ncIcon}
        label="Portfolio"
      />
    </div>
  );
};

export default ProjectsNav;
