import './ProjectsBtn.scss';

const ProjectsBtn = ({ title, icon, label }) => {
  return (
    <a className="ProjectsBtn" href={`#${title}`} title={label}>
      <img className="ProjectsBtn-icon" src={icon} alt={`${title}-icon`} />
    </a>
  );
};

export default ProjectsBtn;
