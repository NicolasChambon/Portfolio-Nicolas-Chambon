import PropTypes from 'prop-types';

import './ResumeBtn.scss';

const ResumeBtn = ({ title, icon, label }) => {
  return (
    <button
      className="ResumeBtn"
      title={label}
      onClick={() => {
        const section = document.getElementById(title);
        section.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <img className="ResumeBtn-icon" src={icon} alt={`${title}-icon`} />
    </button>
  );
};

ResumeBtn.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ResumeBtn;
