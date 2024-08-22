import { useSelector } from 'react-redux';

import ProjectsAim from '../ProjectsAim/ProjectsAim';
import ProjectsContext from '../ProjectsContext/ProjectsContext';
import ProjectsFeatures from '../ProjectsFeatures/ProjectsFeatures';
import ProjectsStack from '../ProjectsStack/ProjectsStack';
import ProjectsLinks from '../ProjectsLinks/ProjectsLinks';

import reactIcon from '../../../../../assets/icons/react-icon.svg';
import reduxIcon from '../../../../../assets/icons/redux-icon.svg';
import sassIcon from '../../../../../assets/icons/sass-icon.svg';

import phpIcon from '../../../../../assets/icons/php-icon.svg';
import symfonyIcon from '../../../../../assets/icons/symfony-icon.svg';
import mysqlIcon from '../../../../../assets/icons/mysql-icon.svg';

import githubIcon from '../../../../../assets/icons/github-icon.svg';
import vercelIcon from '../../../../../assets/icons/vercel-icon.svg';

import wepeakFullLogo from '../../../../../assets/logos/wepeak-projects-full-logo.svg';
import wepeakVideo from '../../../../../assets/videos/wepeak-demo.mp4';

import './ProjectsWepeak.scss';

const ProjectsWepeak = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsWepeak">
      <img
        className="ProjectsWepeak-logo"
        src={wepeakFullLogo}
        alt="Wepeak logo"
        id="wepeak"
      />
      <ProjectsAim
        text={
          language === 'en'
            ? "WePeak is a matchmaking platform currently under development where people can create sports outings that other users can sign up for and participate in. Our service allows users to plan and organize sports activities according to their preferences and specific needs. Whether it's a mountain hike, a city running session, or a surfing session on the coast. WePeak offers a wide range of options to cater to all activity levels and interests. Users can filter available outings by sport type, location, difficulty, duration, and group size, allowing them to quickly and easily find the activity that best suits them."
            : "WePeak est une plateforme de mise en relation actuellement en cours de développement où les gens peuvent créer des sorties sportives auxquelles d'autres utilisateurs peuvent s'inscrire et participer. Notre service permet aux utilisateurs de planifier et d'organiser des activités sportives en fonction de leurs préférences et de leurs besoins spécifiques. Que ce soit une randonnée en montagne, une session de course en ville ou une session de surf sur la côte. WePeak propose une large gamme d'options pour répondre à tous les niveaux d'activité et à tous les intérêts. Les utilisateurs peuvent filtrer les sorties disponibles par type de sport, lieu, difficulté, durée et taille du groupe, ce qui leur permet de trouver rapidement et facilement l'activité qui leur convient le mieux."
        }
      />
      <ProjectsContext
        text={
          language === 'en'
            ? "This project was carried out as part of a training program at the tech school O'Clock. It is a team project completed by four students (Tom Fourage, Melvin Leroux, Victor Lebecq, and myself). The demonstration video below describes the progress of the project after three weeks of work."
            : "Ce projet a été réalisé dans le cadre d'une formation à l'école de tech O'Clock. Il s'agit d'un projet d'équipe réalisé par quatre étudiants (Tom Fourage, Melvin Leroux, Victor Lebecq et moi-même). La vidéo de démonstration ci-dessous décrit l'avancement du projet après trois semaines de travail."
        }
      />
      <ProjectsFeatures
        features={
          language === 'en'
            ? [
                '- Visualize activities',
                '- Filter activities (by sport, location, difficulty, etc.)',
                '- Search for an activity',
                '- Sign up and create a profile',
                '- Authenticate',
                '- Create an activity',
                '- Register for an activity',
              ]
            : [
                '- Visualiser les activités',
                '- Filtrer les activités (par sport, lieu, difficulté, etc.)',
                '- Rechercher une activité',
                "- S'inscrire et créer un profil",
                "- S'authentifier",
                '- Créer une activité',
                "- S'inscrire à une activité",
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
          { name: 'PHP', icon: phpIcon },
          { name: 'Symfony', icon: symfonyIcon },
          { name: 'MySQL', icon: mysqlIcon },
        ]}
      />
      <ProjectsLinks
        links={[
          {
            name: 'Front-end GitHub repository',
            url: 'https://github.com/NicolasChambon/WePeak-front-prod',
            icon: githubIcon,
          },
          {
            name: 'Front-end deployment (under development)',
            url: 'https://wepeak.vercel.app/',
            icon: vercelIcon,
          },
        ]}
      />
      <h4 className="ProjectsWepeak-videoTitle">
        {language === 'en' ? 'Demonstration :' : 'Démonstration :'}
      </h4>
      <video className="ProjectsWepeak-video" src={wepeakVideo} controls />
    </div>
  );
};

export default ProjectsWepeak;
