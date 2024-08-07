import ProjectsAim from '../ProjectsAim/ProjectsAim';
import ProjectsContext from '../ProjectsContext/ProjectsContext';
import ProjectsFeatures from '../ProjectsFeatures/ProjectsFeatures';
import ProjectsStack from '../ProjectsStack/ProjectsStack';
import ProjectsLinks from '../ProjectsLinks/ProjectsLinks';

import reactIcon from '../../../../../assets/react-icon.svg';
import reduxIcon from '../../../../../assets/redux-icon.svg';
import sassIcon from '../../../../../assets/sass-icon.svg';

import phpIcon from '../../../../../assets/php-icon.svg';
import symfonyIcon from '../../../../../assets/symfony-icon.svg';
import mysqlIcon from '../../../../../assets/mysql-icon.svg';

import githubIcon from '../../../../../assets/github-icon.svg';
import vercelIcon from '../../../../../assets/vercel-icon.svg';

import wepeakFullLogo from '../../../../../assets/wepeak-projects-full-logo.svg';
import wepeakVideo from '../../../../../assets/wepeak-demo.mp4';

import './ProjectsWepeak.scss';

const ProjectsWepeak = () => {
  return (
    <div className="ProjectsWepeak">
      <img
        className="ProjectsWepeak-logo"
        src={wepeakFullLogo}
        alt="Wepeak logo"
        id="wepeak"
      />
      <ProjectsAim
        text="WePeak is a matchmaking platform currently under development where
        people can create sports outings that other users can sign up for and
        participate in. Our service allows users to plan and organize sports
        activities according to their preferences and specific needs. Whether
        it's a mountain hike, a city running session, or a surfing session
        on the coast, WePeak offers a wide range of options to cater to all
        activity levels and interests. Users can filter available outings by
        sport type, location, difficulty, duration, and group size, allowing
        them to quickly and easily find the activity that best suits them."
      />
      <ProjectsContext
        text="This project was carried out as part of a training program at the tech
        school O'Clock. It is a team project completed by four students
        (Tom Fourage, Melvin Leroux, Victor Lebecq, and myself). The
        demonstration video below describes the progress of the project after
        three weeks of work."
      />
      <ProjectsFeatures
        features={[
          '- Visualize activities',
          '- Filter activities (by sport, location, difficulty, etc.)',
          '- Search for an activity',
          '- Sign up and create a profile',
          '- Authenticate',
          '- Create an activity',
          '- Register for an activity',
        ]}
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

      <video className="ProjectsWepeak-video" src={wepeakVideo} controls />
    </div>
  );
};

export default ProjectsWepeak;
