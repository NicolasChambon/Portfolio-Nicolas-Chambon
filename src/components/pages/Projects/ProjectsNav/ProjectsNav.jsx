import ProjectsBtn from './ProjectsBtn/ProjectsBtn';

import mountifyIcon from '../../../../assets/icons/mountify-icon.svg';
import wepeakIcon from '../../../../assets/icons/wepeak-icon.svg';
import ncIcon from '../../../../assets/logos/logo-portfolio-nc-darkBlue.svg';
import noitaIcon from '../../../../assets/icons/noita-icon.svg';

import './ProjectsNav.scss';

const ProjectsNav = () => {
  return (
    <div className="ProjectsNav">
      <ProjectsBtn
        className="ProjectsNav-btnNoita"
        title="noita"
        icon={noitaIcon}
        label="Noita"
      />
      <ProjectsBtn
        className="ProjectsNav-btnWepeak"
        title="wepeak"
        icon={wepeakIcon}
        label="WePeak"
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
