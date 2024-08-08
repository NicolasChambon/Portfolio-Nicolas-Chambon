import ProjectsAim from '../ProjectsAim/ProjectsAim';
import ProjectsContext from '../ProjectsContext/ProjectsContext';
import ProjectsFeatures from '../ProjectsFeatures/ProjectsFeatures';
import ProjectsStack from '../ProjectsStack/ProjectsStack';
import ProjectsLinks from '../ProjectsLinks/ProjectsLinks';

import reactIcon from '../../../../../assets/icons/react-icon.svg';
import reduxIcon from '../../../../../assets/icons/redux-icon.svg';
import sassIcon from '../../../../../assets/icons/sass-icon.svg';

import nodeIcon from '../../../../../assets/icons/node-icon.svg';
import expressIcon from '../../../../../assets/icons/express-icon.svg';
import postgresqlIcon from '../../../../../assets/icons/postgresql-icon.svg';

import dockerIcon from '../../../../../assets/icons/docker-icon.svg';
import ovhIcon from '../../../../../assets/icons/ovh-icon.svg';

import githubIcon from '../../../../../assets/icons/github-icon.svg';

import mountifyFullLogo from '../../../../../assets/logos/mountify-projects-full-logo.svg';
import mountifyimage from '../../../../../assets/images/mountify-screenshot.jpg';

import './ProjectsMountify.scss';

const ProjectsMountify = () => {
  return (
    <div className="ProjectsMountify">
      <img
        className="ProjectsMountify-logo"
        src={mountifyFullLogo}
        alt="Mountify logo"
        id="mountify"
      />
      <ProjectsAim text="Mountify is a responsive web application currently under development but already well advanced. It will allow users to discover and list mountains from around the world. Users will be able to add new mountains, share photos and descriptions, and explore mountains created by other users. It consists of a backend that is a REST API and a front-end built with React and Redux." />
      <ProjectsContext text="The utility of this application for the general public is quite limited; its main purpose is to showcase my full range of skills in a single project. During the final part of my web developer training at O'Clock, I decided to put my skills as a junior full-stack developer into practice by creating this application. I am working entirely on my own on this project, which also allows me to continue learning. Among other things, I was able to deploy the API on an OVH VPS using Docker technology." />
      <ProjectsFeatures
        features={[
          '- Visualize mountain list',
          '- Visualize mountain on an interactive map',
          '- Filter mountains (by country, location, etc.)',
          '- Search for an mountain',
          '- Sign up and create a profile',
          '- Authenticate',
          '- Create a mountain',
          '- Add a mountain to favorites',
        ]}
      />
      <ProjectsStack
        frontTechs={[
          { name: 'React', icon: reactIcon },
          { name: 'Redux', icon: reduxIcon },
          { name: 'Sass', icon: sassIcon },
        ]}
        backTechs={[
          { name: 'Node.js', icon: nodeIcon },
          { name: 'Express', icon: expressIcon },
          { name: 'PostgreSQL', icon: postgresqlIcon },
        ]}
        otherTechs={[
          { name: 'Docker', icon: dockerIcon },
          { name: 'OVH', icon: ovhIcon },
        ]}
      />
      <ProjectsLinks
        links={[
          {
            name: 'Front-end GitHub repository',
            url: 'https://github.com/NicolasChambon/Mountify-frontend',
            icon: githubIcon,
          },
          {
            name: 'Back-end GitHub repository',
            url: 'https://github.com/NicolasChambon/Mountify-backend',
            icon: githubIcon,
          },
        ]}
      />
      <h4 className="ProjectsMountify-illustrationTitle">Illustration :</h4>
      <img
        className="ProjectsMountify-illustration"
        src={mountifyimage}
        alt="Mountify illustration"
      />
    </div>
  );
};

export default ProjectsMountify;
