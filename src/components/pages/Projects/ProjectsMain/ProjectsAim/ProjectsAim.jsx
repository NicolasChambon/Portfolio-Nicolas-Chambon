import './ProjectsAim.scss';

const ProjectsAim = ({ text }) => {
  return (
    <div className="ProjectsAim">
      <h4 className="ProjectsAim-title">Aim :</h4>

      <p className="ProjectsAim-text">{text}</p>
    </div>
  );
};

export default ProjectsAim;
