import { useSelector } from 'react-redux';

import ProjectsDates from '../ProjectsDates/ProjectsDates';
import ProjectsAim from '../ProjectsAim/ProjectsAim';
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
import websiteIcon from '../../../../../assets/icons/website-icon.svg';

import noitaFullLogo from '../../../../../assets/logos/noita-projects-full-logo.svg';
import noitaVideo from '../../../../../assets/videos/noita-demo.mp4';

import './ProjectsNoita.scss';

const ProjectsNoita = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsNoita">
      <img
        className="ProjectsNoita-logo"
        src={noitaFullLogo}
        alt="Noita logo"
        id="noita"
      />
      <ProjectsDates from="2024-09-02" to="2024-09-16" />
      <ProjectsAim
        text={
          language === 'en'
            ? 'Noïta, which means "Witch" and "Night", represents the free woman in harmony with the living. This group mixes traditional songs and modern compositions, inspired by various cultures such as Occitania, Greece, Finland, and Mexico. It is an experience as captivating to listen to as it is to see. The Noïta website was created to present the group and its news, and to allow group members to modify the site content.'
            : "Noïta, qui signifie « Sorcière » et « Nuit », représente la femme libre en harmonie avec le vivant. Ce groupe mélange chants traditionnels et compositions modernes, inspirés par des cultures variées telles que l'Occitanie, la Grèce, la Finlande et le Mexique. C'est une expérience aussi captivante à écouter qu'à voir. Le site web de Noïta a été créé pour présenter le groupe et ses actualités, et pour permettre aux membres du groupe de modifier le contenu du site."
        }
      />

      <ProjectsFeatures
        features={
          language === 'en'
            ? [
                '- Presentation of the Noïta singing group',
                '- Authentication to access the administration',
                '- Modification of the carousel images',
                '- Modification of the concert dates',
                '- Addition of news posts',
              ]
            : [
                '- Présentation du groupe de chant Noïta',
                "- S'authentifier pour accéder à l'administration",
                '- Modification des images du carrousel',
                '- Modification des dates des concerts',
                "- Ajout de posts d'actualité",
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
            name: 'Back-end GitHub repository',
            url: 'https://github.com/NicolasChambon/Noita-backend',
            icon: githubIcon,
          },
          {
            name: 'Front-end GitHub repository',
            url: 'https://github.com/NicolasChambon/Noita-frontend',
            icon: githubIcon,
          },
          {
            name: 'WebSite',
            url: 'https://noita.ch/',
            icon: websiteIcon,
          },
        ]}
      />
      <h4 className="ProjectsNoita-videoTitle">
        {language === 'en' ? 'Demonstration :' : 'Démonstration :'}
      </h4>
      <video className="ProjectsNoita-video" src={noitaVideo} controls />
    </div>
  );
};

export default ProjectsNoita;
