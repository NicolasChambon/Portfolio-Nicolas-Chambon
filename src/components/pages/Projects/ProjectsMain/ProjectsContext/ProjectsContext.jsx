import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import './ProjectsContext.scss';

const ProjectsContext = ({ text }) => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="ProjectsContext">
      <h4 className="ProjectsContext-title">
        {language === 'en' ? 'Context :' : 'Contexte :'}
      </h4>

      <p className="ProjectsContext-text">{text}</p>
    </div>
  );
};

ProjectsContext.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProjectsContext;
