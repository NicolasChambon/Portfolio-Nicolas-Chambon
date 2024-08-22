import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import './ProjectsAim.scss';

const ProjectsAim = ({ text }) => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsAim">
      <h4 className="ProjectsAim-title">
        {language === 'en' ? 'Aim :' : 'Objectif :'}
      </h4>

      <p className="ProjectsAim-text">{text}</p>
    </div>
  );
};

ProjectsAim.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProjectsAim;
