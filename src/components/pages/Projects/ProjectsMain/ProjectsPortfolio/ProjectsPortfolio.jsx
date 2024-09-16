import { useSelector } from 'react-redux';

import ProjectsDates from '../ProjectsDates/ProjectsDates';
import ProjectsAim from '../ProjectsAim/ProjectsAim';
import ProjectsStack from '../ProjectsStack/ProjectsStack';
import ProjectsLinks from '../ProjectsLinks/ProjectsLinks';

import reactIcon from '../../../../../assets/icons/react-icon.svg';
import sassIcon from '../../../../../assets/icons/sass-icon.svg';

import githubIcon from '../../../../../assets/icons/github-icon.svg';
import websiteIcon from '../../../../../assets/icons/website-icon.svg';

import portfolioFullLogo from '../../../../../assets/logos/portfolio-projects-full-logo.svg';

import './ProjectsPortfolio.scss';

const ProjectsPortfolio = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsPortfolio">
      <img
        className="ProjectsPortfolio-logo"
        src={portfolioFullLogo}
        alt="Portfolio logo"
        id="portfolio"
      />
      <ProjectsDates from="2024-08-04" to="2024-08-08" />
      <ProjectsAim
        text={
          language === 'en'
            ? 'This portfolio is a responsive web application that I created to showcase my skills as a web developer. It is built with React and Sass. It is a single-page application that allows users to discover my projects, my skills, and my contact information.'
            : "Ce portfolio est une application web responsive que j'ai créée pour mettre en avant mes compétences en tant que développeur web. Il est construit avec React et Sass. C'est une single page application qui permet aux utilisateurs de découvrir mes projets, mes compétences et mes coordonnées."
        }
      />

      <ProjectsStack
        frontTechs={[
          { name: 'React', icon: reactIcon },
          { name: 'Sass', icon: sassIcon },
        ]}
      />
      <ProjectsLinks
        links={[
          {
            name: 'GitHub repository',
            url: 'https://github.com/NicolasChambon/Portfolio-Nicolas-Chambon',
            icon: githubIcon,
          },
          {
            name: 'WebSite',
            url: 'https://nicolaschambondev.vercel.app/',
            icon: websiteIcon,
          },
        ]}
      />
    </div>
  );
};

export default ProjectsPortfolio;
