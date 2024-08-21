import PropTypes from 'prop-types';

import './ProjectsAim.scss';

const ProjectsAim = ({ text }) => {
  return (
    <div className="ProjectsAim">
      <h4 className="ProjectsAim-title">Aim :</h4>

      <p className="ProjectsAim-text">{text}</p>
    </div>
  );
};

ProjectsAim.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProjectsAim;
