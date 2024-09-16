import { useSelector } from 'react-redux';

import ProjectsDates from '../ProjectsDates/ProjectsDates';
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
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsMountify">
      <img
        className="ProjectsMountify-logo"
        src={mountifyFullLogo}
        alt="Mountify logo"
        id="mountify"
      />
      <ProjectsDates from="2024-06-17" to="..." />
      <ProjectsAim
        text={
          language === 'en'
            ? 'Mountify is a responsive web application currently under development but already well advanced. It will allow users to discover and list mountains from around the world. Users will be able to add new mountains, share photos and descriptions, and explore mountains created by other users. It consists of a back-end that is a REST API and a front-end built with React and Redux.'
            : "Mountify est une application web responsive actuellement en cours de développement mais déjà bien avancée. Elle permettra aux utilisateurs de découvrir et de lister des montagnes du monde entier. Les utilisateurs pourront ajouter de nouvelles montagnes, partager des photos et des descriptions, et explorer les montagnes créées par d'autres utilisateurs. Elle se compose d'un back-end qui est une API REST et d'un front-end construit avec React et Redux."
        }
      />
      <ProjectsContext
        text={
          language === 'en'
            ? "The utility of this application for the general public is quite limited; its main purpose is to showcase my full range of skills in a single project. During the final part of my web developer training at O'Clock, I decided to put my skills as a junior full-stack developer into practice by creating this application. I am working entirely on my own on this project, which also allows me to continue learning. Among other things, I was able to deploy the API on an OVH VPS using Docker technology."
            : "L'utilité de cette application pour le grand public est assez limitée ; son objectif principal est de mettre en avant l'ensemble de mes compétences dans un seul projet. Lors de la dernière partie de ma formation de développeur web chez O'Clock, j'ai décidé de mettre en pratique mes compétences de développeur full-stack junior en créant cette application. Je travaille entièrement seul sur ce projet, ce qui me permet également de continuer d'apprendre. J'ai notamment pu déployer l'API sur un VPS OVH en utilisant la technologie Docker."
        }
      />
      <ProjectsFeatures
        features={
          language === 'en'
            ? [
                '- Visualize mountain list',
                '- Visualize mountain on an interactive map',
                '- Filter mountains (by country, location, etc.)',
                '- Search for an mountain',
                '- Sign up and create a profile',
                '- Authenticate',
                '- Create a mountain',
                '- Add a mountain to favorites',
              ]
            : [
                '- Visualiser la liste des montagnes',
                '- Visualiser une montagne sur une carte interactive',
                '- Filtrer les montagnes (par pays, lieu, etc.)',
                '- Rechercher une montagne',
                "- S'inscrire et créer un profil",
                "- S'authentifier",
                '- Créer une montagne',
                '- Ajouter une montagne aux favoris',
              ]
        }
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
