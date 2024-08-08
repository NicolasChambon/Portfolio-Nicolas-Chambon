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

export default ProjectsBtn;
