import PropTypes from 'prop-types';

import './ProjectsBtn.scss';

const ProjectsBtn = ({ title, icon, label }) => {
  return (
    <button
      className="ProjectsBtn"
      title={label}
      onClick={() => {
        const section = document.getElementById(title);
        section.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <img className="ProjectsBtn-icon" src={icon} alt={`${title}-icon`} />
    </button>
  );
};

ProjectsBtn.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProjectsBtn;
