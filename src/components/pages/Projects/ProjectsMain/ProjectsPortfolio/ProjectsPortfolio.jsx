import ProjectsAim from '../ProjectsAim/ProjectsAim';
import ProjectsStack from '../ProjectsStack/ProjectsStack';
import ProjectsLinks from '../ProjectsLinks/ProjectsLinks';

import reactIcon from '../../../../../assets/icons/react-icon.svg';
import sassIcon from '../../../../../assets/icons/sass-icon.svg';

import githubIcon from '../../../../../assets/icons/github-icon.svg';
import vercelIcon from '../../../../../assets/icons/vercel-icon.svg';

import portfolioFullLogo from '../../../../../assets/logos/portfolio-projects-full-logo.svg';

import './ProjectsPortfolio.scss';

const ProjectsPortfolio = () => {
  return (
    <div className="ProjectsPortfolio">
      <img
        className="ProjectsPortfolio-logo"
        src={portfolioFullLogo}
        alt="Portfolio logo"
        id="portfolio"
      />
      <ProjectsAim text="This portfolio is a responsive web application that I created to showcase my skills as a web developer. It is built with React and Sass. It is a single-page application that allows users to discover my projects, my skills, and my contact information." />
      <ProjectsStack
        frontTechs={[
          { name: 'React', icon: reactIcon },
          { name: 'Sass', icon: sassIcon },
        ]}
      />
      <ProjectsLinks
        links={[
          {
            name: 'Front-end GitHub repository',
            url: 'https://github.com/NicolasChambon/Portfolio-Nicolas-Chambon',
            icon: githubIcon,
          },
          {
            name: 'Front-end deployment',
            url: 'https://nicolaschambondev.vercel.app/',
            icon: vercelIcon,
          },
        ]}
      />
    </div>
  );
};

export default ProjectsPortfolio;
